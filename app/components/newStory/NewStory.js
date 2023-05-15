import { React, useState } from "react";
import { Header, StorySection } from "../../globals/components";
import GenerateStoryForm from "../generateStoryForm/GenerateStoryForm";

import { View } from "react-native";

function NewStory() {
  const [story, setStory] = useState("");

  const noStory = (story) => {
    return story.length === 0;
  };

  return (
    <View>
      <Header title="Story Teller" description="Generate a Story" />
      <GenerateStoryForm setStory={setStory} />
      <StorySection
        story={
          noStory(story) ? "Enter Animals above and press Generate!" : story
        }
      />
    </View>
  );
}

export default NewStory;
