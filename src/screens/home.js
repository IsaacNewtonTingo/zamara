import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import React, { useContext } from "react";
import { globalStyles } from "../assets/styles/global-styles";
import PrimaryText from "../components/text/primary-text";

import { CredentialsContext } from "../context/credentials.js";
import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import { ScrollView } from "react-native";
import CardGradient from "../components/cards/card-gradient";
import { HStack } from "native-base";
import GrayText from "../components/text/gray-text";

const { width } = Dimensions.get("window");

const B = (props) => <PrimaryText>{props.children}</PrimaryText>;

export default function Home() {
  const { storedCredentials } = useContext(CredentialsContext);
  return (
    <ScrollView style={[globalStyles.container, { padding: 20 }]}>
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

          <PrimaryText>N/A</PrimaryText>
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
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={colors.gray}
            />
            <GrayText style={{ fontFamily: "Montserrat-Regular" }}>
              Phone number
            </GrayText>
          </HStack>

          <PrimaryText>N/A</PrimaryText>
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

          <PrimaryText>N/A</PrimaryText>
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

          <PrimaryText>N/A</PrimaryText>
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

          <PrimaryText>N/A</PrimaryText>
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

          <PrimaryText>N/A</PrimaryText>
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

          <PrimaryText>N/A</PrimaryText>
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
