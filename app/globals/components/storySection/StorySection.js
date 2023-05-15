import { React } from "react";
import styles from "./Styles";
import { Text } from "react-native";
import { Section } from "../";

function StorySection({ story }) {
  return (
    <Section>
      <Text style={styles.storyText}>{story}</Text>
    </Section>
  );
}

export default StorySection;
