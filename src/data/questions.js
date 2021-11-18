const questions = {
  Recursion: [
    {
      "How do you stop a recursive loop?": {
        choicesWithFeedback: {
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
    {
      question2: {
        choicesWithFeedback: {
          choice1: "feedback1", //correct answer
          choice2: "feedback2",
          choice3: "feedback3",
          choice4: "feedback4",
        },
      },
    },
  ],
  "Breadth First Search": [
    {
      "BFS Question": {
        choicesWithFeedback: {
          choice1: "feedback1", //correct answer
          choice2: "feedback2",
          choice3: "feedback3",
          choice4: "feedback4",
        },
      },
    },
    {},
  ],
  "Depth First Search": [
    {
      "": {
        choicesWithFeedback: {
          choice1: "feedback1",
          choice2: "feedback2",
          choice3: "feedback2",
          choice4: "feedback2",
        },
      },
    },
    {},
  ],
  Queues: [{}, {}],
  Stacks: [{}, {}],
  "Big O Notation": [
    {
      "Order these from worst to best:": {
        choicesWithFeedback: {
          "O(n!) < O(2^n) < O(n^2) < O(n log n) < O(n) < O(log n) < O(1)":
            "You got it! ",
          "O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!)":
            "Order from worst to best not best to worst, try again",
          "O(n!) < O(n^2) < O(2^n) < O(n log n) < O(n) < O(log n) < O(1)":
            "Close, try again",
          "O(1) < O(log n) < O(n log n) < O(n) < O(n^2) < O(2^n) < O(n!)":
            "Try again",
        },
      },
    },
    {},
  ],
  BUD: [{}, {}],
  Graphs: [{}, {}],
  "Hash Tables": [{}, {}],
  "Quick Sort": [{}, {}],
};

export default questions;
