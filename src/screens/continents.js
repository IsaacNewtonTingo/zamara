import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { globalStyles } from "../assets/styles/global-styles";
import { DataTable } from "react-native-paper";
import colors from "../assets/colors/colors";

export default function Continents() {
  const continents = [
    {
      sCode: "AF",
      sName: "Africa",
    },
    {
      sCode: "AM",
      sName: "The Americas",
    },
    {
      sCode: "AN",
      sName: "Antarctica",
    },
    {
      sCode: "AS",
      sName: "Asia",
    },
    {
      sCode: "EU",
      sName: "Europe",
    },
    {
      sCode: "OC",
      sName: "Ocenania",
    },
  ];

  return (
    <View style={globalStyles.container}>
      <DataTable style={globalStyles.container}>
        <DataTable.Header style={styles.tableHeader}>
          <DataTable.Title textStyle={styles.titleText}>Code</DataTable.Title>
          <DataTable.Title textStyle={styles.titleText}>Name</DataTable.Title>
        </DataTable.Header>

        {continents.map((continent, i) => (
          <DataTable.Row style={{ width: "100%" }} key={i}>
            <DataTable.Cell
              textStyle={styles.tableText}
              style={styles.ind1Cell}
            >
              {continent.sCode}
            </DataTable.Cell>

            <DataTable.Cell
              textStyle={styles.tableText}
              style={styles.ind2Cell}
            >
              {continent.sName}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  tableText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
  },
  ind1Cell: {
    padding: 5,
    width: 200,
  },
  ind2Cell: {
    padding: 10,
  },
  titleText: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
  },
});
