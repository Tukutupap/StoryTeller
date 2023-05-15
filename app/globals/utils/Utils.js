const utils = {
  isString: (object) => {
    return typeof object === "string" || object instanceof String;
  },

  generateStory: (parameters) => {
    var story = "";

    for (i = 0; i < Object.values(parameters).length; i++) {
      story = story + Object.values(parameters)[i];
    }

    return story;
  },
};

export default utils;
