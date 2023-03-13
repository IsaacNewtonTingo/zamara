import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Staff from "../screens/staff";
import Continents from "../screens/continents";
import colors from "../assets/colors/colors";

export default function ContinentsStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Continents",
        headerTintColor: colors.light,
        headerStyle: {
          backgroundColor: colors.dark,
        },
      }}
    >
      <Stack.Screen component={Continents} name="Continents" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
