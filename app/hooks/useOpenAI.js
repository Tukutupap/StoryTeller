import "react-native-url-polyfill/auto";
import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { OPEN_AI_API_KEY, OPEN_AI_ORGANIZATION } from "@env";

//For now props only may contain the following:
//    - noCallMode - Generate a test output without calling the API
export function useOpenAI(props) {
  const [response, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const configuration = new Configuration({
    apiKey: OPEN_AI_API_KEY,
    organization: OPEN_AI_ORGANIZATION,
  });
  const openai = new OpenAIApi(configuration);

  const testMode = () => {
    return (
      props !== undefined &&
      props.noCallMode !== undefined &&
      props.noCallMode === true
    );
  };

  const openAIRequest = async (requestParameters) => {
    if (!testMode()) {
      setIsLoading(true);
      setError("");
      try {
        const response = await openai.createCompletion(requestParameters);
        setResponseText(response.data.choices[0].text);
      } catch (e) {
        console.log(e);
        setError(e?.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    } else {
      setResponseText("This is a test response");
      console.log("useOpenAI.js: API Call in test mode.");
    }
  };

  return [isLoading, response, openAIRequest, error];
}
