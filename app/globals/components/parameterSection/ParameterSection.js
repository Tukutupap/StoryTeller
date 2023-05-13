import { React , useState} from "react";
import styles from "./Styles"
import {
  StyleSheet,
  View,
  TextInput,
  Button
} from "react-native";

function ParameterSection({ setStory }) {
  const [animal1, setAnimal1] = useState('');
  const [animal2, setAnimal2] = useState('');

  return (
    <View style={styles.sectionContainer}>
      <TextInput
        //style={styles.input}
        onChangeText={setAnimal1}
        value={animal1}
        placeholder="Animal 1"
      />
      <TextInput
        //style={styles.input}
        onChangeText={setAnimal2}
        value={animal2}
        placeholder="Animal 2"
      />
      <Button title="Generate" onPress={() => {
            setStory(["Once upon a time,", animal1, "and", animal2, "were walking in the forest."].join(" "));
      }}/>
    </View>
  );
}

export default ParameterSection;