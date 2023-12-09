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
