import { StyleSheet, Text, View } from "react-native";
import React from "react";

import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
} from "native-base";

import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";

export default function PrimaryInput(props) {
  const {
    onChangeText,
    InputLeftElement,
    value,
    InputRightElement,
    placeholder,
    onBlur,
    secureTextEntry,
    keyboardType,
    autoCapitalize,
  } = props;
  return (
    <Input
      onChangeText={onChangeText}
      value={value}
      borderRadius={10}
      backgroundColor={colors.white}
      borderColor={colors.light}
      w={{
        base: "100%",
        md: "25%",
      }}
      height="50"
      InputLeftElement={InputLeftElement}
      InputRightElement={InputRightElement}
      placeholder={placeholder}
      onBlur={onBlur}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
    />
  );
}

const styles = StyleSheet.create({});
