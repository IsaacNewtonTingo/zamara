import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Staff from "../screens/staff";
import Home from "../screens/home";
import colors from "../assets/colors/colors";
import LeftItem from "../components/nav-items/left-item";

export default function HomeStack({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.light,
        headerLeft: (props) => <LeftItem navigation={navigation} {...props} />,
        headerStyle: {
          backgroundColor: colors.dark,
        },
      }}
    >
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerTitle: "Dashboard",
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
