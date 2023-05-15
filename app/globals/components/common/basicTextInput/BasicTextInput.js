import React from "react";
import styles from "./Styles";
import { TextInput } from "react-native";
import { useController, useFormContext } from "react-hook-form";

export default BasicTextInput = ({ name, ...inputProps }) => {
  const formContext = useFormContext();

  // Returns base control if not in form context
  if (!formContext || !name) {
    return <TextInput style={styles.input} {...inputProps} />;
  } else {
    const { field } = useController({ name });
    return (
      <TextInput
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

/* import React from "react";
import styles from "./Styles";
import { TextInput } from "react-native";

import { useController, useFormContext } from "react-hook-form";

const ControlledInput = ({ name, rules, defaultValue, ...inputProps }) => {
  const formContext = useFormContext();
  const { formState } = formContext;
  const { field } = useController({ name, rules, defaultValue });

  const hasError = Boolean(formState?.errors[name]);

  return (
    <TextInput
      autoCapitalize="none"
      textAlign="left"
      style={styles.input}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      {...inputProps}
    />
  );
};

export default BasicTextInput = ({
  name,
  rules,
  label,
  defaultValue,
  setFormError,
  ...inputProps
}) => {
  const formContext = useFormContext();

  // Placeholder until input name is initialized
  if (!formContext || !name) {
    const msg = !formContext
      ? "TextInput must be wrapped by the FormProvider"
      : "Name must be defined";
    console.error(msg);
    setFormError(true);
    return null;
  }

  return (
    <ControlledInput
      {...{ name, rules, label, defaultValue, setFormError, ...inputProps }}
    />
  );
}; */

/* import { React } from "react";
import styles from "./Styles";
import { TextInput } from "react-native";

function BasicTextInput({ ...props }) {
  return <TextInput style={styles.input} {...props} />;
}

export default BasicTextInput; */
