import { React } from "react";
import { Section, Form } from "..";

function ParameterSection({ setStory }) {
  return (
    <Section>
      <Form setFormValues={setStory} submitText="Create Story" />
    </Section>
  );
}

export default ParameterSection;

/* import { React, useState } from "react";
import { Button } from "react-native";
import { Section, BasicTextInput } from "..";
import { useFormData } from "../../../hooks/useFormData";

function ParameterSection({ setStory }) {
  const [formValues, handleFormValueChange, setFormValues] = useFormData({
    animal1: "",
    animal2: "",
  });

  const params = [];
  for (let i = 0; i < Object.keys(formValues).length; i++) {
    var paramName = Object.keys(formValues)[i];

    params.push(
      <BasicTextInput
        key={Object.keys(formValues)[i]}
        onChange={(event) => {
          handleFormValueChange(
            Object.keys(formValues)[i],
            event.nativeEvent.text
          );
        }}
        placeholder={JSON.stringify(formValues)}
      />
    );
  }

  return (
    <Section>
      {params}
      <Button
        title="Generate"
        onPress={() => {
          setStory(
            [
              "Once upon a time,",
              formValues.animal1,
              "and",
              formValues.animal2,
              "were walking in the forest.",
            ].join(" ")
          );
        }}
      />
    </Section>
  );
}

export default ParameterSection;
 */
