import React from "react";
import { View, TextInput, Text } from "react-native";
import { useController, useFormContext } from "react-hook-form";
import styles from "./Styles";

export default function BasicTextInput({
  name,
  defaultValue,
  rules,
  ...inputProps
}) {
  const formContext = useFormContext();
  const { formState } = formContext;
  const hasError = formState?.errors[name];

  // Returns base control if not in form context
  if (!formContext || !name) {
    return <TextInput style={styles.input} {...inputProps} />;
  } else {
    const {
      field,
      //fieldState: { invalid, isTouched, isDirty },
      //formState: { touchedFields, dirtyFields },
    } = useController({ name, defaultValue, rules });

    return (
      <View>
        <TextInput
          style={hasError ? styles.inputError : styles.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          ref={field.ref}
          defaultValue=""
          {...inputProps}
        />

        {hasError && (
          <Text style={styles.error}>{formState.errors[name].message}</Text>
        )}
      </View>

      //const { field } = useController({ name, defaultValue });
      /* <TextInput
        clearButtonMode="always"
        autoCapitalize="none"
        textAlign="left"
        style={styles.input}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        {...inputProps}
      /> */
    );
  }
}
