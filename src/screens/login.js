import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import PrimaryText from "../components/text/primary-text";
import CardGradient from "../components/cards/card-gradient";
import PrimaryInput from "../components/inputs/primary-input";
import PrimaryButton from "../components/buttons/primary-btn";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const { width, height } = Dimensions.get("window");
import { globalStyles } from "../assets/styles/global-styles";

import { Icon } from "native-base";

import { MaterialIcons, Feather } from "@expo/vector-icons";
import axios from "axios";
import { showMyToast } from "../functions/show-toast";
import { CredentialsContext } from "../context/credentials";

import * as SecureStore from "expo-secure-store";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  async function login() {
    setSubmitting(true);
    await axios
      .post(
        `https://dummyjson.com/auth/login`,
        {
          username: userName,
          password,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(async (response) => {
        setSubmitting(false);

        console.log(response.data);

        showMyToast({
          status: "succcess",
          title: "Success",
          description: "Login successfull",
        });

        setStoredCredentials(response.data);
        await SecureStore.setItemAsync(
          "userData",
          JSON.stringify(response.data)
        );
      })
      .catch((err) => {
        setSubmitting(false);
        console.log(err);
        showMyToast({
          status: "error",
          title: "Failed",
          description: "Something went wrong while trying to login",
        });
      });
  }
  return (
    <View style={globalStyles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={[, { alignItems: "center", height: height }]}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/login-img.png")}
        />

        <View style={styles.shadow}>
          <CardGradient style={styles.lowerContainer}>
            <PrimaryText style={{ marginVertical: 10 }}>Username *</PrimaryText>
            <PrimaryInput
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="person" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              value={userName}
              onChangeText={setUserName}
              placeholder="e.g optimus"
              autoCapitalize="none"
            />

            <PrimaryText style={{ marginVertical: 10 }}>Password *</PrimaryText>
            <PrimaryInput
              value={password}
              secureTextEntry={secureTextEntry}
              onChangeText={setPassword}
              placeholder="********"
              autoCapitalize="none"
              keyboardType="email-address"
              InputLeftElement={
                <Icon
                  as={<Feather name="lock" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              //   InputRightElement={
              //     <TouchableOpacity
              //       onPress={() => setSecureTextEntry(!secureTextEntry)}
              //     >
              //       <Icon
              //         as={
              //           <MaterialIcons
              //             name={secureTextEntry ? "visibility" : "visibility-off"}
              //           />
              //         }
              //         size={5}
              //         mr="2"
              //         color="muted.400"
              //       />
              //     </TouchableOpacity>
              //   }
            />

            <PrimaryButton
              onPress={login}
              submitting={submitting}
              disabled={submitting}
              title="Login"
              style={{ marginTop: 20 }}
            />
          </CardGradient>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width / 2,
    height: width / 2,
    marginVertical: 20,
    zIndex: 1,
  },
  lowerContainer: {
    width: width - 40,
    borderRadius: 10,
    padding: 40,
    shadowColor: "gray",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: "white",
  },
  shadow: {
    shadowColor: "gray",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    position: "absolute",
    top: width / 2.5,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
