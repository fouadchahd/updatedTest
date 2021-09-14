import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { RootStackParamList } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { getLoans } from "../services/loan.service";
import Colors from "../constants/Colors";
import { View } from "../components/Themed";
import Layout from "../constants/Layout";
import SingleLoanComponent from "../components/SingleLoanComponent";

const AccountScreen = ({
  navigation,
}: StackScreenProps<RootStackParamList, "Account">) => {
  const [loans, setLoans] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const screenWidth = Layout.window.width;

  const fetchLoans = async() => {    
    setIsLoading(true);
    const data = await getLoans();
      setLoans(data);setIsLoading(false);
  };

  
  useEffect(() => {
    navigation.setOptions({ title: `${loans[activeItem]?.account_no ?? ""}` });
  }, [loans]);

  useEffect(() => {
    fetchLoans();    
  }, []);

  const handleScrollX = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    let newActiveItem = Number(
      Number(event.nativeEvent.contentOffset.x / screenWidth).toFixed(0)
    );
    setActiveItem(newActiveItem);
      navigation.setOptions({
        title: `${loans[newActiveItem]?.account_no ?? ""}`,
      });
    Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
      useNativeDriver: true,
    });
  };
  if(isLoading)
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="gray"></ActivityIndicator>
      </SafeAreaView>
    );

  return (
    <View style={styles.container}>
      <View style={styles.paginationDots}>
        {loans?.map((loan, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index == activeItem && {
                backgroundColor: Colors.light.gaugeColor,
              },
            ]}
          ></View>
        ))}
      </View>
      <Animated.FlatList
        data={loans}
        horizontal={true}
        pagingEnabled
        scrollEventThrottle={60}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScrollX}
        keyExtractor={(item) => `${item?.account_no}_${item.present_balance}`}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: Colors.light.lightBlue,
              alignItems: "center",
              width: Layout.window.width,
              height: "auto",
            }}
          >
            <SingleLoanComponent loanData={item} navigation={navigation} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  btn: { backgroundColor: "green", padding: 20 },
  paginationDots: {
    position: "absolute",
    bottom: 55,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 8,
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    zIndex: 10000,
  },
  dot: {
    height: 8,
    width: 8,
    marginLeft: 9,
    borderRadius: 4,
    backgroundColor: "black",
  },
});

export default AccountScreen;
