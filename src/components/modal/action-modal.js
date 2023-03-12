import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Modal } from "native-base";
import CardGradient from "../cards/card-gradient";
import colors from "../../assets/colors/colors";

export default function ActionModal(props) {
  const { isOpen, style } = props;
  return (
    <Modal style={styles.modalContainer} isOpen={isOpen}>
      <View style={styles.inner}>{props.children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  inner: {
    backgroundColor: colors.white,
    width: "80%",
    padding: 20,
    borderRadius: 10,
    justifyContent: "space-between",
    height: 200,
  },
});
