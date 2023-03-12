import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Staff from "../screens/staff";
import EditStaff from "../screens/edit-staff";
import AddStaff from "../screens/add-staff";
import colors from "../assets/colors/colors";
import LeftItem from "../components/nav-items/left-item";

export default function StaffStack({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.light,
        headerStyle: {
          backgroundColor: colors.dark,
        },
      }}
    >
      <Stack.Screen
        component={Staff}
        name="Staff"
        options={{
          headerLeft: (props) => (
            <LeftItem navigation={navigation} {...props} />
          ),
        }}
      />
      <Stack.Screen
        component={EditStaff}
        name="EditStaff"
        options={{
          headerTitle: "Update",
        }}
      />
      <Stack.Screen
        component={AddStaff}
        name="AddStaff"
        options={{
          headerTitle: "Add new staff",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
