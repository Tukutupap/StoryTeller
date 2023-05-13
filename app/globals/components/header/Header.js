import { React , useState} from "react";
import {
  Text,
  View,
} from "react-native";
import styles from "./Styles"

function Header({ children, title }) {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>
      <Text style={styles.sectionDescription}>
        {children}
      </Text>
    </View>
  );
}

export default Header;