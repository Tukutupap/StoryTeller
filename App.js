/**
 * StoryTeller App
 * 
 *
 * @format
 */

import { React } from "react";
import { NewStory } from "./app/components";
import { SafeAreaView, ScrollView } from "react-native";

function App() {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <NewStory/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
