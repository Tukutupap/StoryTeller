import { React } from "react";
import { View, Button } from "react-native";
import { useForm, FormProvider } from "react-hook-form";
import utils from "../../../utils/Utils";
import styles from "./Styles";

export default function Form({
  setFormValues,
  setSubmitPressed,
  submitText,
  children,
}) {
  const { ...methods } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    setFormValues(data);
    setSubmitPressed(true);
  };

  const onError = (errors, e) => {
    return console.log({ errors });
  };

  const clearForm = () => {
    methods.reset();
    setFormValues(null);
  };

  return (
    <View>
      <FormProvider {...methods}>{children}</FormProvider>
      <View style={styles.formsButtonToolbar}>
        <Button title="Clear" onPress={clearForm} />
        <Button
          title={
            utils.isString(submitText) && submitText.length > 0
              ? submitText
              : "Generate"
          }
          onPress={methods.handleSubmit(onSubmit, onError)}
        />
      </View>
    </View>
  );
}
