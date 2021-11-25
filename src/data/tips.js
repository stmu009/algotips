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
        intro: (
          <>
            Much like the movie Inception, recursion can be a confusing topic.
            <br />
            In the example, in the image above we can see how the string is
            reversed one letter at a time.
            <br />
            In <strong>JavaScript</strong>, the code would look like this:
          </>
        ),
        code: (
          <pre
            style={{
              overflow: "scroll",
              backgroundColor: "#eee",
              border: "1px solid #999",
              display: "block",
              padding: "20px",
            }}
          >
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
          </pre>
        ),
        explanation: (
          <>
            The flow of this example is as follows:
            <ol>
              <li>
                Check if the string passed in is empty, if so return an empty
                string. (this ends the recursion)
              </li>
              <li>
                If the string passed in is not empty, then return a combined
                string from running the reverse function on the last character
                of the string and running the reverse function on the rest of
                the string as shown below:
                <ul>
                  <li>g somethin</li>
                  <li>gn somethi</li>
                  <li>gni someth</li>
                  <li>gnih someth</li>
                  <li>gniht some</li>
                  <li>gnihte som</li>
                  <li>gnihtem so</li>
                  <li>gnihtemo s</li>
                  <li>gnihtemos</li>
                </ul>
              </li>
            </ol>
            <p>
              Notice how the reverse function is called within the definition of
              the reverse function.
              <br />
              This is possible because the reverse function is taking a piece of
              the string until there is no string left.
              <br />
              <strong>
                The keys to the recursion technique are having an exit or base
                condition that will stop the recursion and passing in parameters
                that target that condition.{" "}
              </strong>
            </p>
            <p>
              In the movie Inception they also had to enter and exit each dream
              within a dream one dream at a time.
            </p>
          </>
        ),
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
        intro: (
          <p>
            Big O Notation is a very complex subject especially if you decide to
            read into the mathematical proofs.
            <br />
            <br />
            However for software engineer coding interviews, the main idea to
            know is that Big O Notation is used to measure the worst case
            scenario for time and space complexity where n is the number of
            elements in the data set.
            <br />
            <br />
            As shown in the image above, various data structures and alorightms
            have different space and time complexity. Interviewers look to see
            if the candidate knows the trade offs between data structures and
            algorithms.
            <br />
            <br />
            Space complexity is the amount of new space needed while time
            complexity measures the amount time in a worse case scenario based
            on the number of elements. Because there are many factors such as
            RAM, CPU, and bandwidth, time as commonly known is not a good
            measure and Big O Notation is used based of the number of elements
            in the data set. Along with knowing the tradeoffs, it is also
            important to know how different Big O functions rank.
            <br />
            <br />
            Where n is the number of elements, they rank from lowest to highest:
            {/* O( 1 ) < O ( log n ) */}
            {` O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n) < O(n!) `}
            <br />
            <br />
          </p>
        ),
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
    tips: [
      {
        tipReferences: [
          "McDowell, G. L. (2015). Cracking the Coding Interview (6th ed.). CareerCup, LLC.",
        ],
        media: "/images/BUD.png",
        mediaReference:
          "https://www.crackingthecodinginterview.com/uploads/6/5/2/8/6528028/cracking_the_coding_skills_-_v6.pdf",
        intro: (
          <>
            <p>
              <strong>BUD</strong> is acronym from Gayle Laakmann McDowell’s
              Cracking the Coding the Interview that stands for Bottlenecks,
              Unnecessary work, and Duplicate work.
            </p>
            <p>
              <h4>Bottlenecks</h4>
              Bottlenecks can be identified by finding the steps with the
              largest time complexity. A common bottleneck is sorting in a sort
              and search solution. While searching for an element is faster in a
              sorted data set, sorting an unsorted data set will add an
              additional slower step which slows down the overall time
              complexity. Alternatively, a hash map is an often-used solution to
              replace sorting at the cost of added space complexity.
            </p>
            <p>
              <h4>Unnecessary Work</h4>
              There are many forms of unnecessary work. A solution with nested
              loops is a good candidate for optimization by removing
              unnecessary. Mathematics principles come in handy for example
              instead of having 4 loops to find all the possible values in
              a+b=c+d between 1 and 10. The equation can be rewritten to d=a+b-c
              and thus reduced to 3 loops to find the possible values for a, b,
              and c.
            </p>
            <p>
              <h4>Duplicate Work</h4> There are many examples on how to remove
              duplicate work. One often used coding exercise is finding whether
              a string is a palindrome (the same forwards and backwards). One
              solution would be to turn the string into an array of letters and
              iterate through the array to compare the letters to the opposite
              end of the array. In this instance iterating through the entire
              array would be duplicate work and only half of the array needs to
              be iterated through since the second half is already being
              compared to the first half.
            </p>
          </>
        ),
      },
      {},
    ],
  },
  Graphs: {
    tips: [
      {
        tipReferences: [
          "https://www.30secondsofcode.org/articles/s/js-data-structures-graph",
          "McDowell, G. L. (2015). Cracking the Coding Interview (6th ed.). CareerCup, LLC."

        ],
        media: "/images/graphs.jpg",
        mediaReference:
          "https://i.ytimg.com/vi/4R7chuhzq7k/maxresdefault.jpg",
        intro: (
          <p>
            Graphs are a useful data structure for data sets with many links or
            connections.
            <br />
            <br />
            Graphs consists of nodes/vertices and edges/connections/links
            <br />
            <br />
            Each node must have a key and a value
            <br />
            <br />
            Each edge must have starting node/vertex, target node/vertex
            <br />
            <br />
            Graphs can be directed, meaning they go in one direction or
            undirected, meaning the edges can go in multiple directions.
            <br />
            <br />
            A graph can consist of multiple isolated graphs.
            <br />
            <br />
            A graph can be cyclic, meaning that if you follow the edges you can
            return to the original node/vertex or acyclic meaning there are no
            cycles.
            <br />
            <br />
            The two ways to represent a graph are with an adjacency list and an
            adjacency matrix.
            <br />
            An adjacency list is where a list of all the vertices/nodes are list
            along with all their adjacent vertices/nodes.
            <br />
            The adjacency matrix is a matrix of 0’s and 1’s to represent which
            nodes/vertices are connected.
            <br />
            <br />
            The two most common search algorithms for graphs are a depth first
            search and a breadth first search. The depth first search traverses
            all the children first and then the siblings while a breadth first
            search traverses all the siblings first and then moves on to the
            children.
          </p>
        ),
      },
      {},
    ],
  },
  "Hash Tables": {
    tips: [
      {
        tipReferences: [
          "https://medium.com/@martin.crabtree/javascript-tracking-key-value-pairs-using-hashmaps-7de6df598257",
        ],
        media: "/images/hashmap.png",
        mediaReference:
          "https://miro.medium.com/max/4800/1*klD0AYkQl20cz35_5qk4OA.png",
        intro: (
          <p>
            The best time complexity is O(1). This means that when you are
            searching for an element you will find it in constant time despite
            how many elements are in your data. This is possible with key/value
            pairs.
            <br />
            <br />
            In JavaScript you can create key/value pairs with JavaScript objects
            as well as a with a JavaScript Map() object.
            <br />
            <br />
            The Map object has additional benefits:
            <ul>
              <li>
                A key can be any datatype including array, objects, string, or
                integers.
              </li>
              <li>
                A key can be created or hashed from any algorithm/function but
                is not necessary.
              </li>
              <li>
                There are additional methods and properties that are part of the
                Map object.
              </li>
            </ul>
            <br />
            <br />
            Below is a list of useful methods and properties of a hashmap
            object:
            <ul>
              <li>hashmap.size() returns the # of elements in the hashmap</li>
              <li>
                hashmap.get(key) returns the value of the element of the given
                key
              </li>
              <li>
                hashmap.has(key) checks to see if the hashmap contains the key
                that is passed as an argument
              </li>
              <li>
                hashmap.set(key, value) accepts 2 arguments and creates a new
                element to the hashmap
              </li>
              <li>
                hashmap.delete(key) deletes the key/value pair that matches the
                key that is passed in as an argument
              </li>
              <li>hashmap.clear() clears all elements from the hashmap</li>
            </ul>
            <br />
            <br />
            One disadvantage is that hashmaps are limited to single-threaded
            code.
            <br />
            Another major disadvantage is that hashmaps cannot be directly
            translated to JSON.
            <br />
            <br />
            The syntax for creating a JavaScript object Map is different than
            creating a JavaScript object and can be seen below:
            <br />
            <pre
              style={{
                overflow: "scroll",
                backgroundColor: "#eee",
                border: "1px solid #999",
                display: "block",
                padding: "20px",
              }}
            >
              <code style={{}}>
                {`
let hasmap = new Map([
  [1, "first"],
  [2, "second"],
  [5, "fifth"]
]);

//add/set a new value
hashmap.set(3,"third");

//get a value based on a key
hashmap.get(2);

      `}
              </code>
            </pre>
            <br />
            While the Map object in JavaScript is useful a traditional hash map
            can be created with a generic JavaScript object where the key is
            hashed and a corresponding value is stored with a key. It is
            important to manage collisions with a strong algorithm/function and
            storing multiple values per key as needed with an array or linked
            list.
          </p>
        ),
      },
      {},
    ],
  },
  // "Quick Sort": {

  // },
};

export default tips;
