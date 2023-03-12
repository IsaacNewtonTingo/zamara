import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Staff from "../screens/staff";
import Continents from "../screens/continents";

export default function ContinentsStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Continents} name="ContinentsfScreen" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
