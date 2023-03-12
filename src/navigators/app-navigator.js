import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/home";
import HomeStack from "./home";
import StaffStack from "./staff";
import ContinentsStack from "./continents";
import colors from "../assets/colors/colors";
import DrawerContent from "../components/drawer/drawer-content";

export default function AppNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        headerTintColor: colors.light,
        headerStyle: {
          backgroundColor: colors.dark,
        },
      }}
    >
      <Drawer.Screen
        component={HomeStack}
        name="HomeStack"
        options={{
          headerTitle: "Dashboard",
        }}
      />
      <Drawer.Screen component={StaffStack} name="StaffStack" />
      <Drawer.Screen component={ContinentsStack} name="ContinentsStack" />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
