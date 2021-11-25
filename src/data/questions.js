const questions = {
  Recursion: [
    {
      "How do you stop a recursive loop?": {
        choicesWithFeedback: {
          "By having a base condition and parameters that will reach the base condition":
            "You got it!",
          "A base condition":
            "Almost, but the values passed into the recursive function are also important. Try Again.",
          "Decreasing values passed into the recursive function":
            "Not quite. A base condition is needed and parameter to reach the condition which may be increasing. Try Again.",
          "Wait for the sedative to wear off":
            "In the movie Inception that may have helped but not in your code. Try Again.",
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
            "Order from worst to best not best to worst, try again.",
          "O(n!) < O(n^2) < O(2^n) < O(n log n) < O(n) < O(log n) < O(1)":
            "Close, try again",
          "O(1) < O(log n) < O(n log n) < O(n) < O(n^2) < O(2^n) < O(n!)":
            "Try again",
        },
      },
    },
    {},
  ],
  BUD: [{"In Gayle Laakmann McDowell’s Cracking the Coding Interview, what does BUD stand for?":{choicesWithFeedback:{
    "Bottlenecks, Unnecessary Work, Duplicate Work":"Correct!",
    "Bring Us Nice things":"This may help in an onsite interview, but it won't help your code. Try Again.",
    "Binary Universal Notation":"This sounds smart, but does not mean anything in this context. Try Again.",
    "Behavior Under Supervision":"You should always be on good behavior, but this is incorrect. Try Again.",
  }}}, {}],
  Graphs: [{
    "Which of the following is not true about Graphs":{
      choicesWithFeedback:{
      "Graphs are the fastest way to retrieve and store data":"Correct. Graphs may not be the fastest but can handle many connections between large datasets.",
      "Graphs can consist of multiple isolated (disonnected) grpahs":"This is true about graphs. Try again and find the option that is not true.",
      "Graphs can be cyclic":"This is true about graphs. You can end up in an inifinte loop. Try again and find the option that is not true.",
      "Two ways to represent graphs are an adjacency list and an adjacency matrix":"This is true about graphs. Try again and find the option that is not true.",
      }
    }
  }, {}],
  "Hash Tables": [{"Given a JavaScript Map object named 'myhashmap' how would you properly retrieve the value for the 'mykey' key": {choicesWithFeedback:{
    "myhashmap.get('mykey')": "Correct!",
    "myhashmap.mykey":"This works for objects but not the proper way to retrieve it from a Map object. Try Again",
    "myhashmap['mykey']":"This works for objects but not the proper way to retrieve it from a Map object. Try Again",
    "using blockchain technology":"Go back and read the material. Try Again",
  }}}],
  "Quick Sort": [{}, {}],
};

export default questions;
