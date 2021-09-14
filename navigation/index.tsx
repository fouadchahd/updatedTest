import * as React from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import NotFoundScreen from "../screens/NotFoundScreen";
import AccountScreen from "../screens/AccountScreen";
import PaymentHistory from "../screens/PaymentHistory";

import { RootStackParamList } from "../types";
import Colors from "../constants/Colors";
// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Account">
      <Stack.Screen
        name="Account"
        
        component={AccountScreen}
        options={{
          headerShown: true,
          title: "account_no",
          headerStyle:{backgroundColor:Colors.light.headerBackgroundColor},
          headerRight: () => (
            <Text
              style={{
                marginRight: 10,
                color: Colors.light.primaryColor,
                fontWeight: "bold",
              }}
            >
              Summary
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="PaymentHistory"
        component={PaymentHistory}
        options={{ headerBackTitle: " ", title: "Account Repayments" , headerStyle:{backgroundColor:Colors.light.headerBackgroundColor},}}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
