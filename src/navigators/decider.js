import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { CredentialsContext } from "../context/credentials";
import AppNavigator from "./app-navigator";
import AuthNav from "./auth";

export default function Decider() {
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  return <>{storedCredentials ? <AppNavigator /> : <AuthNav />}</>;
}

const styles = StyleSheet.create({});
