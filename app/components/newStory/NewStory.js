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
      <Header title="Story Teller">Generate a Story</Header>
      <ParameterSection setStory={setStory} />
      <StorySection story={story} />
    </View>
  );
}

export default NewStory;
