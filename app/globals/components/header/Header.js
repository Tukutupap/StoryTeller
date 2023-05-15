import { React, useState } from "react";
import { Text } from "react-native";
import styles from "./Styles";
import { Section } from "../";

function Header({ title, description }) {
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");

  return (
    <Section>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerDescription}>{description}</Text>
    </Section>
  );
}

export default Header;
