import { React, useState } from "react";
import {
  Header,
  ParameterSection,
  StorySection,
} from "../../globals/components";

import { View } from "react-native";

function NewStory() {
  const [story, setStory] = useState("Enter Animals above and press Generate!");

  return (
    <View>
      <Header title="Story Teller" description="Generate a Story" />
      <ParameterSection setStory={setStory} />
      <StorySection story={JSON.stringify(story)} />
    </View>
  );
}

export default NewStory;
