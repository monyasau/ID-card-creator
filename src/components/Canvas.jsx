import profileImage from "../assets/blank-profile-picture.png";
import { useEffect, useRef, useState } from "react";


const Canvas = () => {
const [userData, updateUserData]= useState({
  name: "john doe",
  gender: "......",
  

})
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let bgTheme = "blue";
    let textTheme = "white";
    let FormData = {
      name: userData.name,
      idNo: Math.floor(Math.random() * 10000),
      validTill: new Date().getFullYear() + Math.floor(Math.random() * 4),
      gender: "......"
    };

    const image = new Image();
    image.src = profileImage;
    image.onload = () => {
      //background color
      context.fillStyle = "#eeeeee";
      context.fillRect(0, 0, 500, 300);
      //image
      context.drawImage(image, 5, 65, 200, 180);
      //image border
      context.beginPath();
      context.rect(5, 65, 200, 180);
      context.stroke();
      //header
      context.fillStyle = bgTheme;
      context.fillRect(5, 5, 490, 50);
      context.beginPath();
      context.rect(5, 5, 490, 50);
      context.stroke()
      //footer
      context.fillStyle = bgTheme;
      context.fillRect(5, 255, 490, 40);
      context.beginPath();
      context.rect(5, 255, 490, 40);
      context.stroke()
      //header text
      context.font = "20px Arial";
      context.fillStyle = textTheme;
      context.fillText("Title here", 40, 40);
      // footer text
      context.fillStyle = textTheme;
      context.fillText("Footer here", 40, 280);

      // info texts
      context.fillStyle = "black";
      context.font = "20px Arial";
      context.fillText("Name: " + FormData.name, 225, 100);
      context.fillText("Gender: "+FormData.gender, 225, 140);
      context.fillText("Valid until: " + FormData.validTill, 225, 180);
      context.fillText("ID No: " + FormData.idNo, 225, 220);
    };
  }, []);

  return (
    <>
      <div className="my-20 w-[50%] mx-auto">
        <canvas
          ref={canvasRef}
          width={500}
          height={300}
          className="border rounded"
        />
      </div>
    </>
  );
};

export default Canvas;
