import "react-native-gesture-handler";

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { NativeBaseProvider } from "native-base";
import { CredentialsContext } from "./src/context/credentials";
import { useFonts } from "expo-font";

import * as SecureStore from "expo-secure-store";

import Decider from "./src/navigators/decider";
import Login from "./src/screens/login";

export default function App() {
  const [storedCredentials, setStoredCredentials] = useState(null);

  useEffect(() => {
    checkStoredCredentials();
  }, []);

  const [fontsLoaded] = useFonts({
    "Montserrat-Bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("./src/assets/fonts/Montserrat-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  async function checkStoredCredentials() {
    await SecureStore.getItemAsync("userData").then((response) => {
      if (response) {
        setStoredCredentials(JSON.parse(response));
      } else {
        setStoredCredentials(null);
      }
    });
  }

  return (
    <CredentialsContext.Provider
      value={{ storedCredentials, setStoredCredentials }}
    >
      <NativeBaseProvider>
        <NavigationContainer>
          <Decider />
          <StatusBar style="light" />
        </NavigationContainer>
      </NativeBaseProvider>
    </CredentialsContext.Provider>
  );
}
