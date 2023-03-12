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
import SecondaryButton from "../components/buttons/secondary-button";
import { showMyToast } from "../functions/show-toast";
import axios from "axios";
import ActionModal from "../components/modal/action-modal";
import SecondaryText from "../components/text/secondary-text";
import { TouchableOpacity } from "react-native";
import GrayText from "../components/text/gray-text";

import {
  Octicons,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
const B = (props) => <PrimaryText>{props.children}</PrimaryText>;

export default function EditStaff({ route, navigation }) {
  const [staffName, setStaffName] = useState(route.params.staff.staffName);
  const [staffNumber, setStaffNumber] = useState(
    route.params.staff.staffNumber
  );
  const [email, setEmail] = useState(route.params.staff.staffEmail);
  const [department, setDepartment] = useState(route.params.staff.department);
  const [salary, setSalary] = useState(route.params.staff.salary);

  const staffID = route.params.staff._id;

  const [submitting, setSubmitting] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const url = `${process.env.CRUD_CRUD_ENDPOINT}`;

  async function edit() {
    if (!staffName || !staffNumber || !email || !department || !salary) {
      showMyToast({
        status: "error",
        title: "Required field",
        description: "All fields are requireed",
      });
    } else {
      setSubmitting(true);
      await axios
        .put(`${url}/${staffID}`, {
          staffName,
          staffNumber,
          staffEmail: email,
          department,
          salary,
        })
        .then((response) => {
          console.log(response.data);
          setSubmitting(false);
          showMyToast({
            status: "success",
            title: "Success",
            description: "Staff records updated successfully",
          });
        })
        .catch((err) => {
          console.log(err);
          setSubmitting(false);

          showMyToast({
            status: "error",
            title: "Failed",
            description: err.message,
          });
        });
    }
  }

  function handleDelete() {
    setDeleteModal(true);
  }

  async function deleteStaff() {
    setSubmitting(true);

    await axios
      .delete(`${url}/${staffID}`)
      .then((response) => {
        console.log(response.data);
        setSubmitting(false);
        showMyToast({
          status: "success",
          title: "Success",
          description: "Staff records updated successfully",
        });
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err);
        setSubmitting(false);

        showMyToast({
          status: "error",
          title: "Failed",
          description: err.message,
        });
      });
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
          />

          <PrimaryText style={{ marginVertical: 10 }}>Staff name</PrimaryText>
          <PrimaryInput
            value={staffName}
            onChangeText={setStaffName}
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
            onPress={edit}
            submitting={submitting}
            disabled={submitting}
            title="Update"
            style={{ marginTop: 20 }}
          />

          <SecondaryButton
            onPress={handleDelete}
            title="Delete"
            style={{ marginTop: 20 }}
          />
        </CardGradient>
      </View>

      {deleteModal == true && (
        <ActionModal isOpen={deleteModal}>
          <HStack justifyContent="space-between">
            <SecondaryText style={{ fontSize: 20 }}>
              Delete Staff?
            </SecondaryText>
            <TouchableOpacity onPress={() => setDeleteModal(false)}>
              <SecondaryText style={{ fontSize: 20 }}>X</SecondaryText>
            </TouchableOpacity>
          </HStack>

          <GrayText>
            Are you sure you want to delete <B>“{staffName}”</B> as staff? This
            process is irrevasible and you'll lose their data
          </GrayText>
          <PrimaryButton
            submitting={submitting}
            disabled={submitting}
            onPress={deleteStaff}
            title="Delete"
          />
        </ActionModal>
      )}
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
