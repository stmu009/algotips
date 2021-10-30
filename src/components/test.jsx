// import React, { useState, useEffect } from "react";
import React from "react";
// const React = require('react');
const {useState, useEffect} = React;
// const {useState, useEffect} = require('react');

export default function Parent() {
  //TODO: split up state
  const [state, setState] = useState({ count: 0 });

  return (
    <div>
      {/* Changed from variable to object */}
      <p>count: {state.count}</p>
      <button
        onClick={() => {
          setState((c) => {
            return { count: c.count++};
          });
        }}
      >
        Increment
      </button>
      <ChildPrint state={state} />
      <ChildWithCount parentCount={state} />
      <p>
        Time spent: <Counter />
      </p>
    </div>
  );
}

function ChildPrint({ state: {count} }) {
  //?: deconstructed state
//   console.log("state :>> ", { state });
  console.log("state.count :>> ", count
  //state.count
  );

//   state.count = state.count + 5;

  //TODO: more appropriate tag
  return (
    <div>
      <p>count + 5 = {
          count + 5
        //   state.count+5
        } </p>
    </div>
  );
}

function ChildWithCount({ parentCount }) {
  const [childCount, setChildCount] = useState(parentCount.count);

  console.log("childCount :>> ", childCount);

  return (
    <div>
      <p>Child count: {childCount}</p>

      <button onClick={()=>setChildCount(c => c+1)}>
        Increment Child
      </button>
    </div>
  );
}

function Counter() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    //TODO: ?
    const id = setInterval(() => {
      setCount(count++);
    }, 1000);
     return ()=>  clearInterval(id);
  }, [count]);

  return <h1>{count}</h1>;
}
