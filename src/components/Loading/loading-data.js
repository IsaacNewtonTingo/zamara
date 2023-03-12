import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Modal } from "native-base";
import { BarIndicator } from "react-native-indicators";
import colors from "../../assets/colors/colors";

export default function LoadingData(props) {
  const { isOpen } = props;
  return (
    <Modal isOpen={isOpen}>
      <View
        style={{
          height: 70,
          width: 70,
          padding: 20,
          borderRadius: 14,
          backgroundColor: colors.dark,
        }}
      >
        <BarIndicator color={colors.light} size={20} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({});
