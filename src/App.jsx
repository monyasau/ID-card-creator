import TopNav from "./components/TopNav";
import Form  from './components/Form'
import Canvas from "./components/Canvas";
import { useState } from "react";

function App() {
  const [userData, setUserData]= useState({
    name: "John doe",
    gender: "Male",
    
  
  })

  return (
    <>
      <TopNav />
      <div className="flex max-w-screen-xl w-full items-center mx-auto mt-[10%]">
      <Form userInput={userData} setUserInput={setUserData}/>
        <Canvas userInput={userData}/>
      </div>
    </>
  );
}

export default App;
