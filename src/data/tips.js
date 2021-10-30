const tips = {
  Recursion: {
    image: "/images/reverseString.gif",
    imageReference:
      "https://towardsdatascience.com/finding-a-recursive-solution-184784b0aea0",
    tips: [
      {
        content: `
    <p>Much like the movie Inception, recursion can be a confusing topic.
    <br/>In the example, in the image above we can see how the string is reversed one letter at a time.
    <br/>In <strong>JavaScript</strong>, the code would look like this:
    </p>
    <pre style="overflow:scroll;
    background-color: #eee;
      border: 1px solid #999;
      display: block;
      padding: 20px;">
    <code style="">
    const reverse = (string) => {
      if (string.length === 0) {
          return "";
      }
      return string[string.length - 1] 
        + reverse(string.substring(0, string.length - 1));
    }
  
    console.log('reverse('something'):', reverse('something'))
    // reverse('something'): gnihtemos 
    </code>
    </pre>
    
    The flow of this example is as follows:
  
    <ol>
    <li>
    Check if the string passed in is empty, if so return an empty string. (this ends the recursion)
    </li>
    <li>
    If the string passed in is not empty, then return a combined string from running the reverse function on the last character of the string and running the reverse function on the rest of the string as shown below:
    <ul>
    <li>
    g somethin
    </li>
    <li>
    gn somethi
    </li>
    <li>
    gni someth
    </li>
    <li>
    gnih someth
    </li>
    <li>
    gniht some
    </li>
    <li>
    gnihte som
    </li>
    <li>
    gnihtem so
    </li>
    <li>
    gnihtemo s
    </li>
    <li>
    gnihtemos 
    </li>
    </ul>
    </li>
    </ol>
    </p>
  
    <p>
    Notice how the reverse function is called within the definition of the reverse function.
    <br/>
    This is possible because the reverse function is taking a piece of the string until there is no string left.
    <br/>
    <strong>The keys to the recursion technique are having an exit or base condition that will stop the recursion and passing in parameters that target that condition. </strong>
    
    <p>
      
    </Button>
    <p>
    In the movie Inception they also had to enter and exit each dream within a dream one dream at a time.
    </p>
    `,
        tipReferences: [
          "https://stackoverflow.com/questions/27415470/javascript-recursion-reverse-string",
        ],
      },
    ],
  },
  "Breadth First Search": {
    image: "",
    imageReference: "",
    tips: [
      {
        content: ``,
        tipReferences: [],
      },
      {},
    ],
  },
  "Depth First Search": {
    image: "",
    imageReference: "",
    tips: [
      {
        content: ``,
        tipReferences: [],
      },
      {},
    ],
  },
  Queues: {
    image: "",
    imageReference: "",
    tips: [
      {
        content: ``,
        tipReferences: [],
      },
      {},
    ],
  },
  Stacks: {
    image: "",
    imageReference: "",
    tips: [
      {
        content: ``,
        tipReferences: [],
      },
      {},
    ],
  },
  "Big O Notation": {
    image: "",
    imageReference: "",
    tips: [
      {
        content: ``,
        tipReferences: [],
      },
      {},
    ],
  },
  BUD: {
    image: "",
    imageReference: "",
    tips: [
      {
        content: ``,
        tipReferences: [],
      },
      {},
    ],
  },
  Graphs: {
    image: "",
    imageReference: "",
    tips: [
      {
        content: ``,
        tipReferences: [],
      },
      {},
    ],
  },
  "Hash Tables": {
    image: "",
    imageReference: "",
    tips: [
      {
        content: ``,
        tipReferences: [],
      },
      {},
    ],
  },
  "Quick Sort": {
    image: "",
    imageReference: "",
    tips: [
      {
        content: ``,
        tipReferences: [],
      },
      {},
    ],
  },
};

export default tips;
