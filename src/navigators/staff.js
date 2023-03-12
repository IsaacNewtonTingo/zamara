import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Staff from "../screens/staff";
import EditStaff from "../screens/edit-staff";
import AddStaff from "../screens/add-staff";

export default function StaffStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={Staff} name="Staff" />
      <Stack.Screen component={EditStaff} name="EditStaff" />
      <Stack.Screen component={AddStaff} name="AddStaff" />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
