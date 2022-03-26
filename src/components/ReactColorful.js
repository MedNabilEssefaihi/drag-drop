import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const ReactColorful = () => {
  const [color, setColor] = useState("#aabbcc");

  return (
    <div className="container">
      <h1>react-colorful</h1>
      <HexColorPicker color={color} onChange={setColor} />;
    </div>
  );
};

export default ReactColorful;
