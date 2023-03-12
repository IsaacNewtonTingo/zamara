import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../assets/styles/global-styles";

export default function PrimaryText(props) {
  return (
    <Text style={[globalStyles.regularText, props.style]}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({});
