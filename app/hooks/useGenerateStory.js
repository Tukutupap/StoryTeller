import { useOpenAI } from "./";

export function useGenerateStory(props) {
  const [isLoading, response, openAIRequest, error] = useOpenAI(props);

  const generateStory = async (storyParams) => {
    openAIRequest({
      model: "text-davinci-003",
      prompt:
        "Write a 25 word story for a 3 year old about the following animals: " +
        storyParams.animal1 +
        ", " +
        storyParams.animal2,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
  };

  return [isLoading, response, generateStory, error];
}
