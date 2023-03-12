import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../assets/styles/global-styles";

export default function SecondaryText(props) {
  return (
    <Text style={[globalStyles.boldText, props.style]}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({});
