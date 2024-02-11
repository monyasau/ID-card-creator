import profileImage from "../assets/blank-profile-picture.png";
import { useEffect, useRef, useState } from "react";

const Canvas = ({ userInput }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let bgTheme = "blue";
    let textTheme = "white";
    let FormData = {
      name: userInput.name,
      idNo: Math.floor(Math.random() * 10000),
      validTill: new Date().getFullYear() + Math.floor(Math.random() * 4),
      gender: userInput.gender,
    };

    const image = new Image();
    image.src = profileImage;
    // useEffect(
    image.onload = () => {
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
      context.fillText("Name: " + FormData.name, 225, 100);
      context.fillText("Gender: " + FormData.gender, 225, 140);
      context.fillText("Valid until: " + FormData.validTill, 225, 180);
      context.fillText("ID No: " + FormData.idNo, 225, 220);
      context.closePath();
      //image border
      context.strokeStyle = "#ccc";
      context.beginPath();
      context.roundRect(5, 65, 200, 180, [20]);
      context.stroke();
      context.closePath();
      context.clip();
      //image
      context.drawImage(image, 5, 65, 200, 180);
    };
  });
  // [userData, userData.name])

  // useEffect(() => {
  //   return () => {
  //     console.log("updated")
  //   }
  // }, [userData])

  return (
    <>
      <div className="my-20 w-[50%] mx-auto">
        <canvas ref={canvasRef} width={500} height={300} className="" />
      </div>
    </>
  );
};

export default Canvas;

// import profileImage from "../assets/blank-profile-picture.png";
// import { useEffect, useRef } from "react";

// const Canvas = ({ userInput }) => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     let bgTheme = "blue";
//     let textTheme = "white";
//     let FormData = {
//       name: userInput.name,
//       idNo: Math.floor(Math.random() * 10000),
//       validTill: new Date().getFullYear() + Math.floor(Math.random() * 4),
//       gender: userInput.gender,
//     };

//     const image = new Image();
//     image.src = profileImage;

//     image.onload = () => {
//       // Background color
//       context.fillStyle = "#eeeeee";
//       context.fillRect(0, 0, 500, 300);

//       // Draw rounded rectangle for the canvas
//       context.beginPath();
//       context.moveTo(20, 0);
//       context.arcTo(500, 0, 500, 300, 20);
//       context.arcTo(500, 300, 0, 300, 20);
//       context.arcTo(0, 300, 0, 0, 20);
//       context.arcTo(0, 0, 500, 0, 20);
//       context.closePath();
//       context.clip();

//       // Draw image
//       context.drawImage(image, 5, 65, 200, 180);

//       // Header
//       context.fillStyle = bgTheme;
//       context.fillRect(0, 0, 500, 50);

//       // Footer
//       context.fillStyle = bgTheme;
//       context.fillRect(0, 255, 500, 50);

//       // Header text
//       context.font = "20px Arial";
//       context.fillStyle = textTheme;
//       context.fillText("Title here", 40, 30);

//       // Footer text
//       context.fillStyle = textTheme;
//       context.fillText("Footer here", 40, 285);

//       // Info texts
//       context.fillStyle = "black";
//       context.font = "20px Arial";
//       context.fillText("Name: " + FormData.name, 225, 100);
//       context.fillText("Gender: " + FormData.gender, 225, 140);
//       context.fillText("Valid until: " + FormData.validTill, 225, 180);
//       context.fillText("ID No: " + FormData.idNo, 225, 220);
//     };
//   }, [userInput]);

//   const handleDownload = () => {
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     canvas.width = 500;
//     canvas.height = 300;
//     context.drawImage(canvasRef.current, 0, 0, 500, 300);
//     const dataURL = canvas.toDataURL();
//     const a = document.createElement('a');
//     a.href = dataURL;
//     a.download = 'canvas.png';
//     a.click();
//   };

//   return (
//     <>
//       <div className="my-20 w-[50%] mx-auto">
//         <canvas
//           ref={canvasRef}
//           width={500}
//           height={300}
//           className="border rounded"
//           style={{ borderRadius: "20px" }}
//         />
//         <button onClick={handleDownload}>Download Canvas</button>
//       </div>
//     </>
//   );
// };

// export default Canvas;
