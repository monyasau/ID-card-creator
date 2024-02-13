import TopNav from "./components/TopNav";
import Form from "./components/Form";
import Canvas from "./components/Canvas";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState({
    name: "John doe",
    gender: "Male",
  });
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNav />
      <div className="md:grid grid-cols-2 max-w-screen-xl w-full items-center mx-auto mt-[10%]">
        <Form userData={userData} count={count} setCountProp={setCount} userInput={userData} setUserInput={setUserData} />
        <Canvas count={count} userInput={userData} />
      </div>
      <button
        // onClick={setUserData({
        //   name: "snmaa",
        //   gender: "latex",
        // })}
      >
        sssnsn
      </button>
    </>
  );
}

export default App;

// import {useEffect, useState} from 'react';

// function Child({parentCount}) {
//   const [childCount, setChildCount] = useState(0);

//   useEffect(() => {
//     setChildCount(parentCount * 2);

//     console.log('useEffect logic ran');
//   }, [parentCount]); // 👈️ add props as dependencies

//   return (
//     <div>
//       <button>Child count {childCount}</button>
//     </div>
//   );
// }

// export default function Parent() {
//   const [parentCount, setParentCount] = useState(0);

//   return (
//     <div>
//       <button
//         onClick={() => setParentCount(current => current + 1)}
//       >
//         Parent count: {parentCount}
//       </button>

//       <hr />

//       <Child parentCount={parentCount} />
//     </div>
//   );
// }
