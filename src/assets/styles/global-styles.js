import { StyleSheet } from "react-native";

import colors from "../colors/colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  regularText: {
    color: colors.dark,
    fontFamily: "Montserrat-SemiBold",
    textAlign: "left",
  },
  grayText: {
    color: colors.dark,
    fontFamily: "Montserrat-Regular",
    textAlign: "left",
  },
});
