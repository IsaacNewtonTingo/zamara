import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import PrimaryText from "../text/primary-text";
import colors from "../../assets/colors/colors";

export default function PrimaryButton(props) {
  const { onPress, style, title, submitting, disabled } = props;
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <PrimaryText style={{ color: colors.light }}>{title}</PrimaryText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark,
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
