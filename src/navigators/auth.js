import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/login";
import colors from "../assets/colors/colors";

export default function AuthNav() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.dark,
        },
      }}
    >
      <Stack.Screen component={Login} name="Login" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
