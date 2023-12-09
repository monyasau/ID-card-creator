import testImage from "../assets/image.jpg";

import { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let bgTheme = "blue";
    let textTheme = "white";
    let FormData = {
      name: "Olajide olanrewaju",
      idNo: Math.floor(Math.random() * 10000),
      validTill: new Date().getFullYear() + Math.floor(Math.random() * 4),
      gender: "......"
    };

    const image = new Image();
    image.src = testImage;
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

    };
  }, []);

  return (
    <>
      <div className="max-w-screen-xl w-full mx-auto my-20">
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
