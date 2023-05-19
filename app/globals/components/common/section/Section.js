import { React } from "react";
import styles from "./Styles";
import { View } from "react-native";

export default function Section({ children }) {
  return <View style={styles.sectionContainer}>{children}</View>;
}
