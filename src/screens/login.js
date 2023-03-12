import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../assets/styles/global-styles";
import PrimaryText from "../components/text/primary-text";
import CardGradient from "../components/cards/card-gradient";
import PrimaryInput from "../components/inputs/primary-input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import PrimaryButton from "../components/buttons/primary-btn";

const { width, height } = Dimensions.get("window");

import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
} from "native-base";

import { MaterialIcons, Feather } from "@expo/vector-icons";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [secureTextEntry, setSecureTextEntry] = useState(true);
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
            />

            <PrimaryText style={{ marginVertical: 10 }}>Password *</PrimaryText>
            <PrimaryInput
              value={password}
              secureTextEntry={secureTextEntry}
              onChangeText={setPassword}
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

            <PrimaryButton title="Login" style={{ marginTop: 20 }} />
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
