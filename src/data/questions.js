const questions = {
  Recursive: {
    "How do you stop a recursive loop?": {
      "choicesWithFeedback": {
        "By having a base condition and parameters that will reach the base condition":
          "You got it!",
        "A base condition":
          "Almost, but the values passed into the recursive function are also important.",
        "Decreasing values passed into the recursive function":
          "Not quite. A base condition is needed and parameter to reach the condition which may be increasing.",
        "Wait for the sedative to wear off":
          "In the movie Inception that may have helped but not in your code.",
      },
    },
  },
  "Breadth First Search": {
      "BFS Question":{
        "choicesWithFeedback": {
            "choice1":"feedback1", //correct answer
            "choice2":"feedback2",
            "choice3":"feedback3",
            "choice4":"feedback4"
        }
      }
  },
  "Depth First Search": {},
  Queues: {},
  Stacks: {},
  "Big O Notation": {},
  BUD: {},
  Graphs: {},
  "Hash Tables": {},
  "Quick Sort": {},
};

export default questions;
