import { React } from "react";
import styles from "./Styles";
import { Text, View } from "react-native";

function StorySection({ story }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Story: {story}</Text>
    </View>
  );
}

export default StorySection;
