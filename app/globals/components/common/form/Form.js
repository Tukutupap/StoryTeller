import { React } from "react";
import { BasicTextInput } from "../../";
import { View, Button } from "react-native";
import { useForm, FormProvider } from "react-hook-form";
import utils from "../../../utils/Utils";

export default function Form({ setFormValues, submitText }) {
  const { ...methods } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    setFormValues(data);
  };

  const onError = (errors, e) => {
    return console.log({ errors });
  };

  return (
    <View>
      <FormProvider {...methods}>
        <BasicTextInput name="animal1" placeholder="Animal 1" />
        <BasicTextInput name="animal2" placeholder="Animal 2" />
      </FormProvider>

      <Button
        title={
          utils.isString(submitText) && submitText.length > 0
            ? submitText
            : "Generate"
        }
        onPress={methods.handleSubmit(onSubmit, onError)}
      />
    </View>
  );
}
