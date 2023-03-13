import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { globalStyles } from "../assets/styles/global-styles";
import PrimaryText from "../components/text/primary-text";

import { CredentialsContext } from "../context/credentials.js";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { ScrollView } from "react-native";
import CardGradient from "../components/cards/card-gradient";
import { HStack } from "native-base";
import GrayText from "../components/text/gray-text";
import axios from "axios";
import LoadingData from "../components/Loading/loading-data";

const { width } = Dimensions.get("window");

const B = (props) => <PrimaryText>{props.children}</PrimaryText>;

export default function Home() {
  const { storedCredentials } = useContext(CredentialsContext);

  const url = `${process.env.DUMMY_JSON_ENDPOINT}`;

  const userID = storedCredentials.id;

  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [doB, setDoB] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [eyeColor, setEyeColor] = useState("");

  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    await axios
      .get(`${url}/users/${userID}`)
      .then((response) => {
        setLoadingData(false);

        setAge(response.data.age);
        setPhone(response.data.phone);
        setDoB(response.data.birthDate);
        setBloodGroup(response.data.bloodGroup);
        setHeight(response.data.height);
        setWeight(response.data.weight);
        setEyeColor(response.data.eyeColor);
      })
      .catch((err) => {
        setLoadingData(false);
        console.log(err);
      });
  }
  return (
    <ScrollView style={[globalStyles.container, { padding: 20 }]}>
      {loadingData && <LoadingData isOpen={loadingData} />}

      <HStack alignItems="center" marginBottom={5}>
        {/* <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: storedCredentials.image }}
          />
        </View> */}
        <GrayText style={{ fontSize: 25 }}>
          Welcome,{" "}
          <B>
            {storedCredentials.firstName} {storedCredentials.lastName}
          </B>
        </GrayText>
      </HStack>

      <CardGradient style={styles.card}>
        <HStack justifyContent="space-between">
          <HStack space={5}>
            <MaterialIcons name="date-range" size={20} color={colors.gray} />
            <GrayText style={{ fontFamily: "Montserrat-Regular" }}>
              Age
            </GrayText>
          </HStack>

          <PrimaryText>{age}</PrimaryText>
        </HStack>
      </CardGradient>

      <CardGradient style={styles.card}>
        <HStack justifyContent="space-between">
          <HStack space={5}>
            <MaterialCommunityIcons
              name="gender-male-female"
              size={20}
              color={colors.gray}
            />
            <GrayText style={{ fontFamily: "Montserrat-Regular" }}>
              Gender
            </GrayText>
          </HStack>

          <PrimaryText>{storedCredentials.gender}</PrimaryText>
        </HStack>
      </CardGradient>

      <CardGradient style={styles.card}>
        <HStack justifyContent="space-between">
          <HStack space={5}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={colors.gray}
            />
            <GrayText style={{ fontFamily: "Montserrat-Regular" }}>
              Email
            </GrayText>
          </HStack>

          <PrimaryText>{storedCredentials.email}</PrimaryText>
        </HStack>
      </CardGradient>

      <CardGradient style={styles.card}>
        <HStack justifyContent="space-between">
          <HStack space={5}>
            <Feather name="phone" size={20} color={colors.gray} />
            <GrayText style={{ fontFamily: "Montserrat-Regular" }}>
              Phone number
            </GrayText>
          </HStack>

          <PrimaryText>{phone}</PrimaryText>
        </HStack>
      </CardGradient>

      <CardGradient style={styles.card}>
        <HStack justifyContent="space-between">
          <HStack space={5}>
            <MaterialCommunityIcons
              name="calendar-account"
              size={20}
              color={colors.gray}
            />
            <GrayText style={{ fontFamily: "Montserrat-Regular" }}>
              Birth Date
            </GrayText>
          </HStack>

          <PrimaryText>{doB}</PrimaryText>
        </HStack>
      </CardGradient>

      <CardGradient style={styles.card}>
        <HStack justifyContent="space-between">
          <HStack space={5}>
            <MaterialCommunityIcons
              name="blood-bag"
              size={20}
              color={colors.gray}
            />
            <GrayText style={{ fontFamily: "Montserrat-Regular" }}>
              Blood group
            </GrayText>
          </HStack>

          <PrimaryText>{bloodGroup}</PrimaryText>
        </HStack>
      </CardGradient>

      <CardGradient style={styles.card}>
        <HStack justifyContent="space-between">
          <HStack space={5}>
            <MaterialCommunityIcons
              name="human-male-height"
              size={20}
              color={colors.gray}
            />
            <GrayText style={{ fontFamily: "Montserrat-Regular" }}>
              Height
            </GrayText>
          </HStack>

          <PrimaryText>{height}</PrimaryText>
        </HStack>
      </CardGradient>

      <CardGradient style={styles.card}>
        <HStack justifyContent="space-between">
          <HStack space={5}>
            <MaterialCommunityIcons
              name="weight-kilogram"
              size={20}
              color={colors.gray}
            />
            <GrayText style={{ fontFamily: "Montserrat-Regular" }}>
              Weight
            </GrayText>
          </HStack>

          <PrimaryText>{weight}</PrimaryText>
        </HStack>
      </CardGradient>

      <CardGradient style={styles.card}>
        <HStack justifyContent="space-between">
          <HStack space={5}>
            <MaterialIcons
              name="remove-red-eye"
              size={20}
              color={colors.gray}
            />
            <GrayText style={{ fontFamily: "Montserrat-Regular" }}>
              Eye color
            </GrayText>
          </HStack>

          <PrimaryText>{eyeColor}</PrimaryText>
        </HStack>
      </CardGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  imageContainer: {
    width: width / 3,
    height: width / 3,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
