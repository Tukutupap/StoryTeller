import { React } from "react";
import { Text } from "react-native";
import styles from "./Styles";
import { Section } from "../";

export default function Header({ title, description }) {
  return (
    <Section>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerDescription}>{description}</Text>
    </Section>
  );
}
