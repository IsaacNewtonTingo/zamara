import { StyleSheet, Dimensions, Text, View } from "react-native";
import React, { useState } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { globalStyles } from "../assets/styles/global-styles";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Icon, HStack } from "native-base";

import PrimaryInput from "../components/inputs/primary-input";
import PrimaryText from "../components/text/primary-text";
import PrimaryButton from "../components/buttons/primary-btn";
import CardGradient from "../components/cards/card-gradient";
import { showMyToast } from "../functions/show-toast";
import axios from "axios";

import {
  Octicons,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function AddStaff({ route, navigation }) {
  const [staffName, setStaffName] = useState("");
  const [staffNumber, setStaffNumber] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [salary, setSalary] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const url = `${process.env.CRUD}`;
  const emailUrl = `${process.env.EMAIL_ENDPOINT}`;
  //----------------
  //--------------
  //---------
  //---------
  //--------------------
  //--------------------
  //--------------------
  //--------------------
  //--------------------
  //--------------------
  //--------------------
  //--------------------
  //--------------------
  //--------------------
  //--------------------
  async function addStaff() {
    if (!staffName || !staffNumber || !email || !department || !salary) {
      showMyToast({
        status: "error",
        title: "Required field",
        description: "All fields are requireed",
      });
    } else {
      setSubmitting(true);
      console.log(url);
      console.log(emailUrl);

      await axios
        .post(`${url}`, {
          staffName,
          staffNumber,
          staffEmail: email,
          department,
          salary,
        })
        .then(async () => {
          //send email
          await axios
            .post(emailUrl, {
              message: `Greeting ${staffName}, we are glad to inform you that your staff profile has been created`,
              subject: `Profile Notification #Created`,
              email,
            })
            .then(() => {
              setSubmitting(false);
              showMyToast({
                status: "success",
                title: "Success",
                description: "Staff created successfully",
              });
              navigation.goBack();
            })
            .catch((error) => {
              console.log(error);
              setSubmitting(false);

              showMyToast({
                status: "error",
                title: "Failed",
                description: error.message,
              });
            });
        })
        .catch((error) => {
          console.log(error);
          setSubmitting(false);

          showMyToast({
            status: "error",
            title: "Failed",
            description: error.message,
          });
        });
    }
  }

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="always"
      style={globalStyles.container}
    >
      <View style={styles.shadow}>
        <CardGradient style={styles.lowerContainer}>
          <PrimaryText style={{ marginVertical: 10 }}>Staff number</PrimaryText>
          <PrimaryInput
            InputLeftElement={
              <Icon
                as={<Octicons name="number" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            value={staffNumber}
            onChangeText={setStaffNumber}
            placeholder="e.g AZERT122"
          />

          <PrimaryText style={{ marginVertical: 10 }}>Staff name</PrimaryText>
          <PrimaryInput
            value={staffName}
            onChangeText={setStaffName}
            placeholder="e.g John Doe"
            InputLeftElement={
              <Icon
                as={<FontAwesome name="user" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />

          <PrimaryText style={{ marginVertical: 10 }}>Staff email</PrimaryText>
          <PrimaryInput
            value={email}
            onChangeText={setEmail}
            placeholder="e.g john.doe@zamara.co.ke"
            keyboardType="email-address"
            autoCapitalize="none"
            InputLeftElement={
              <Icon
                as={<Ionicons name="mail" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />

          <PrimaryText style={{ marginVertical: 10 }}>Department</PrimaryText>
          <PrimaryInput
            value={department}
            onChangeText={setDepartment}
            placeholder="e.g HR"
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="office-building-outline" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />

          <PrimaryText style={{ marginVertical: 10 }}>Salary</PrimaryText>
          <PrimaryInput
            value={salary.toString()}
            onChangeText={setSalary}
            placeholder="e.g 45000"
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="coins" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />

          <PrimaryButton
            onPress={addStaff}
            submitting={submitting}
            disabled={submitting}
            title="Submit"
            style={{ marginTop: 20 }}
          />
        </CardGradient>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
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
    alignSelf: "center",
    width: width - 40,
    shadowColor: "gray",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 20,
  },
});
