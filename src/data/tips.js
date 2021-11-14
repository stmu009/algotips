const tips = {
  Recursion: {
    tips: [
      {
        tipReferences: [
          "https://stackoverflow.com/questions/27415470/javascript-recursion-reverse-string",
        ],
        media: "/images/reverseString.gif",
        mediaReference:
          "https://towardsdatascience.com/finding-a-recursive-solution-184784b0aea0",
        intro: <>Much like the movie Inception, recursion can be a confusing topic.
          <br />In the example, in the image above we can see how the string is reversed one letter at a time.
          <br />In <strong>JavaScript</strong>, the code would look like this:</>,
        code: <pre style={{
          overflow: 'scroll',
          backgroundColor: '#eee',
          border: '1px solid #999',
          display: 'block',
          padding: '20px'
        }}>
          <code style={{}}>
            {`
const reverse = (string) => {
  if (string.length === 0) {
    return "";
  }
  return string[string.length - 1] 
  + reverse(string.substring(0, string.length - 1));
}
      
console.log('reverse('something'):', reverse('something'))
// reverse('something'): gnihtemos 
      `}
          </code>
        </pre>,
        explanation: <>
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

          <p>
            Notice how the reverse function is called within the definition of the reverse function.
            <br />
            This is possible because the reverse function is taking a piece of the string until there is no string left.
            <br />
            <strong>The keys to the recursion technique are having an exit or base condition that will stop the recursion and passing in parameters that target that condition. </strong>
          </p>

          <p>
            In the movie Inception they also had to enter and exit each dream within a dream one dream at a time.
          </p>
        </>
      },
    ],
  },
  "Big O Notation": {
    tips: [
      {
        tipReferences: [
          "https://stackoverflow.com/questions/27415470/javascript-recursion-reverse-string",
        ],
        media: "/images/bigOBig.png",
        mediaReference:
          "https://medium.com/@mendozabridget777/big-o-notation-time-space-complexity-9bc31952052c",
        intro: <p>Big O Notation is a very complex subject especially if you decide to read into the mathematical proofs.
          <br />
          <br />
          However for software engineer coding interviews, the main idea to know is that Big O Notation is used to measure the worst case scenario for time and space complexity where n is the number of elements in the data set.
          <br />
          <br />
          As shown in the image above, various data structures and alorightms have different space and time complexity.
          Interviewers look to see if the candidate knows the trade offs between data structures and algorithms.
          <br />
          <br />
          Space complexity is the amount of new space needed while time complexity measures the amount time in a worse case scenario based on the number of elements.
          Because there are many factors such as RAM, CPU, and bandwidth, time as commonly known is not a good measure and Big O Notation is used based of the number of elements in the data set.
          Along with knowing the tradeoffs, it is also important to know how different Big O functions rank.
          <br />
          <br />
          Where n is the number of elements, they rank from lowest to highest:
          {/* O( 1 ) < O ( log n ) */}
          {` O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!) `}
          <br />
          <br />
        </p >,
      },
      {},
    ],
  },
  // "Breadth First Search": {

  // },
  // "Depth First Search": {

  // },
  // Queues: {

  // },
  // Stacks: {

  // },
  BUD: {

  },
  Graphs: {

  },
  "Hash Tables": {

  },
  // "Quick Sort": {

  // },
};

export default tips;
