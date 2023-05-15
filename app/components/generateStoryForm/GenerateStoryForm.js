import { React, useState, useEffect } from "react";
import { Section, Form } from "../../globals/components";
import utils from "../../globals/utils/Utils";

export default function GenerateStoryForm({ setStory }) {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    let story = utils.generateStory(formValues);
    setStory(story);
  }, [formValues]);

  return (
    <Section>
      <Form setFormValues={setFormValues} submitText="Create Story">
        <BasicTextInput name="animal1" defaultValue="" placeholder="Animal 1" />
        <BasicTextInput name="animal2" defaultValue="" placeholder="Animal 2" />
      </Form>
    </Section>
  );
}
