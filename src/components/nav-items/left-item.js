import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

import { Octicons } from "@expo/vector-icons";
import colors from "../../assets/colors/colors";
export default function LeftItem({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
      <Octicons name="three-bars" size={24} color={colors.light} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
