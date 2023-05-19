import { React } from "react";
import { BasicTextInput } from "../../globals/components";
import { FormProvider } from "react-hook-form";

export default function NewStoryForm({ methods }) {
  return (
    <FormProvider {...methods}>
      <BasicTextInput
        name="animal1"
        placeholder="Animal 1"
        clearButtonMode="always"
        rules={{
          required: "Animal 1 is required",
        }}
      />
      <BasicTextInput
        name="animal2"
        placeholder="Animal 2"
        clearButtonMode="always"
        rules={{
          required: "Animal 2 is required",
        }}
      />
    </FormProvider>
  );
}

/* import { React } from "react";
import { Section, Form, BasicTextInput } from "../../globals/components";

export default function NewStoryForm({ setFormValues, setSubmitPressed }) {
  return (
    <Section>
      <Form
        setFormValues={setFormValues}
        setSubmitPressed={setSubmitPressed}
        submitText="Create Story"
      >
        <BasicTextInput
          name="animal1"
          placeholder="Animal 1"
          clearButtonMode="always"
        />
        <BasicTextInput
          name="animal2"
          placeholder="Animal 2"
          clearButtonMode="always"
        />
      </Form>
    </Section>
  );
} */
