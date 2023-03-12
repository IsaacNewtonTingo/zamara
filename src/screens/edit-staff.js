import { StyleSheet, Dimensions, Text, View } from "react-native";
import React, { useState } from "react";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { globalStyles } from "../assets/styles/global-styles";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { Icon } from "native-base";

import PrimaryInput from "../components/inputs/primary-input";
import PrimaryText from "../components/text/primary-text";
import PrimaryButton from "../components/buttons/primary-btn";
import CardGradient from "../components/cards/card-gradient";
import SecondaryButton from "../components/buttons/secondary-button";

const { width, height } = Dimensions.get("window");

export default function EditStaff({ route, navigation }) {
  const [staffName, setStaffName] = useState(route.params.staff.staffName);
  const [staffNumber, setStaffNumber] = useState(
    route.params.staff.staffNumber
  );
  const [email, setEmail] = useState(route.params.staff.staffEmail);
  const [department, setDepartment] = useState(route.params.staff.department);
  const [salary, setSalary] = useState(route.params.staff.salary);

  const [submitting, setSubmitting] = useState(false);

  async function edit() {}

  return (
    <KeyboardAwareScrollView style={globalStyles.container}>
      <View style={styles.shadow}>
        <CardGradient style={styles.lowerContainer}>
          <PrimaryText style={{ marginVertical: 10 }}>Staff number</PrimaryText>
          <PrimaryInput
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            value={staffNumber}
            onChangeText={setStaffNumber}
          />

          <PrimaryText style={{ marginVertical: 10 }}>Staff name</PrimaryText>
          <PrimaryInput
            value={staffName}
            onChangeText={setStaffName}
            InputLeftElement={
              <Icon
                as={<Feather name="lock" />}
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
            InputLeftElement={
              <Icon
                as={<Feather name="lock" />}
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
            InputLeftElement={
              <Icon
                as={<Feather name="lock" />}
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
            InputLeftElement={
              <Icon
                as={<Feather name="lock" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />

          <PrimaryButton
            onPress={edit}
            submitting={submitting}
            disabled={submitting}
            title="Update"
            style={{ marginTop: 20 }}
          />

          <SecondaryButton
            onPress={edit}
            submitting={submitting}
            disabled={submitting}
            title="Delete"
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
