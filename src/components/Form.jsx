import { useState } from "react";

let Form = ({count, userInput, userData, setUserInput, setCountProp }) => {

  let updateInput = (event) => {
    if (event.keyCode === 13) {
      setUserInput({ name: event.target.value });
    }
  };
  return (
    <>
      <div className="w-[50%] flex flex-wrap">
        <button
          onClick={() => setCountProp(count + 1)}
          className=" bg-gray-200 hover:bg-gray-300 rounded"
        >
          💖 x{count}
        </button>

        <div className="w-[50%]">
          <span>Name:</span>
          <input
            type="text"
            onKeyUp={() => {
              setUserInput(
                {
                  name: event.target.value,
                  gender: "userData.gender",
                }
              );
            }}
            name=""
            id=""
            className="w-[70%] m-5 p-1.5 h-12 border"
          />
        </div>
        <div className="w-[50%]">
          <span>Title:</span>
          <input
            type="text"
            name="title"
            id=""
            className="w-[70%] m-5 p-1.5 h-12 border"
          />
        </div>
        <div className="w-[50%]">
          <span>Footer:</span>
          <input
            type="text"
            name=""
            id=""
            className="w-[70%] m-5 p-1.5 h-12 border"
          />
        </div>
        <div className="w-[50%]">
          <span>Gender:</span>
          <select name="Gender" className="m-5 w-[70%] p-1.5 h-12 border" id="">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className=" flex items-center">
          <span>image:</span>
          <input type="file" className="m-5 p-14 border" src="" alt="" />
        </div>
      </div>
    </>
  );
};
export default Form;
