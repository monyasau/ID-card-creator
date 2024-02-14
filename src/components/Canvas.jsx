
import profileImage from "../assets/blank-profile-picture.png";
import { useEffect, useRef, useState } from "react";

const Canvas = ({ userInput,count }) => {

  const canvasRef = useRef(null);
  
  useEffect(() => {
    
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        let bgTheme = "blue";
        let textTheme = "white";
        let FormData = {
          name: userInput.name,
          idNo: "00"+Math.floor(Math.random() * 10000),
          validTill: new Date().getFullYear() + Math.floor(Math.random() * 4+1),
          gender: userInput.gender,
        };
    console.log('useEffect logic ran');
    
    const image = new Image();
    image.src = profileImage;
    
    // useEffect(
      //background color
      context.fillStyle = "#fff";
      context.fillRect(0, 0, 500, 300);
      // canvas clip
      context.strokeStyle="#ddd"
      context.beginPath();
      context.roundRect(0, 0, 500, 300, [25]);
      // context.roundRect(0,0,500,300,[25])
      context.stroke();
      context.clip();
      //header
      context.fillStyle = bgTheme;
      context.fillRect(0, 0, 500, 50);
      context.beginPath();
      //footer
      context.fillStyle = bgTheme;
      context.fillRect(0, 255, 500, 50);
      context.beginPath();
      //header text
      context.font = "20px Arial";
      context.fillStyle = textTheme;
      context.fillText("Title here", 40, 30);
      // footer text
      context.fillStyle = textTheme;
      context.fillText("Footer here", 40, 285);
      // info texts
      context.fillStyle = "black";
      context.font = "20px Arial";
      context.fillText("Name: " + userInput.name, 225, 100);
      context.fillText("Gender: " + userInput.gender, 225, 140);
      context.fillText("Valid until: " + FormData.validTill, 225, 180);
      context.fillText("ID No: " + FormData.idNo, 225, 220);
      context.closePath();
      //image border
      context.strokeStyle = "#aaa";
      context.beginPath();
      context.roundRect(5, 65, 200, 180, [20]);
      context.stroke();
      context.closePath();
      context.clip();
      //image
      context.drawImage(image, 5, 65, 200, 180);
  }, [userInput]); // 👈️ add props as dependencies

  // [userData, userData.name])

  // useEffect(() => {
  //   return () => {
  //     console.log("updated")
  //   }
  // }, [userData])

  const handleDownload=()=>{}
  return (
    <>
      <div className="my-20 w-[50%] mx-auto flex md:flex-col items-center">
        <canvas ref={canvasRef} width={500} height={300} className="" />
      <button className=" m-4 p-4 bg-slate-300 text-xl rounded" onClick={handleDownload}>Download ID Card</button>
    {count}
    {userInput.name}
      </div>
    </>
  );
};

export default Canvas;