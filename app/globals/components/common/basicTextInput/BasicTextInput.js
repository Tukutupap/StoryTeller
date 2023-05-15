import React from "react";
import styles from "./Styles";
import { TextInput } from "react-native";
import { useController, useFormContext } from "react-hook-form";

export default BasicTextInput = ({ name, defaultValue, ...inputProps }) => {
  const formContext = useFormContext();

  // Returns base control if not in form context
  if (!formContext || !name) {
    return <TextInput style={styles.input} {...inputProps} />;
  } else {
    const { field } = useController({ name, defaultValue });
    return (
      <TextInput
        clearButtonMode="always"
        autoCapitalize="none"
        textAlign="left"
        style={styles.input}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        {...inputProps}
      />
    );
  }
};
