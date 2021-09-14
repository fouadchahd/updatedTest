import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";

import { RootStackParamList } from "../types";
import { getLoanHistory } from "../services/loan.service";
import { SingleHistoryComponent } from "../components/SingleHistoryComponent";
import Colors from "../constants/Colors";

const PaymentHistory = ({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, "PaymentHistory">) => {
  const accountNo = route.params.accountNo;  
  const [historyData, setHistoryData] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchLoanHistory = async (account_no: string) => {
    setIsLoading(true);
    const data=await getLoanHistory(account_no);
    setHistoryData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchLoanHistory(accountNo);
  }, []);

  if (isLoading)
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="gray"></ActivityIndicator>
      </SafeAreaView>
    );
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {historyData?.repayment?.map((history: any) => (
        <SingleHistoryComponent key={`${history.id}`} historyData={history} />
      ))}
    </ScrollView>
  );
};

export default PaymentHistory;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 10,
  },
  headerRightText: {
    fontSize: 13,
    fontWeight: "700",
    marginRight: 10,
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderRadius: 5,
    color: "white",
    overflow: "hidden",
  },
});
