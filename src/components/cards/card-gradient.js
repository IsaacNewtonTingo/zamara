import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../assets/colors/colors";

export default function CardGradient(props) {
  return (
    <LinearGradient
      start={[0.0, 0.5]}
      end={[1.0, 0.5]}
      locations={[0.0, 1.0]}
      colors={[colors.white, colors.light]}
      style={props.style}
    >
      {props.children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});
