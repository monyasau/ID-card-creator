import { useRef, useEffect } from "react";

export default function Canvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvasRef.getContext('2d')
    // context.fillStyle = 'blue';
    // context.fillRect(10, 10, 50, 50);
  }, []);
  return (
    <div>
      <canvas
        ref={canvasRef}
        width={400} // Set the width of your canvas
        height={400} // Set the height of your canvas
        style={{ border: "1px solid black" }}
      ></canvas>
    </div>
  );
}