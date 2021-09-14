import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";

const SingleLoanUpperGrid = ({
  title,
  number,
}: {
  title: string;
  number: string;
}) => {
  return (
    <View style={styles.gridView}>
      <Text style={[styles.centeredText, styles.numberTextFont]}>
        {Number(number)}
      </Text>
      <View style={styles.devider}></View>
      <Text style={styles.centeredText}>{title}</Text>
    </View>
  );
};

export default SingleLoanUpperGrid;

const styles = StyleSheet.create({
  devider: {
    height: 3,
    marginVertical: 3,
    alignSelf: "center",
    width: Layout.window.width * 0.15,
    backgroundColor: Colors.light.deviderColor,
    opacity: 0.5,
  },
  gridView: {},
  centeredText: {
    textAlign: "center",
color:Colors.light.grayColor,
  },
  numberTextFont: {
    fontSize: 17,
    fontWeight: "bold",
    color:"black"
  },
});
