import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { DataTable } from "react-native-paper";
import axios from "axios";
import { globalStyles } from "../assets/styles/global-styles";
import { showMyToast } from "../functions/show-toast";
import { FloatingAction } from "react-native-floating-action";

import { Entypo } from "@expo/vector-icons";
import colors from "../assets/colors/colors";
import LoadingData from "../components/Loading/loading-data";

const optionsPerPage = [2, 3, 4];

export default function Staff({ navigation, route }) {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[0]);

  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [staffList, setStaffList] = useState([]);

  const url = `${process.env.CRUD}`;

  useEffect(() => {
    getStaff();
  }, [(navigation, loading)]);
  navigation.addListener("focus", () => setLoading(!loading));

  const AddStaff = () => {
    return <Entypo name="add-user" size={24} color={colors.light} />;
  };

  const actions = [
    {
      text: "Add new staff",
      icon: <AddStaff />,
      name: "add",
      position: 1,
    },
  ];

  async function handleActionPressed(name) {
    if (name == "add") {
      navigation.navigate("AddStaff");
    }
  }

  async function getStaff() {
    await axios
      .get(`${url}`)
      .then((response) => {
        setLoadingData(false);
        setStaffList(response.data);
      })
      .catch((err) => {
        console.log(err);
        setLoadingData(false);
        showMyToast({
          status: "error",
          title: "Failed",
          description: err.message,
        });
      });
  }

  async function handleRowPressed(staff) {
    navigation.navigate("EditStaff", { staff });
  }

  return (
    <View style={globalStyles.container}>
      {loadingData && <LoadingData isOpen={loadingData} />}

      <DataTable style={globalStyles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title textStyle={styles.titleText}>
            Staff no.
          </DataTable.Title>
          <DataTable.Title textStyle={styles.titleText}>
            Staff name
          </DataTable.Title>
          <DataTable.Title textStyle={styles.titleText}>
            Staff email
          </DataTable.Title>
          <DataTable.Title textStyle={styles.titleText}>Dept.</DataTable.Title>
          <DataTable.Title textStyle={styles.titleText}>Salary</DataTable.Title>
        </DataTable.Header>

        {staffList.map((staff, i) => (
          <DataTable.Row
            onPress={() => handleRowPressed(staff)}
            style={{ width: "100%" }}
            key={i}
          >
            <DataTable.Cell
              textStyle={styles.tableText}
              style={styles.ind1Cell}
            >
              {staff.staffNumber}
            </DataTable.Cell>

            <DataTable.Cell
              textStyle={styles.tableText}
              style={styles.ind2Cell}
            >
              {staff.staffName}
            </DataTable.Cell>

            <DataTable.Cell
              textStyle={styles.tableText}
              style={styles.ind1Cell}
            >
              {staff.staffEmail}
            </DataTable.Cell>

            <DataTable.Cell
              textStyle={styles.tableText}
              style={styles.ind2Cell}
            >
              {staff.department}
            </DataTable.Cell>

            <DataTable.Cell
              textStyle={styles.tableText}
              style={styles.ind1Cell}
            >
              {staff.salary}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>

      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          handleActionPressed(name);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  tableText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 10,
  },
  ind1Cell: {
    backgroundColor: colors.white,
    padding: 5,
    width: 200,
  },
  ind2Cell: {
    padding: 5,
  },
  titleText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 12,
  },
});
