import React from "react";
import { View, Text } from "./Themed";
import { StyleSheet } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export const SingleHistoryComponent = (props: any) => {
  const historyData = props.historyData;
  const convertDateTimeString = (dateString: string) => {
    let vDateString = dateString.substring(0, 10);
    let vDate = new Date(vDateString);
    //beware THE MONTH is ZERO-INDEXED ! So January is zero 0 NOT one 1
    let formattedDate = `${vDate.getUTCDate()}/${
      vDate.getMonth() + 1
    }/${vDate.getFullYear()}`;
    return formattedDate;
  };
  let DUE_DATE = convertDateTimeString(historyData.due_date);
  let wasAmountReceived = Number(historyData.received_amount) != 0;

  return (
    <View
      style={[styles.col,]}
    >
     
      <View style={styles.col,{justifyContent:"flex-start"}}>
       <Text style={styles.textTitleFont}>{`Due date : `} </Text>
        <Text style={styles.dateTextFont}>{DUE_DATE} </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textTitleFont}>{`Amount : `} </Text>
        <Text style={styles.textTitleFont}>
          {Number(historyData.installment_amount)} KWD
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textTitleFont}>{`Received amount : `} </Text>
        <Text style={styles.textTitleFont}>
          {Number(historyData.received_amount)} KWD
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textTitleFont}>{`Installement Number : `} </Text>
        <Text style={styles.textTitleFont}>
          {historyData.number}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: Layout.window.width ,
    maxHeight: 130,
    marginBottom:3,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  darkBackground: {
    backgroundColor: Colors.light.darkBackground,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    backgroundColor: "transparent",
  },
  textNumberFont: {
    fontSize: 14,
    fontWeight: "bold",
  },
  textTitleFont: {
    fontSize: 15,
    textAlign: "left",
    fontWeight: "700",
    color: Colors.light.grayColor
  },

  dateTextFont:{
    fontSize: 25,
    textAlign: "left",
    fontWeight: "700",
    color:Colors.light.greenText
  }
  
  
});
