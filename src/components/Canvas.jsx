import testImage from "../assets/image.jpg";

import { useEffect, useRef } from "react";

const Canvas = () => {


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
