import { React } from "react";
import { View, Button, TurboModuleRegistry } from "react-native";
import { useForm } from "react-hook-form";
import { Header, StorySection, Section } from "../../globals/components";
import { NewStoryForm } from "../";
import { useGenerateStory } from "../../hooks";
import styles from "./Styles";

export default function NewStory() {
  const { ...methods } = useForm({ mode: "onChange" });
  const [isLoading, response, generateStory, error] = useGenerateStory({
    noCallMode: true,
  });

  const onSubmit = (data) => {
    generateStory(data);
  };

  const onError = (errors, e) => {
    return console.log({ errors });
  };

  const clearForm = () => {
    methods.reset();
  };

  return (
    <View>
      <Header title="Story Teller" description="Generate a Story" />
      <Section>
        <NewStoryForm methods={methods} />
      </Section>
      <Section>
        <View style={styles.formsButtonToolbar}>
          <Button title="Clear" onPress={clearForm} />
          <Button
            title="Create Story"
            onPress={methods.handleSubmit(onSubmit, onError)}
          />
        </View>
      </Section>
      <StorySection
        story={!response ? "Fill the form and press Create!" : response}
      />
    </View>
  );
}

/* import { React, useState, useEffect, useRef } from "react";
import { View } from "react-native";
import { Header, StorySection } from "../../globals/components";
import { NewStoryForm } from "../";
import { useGenerateStory } from "../../hooks";

export default function NewStory() {
  const [formValues, setFormValues] = useState(null);
  const [submitPressed, setSubmitPressed] = useState(null);
  const [isLoading, response, generateStory, error] = useGenerateStory({
    noCallMode: true,
  });
  const initialRender = useRef(true);

  const noFormValues = () => {
    return formValues === null;
  };

  const callGenerateStory = () => {
    if (initialRender.current) {
      initialRender.current = false;
    } else if (formValues !== null) {
      generateStory(formValues);
    }
  };

  useEffect(() => {
    console.log("useEffect:NewStory.js");
    console.log(submitPressed);
    callGenerateStory();
  }, [formValues]);

  return (
    <View>
      <Header title="Story Teller" description="Generate a Story" />
      <NewStoryForm
        setFormValues={setFormValues}
        setSubmitPressed={setSubmitPressed}
      />
      <StorySection
        story={
          noFormValues() ? "Enter Animals above and press Generate!" : response
        }
      />
    </View>
  );
}
 */
