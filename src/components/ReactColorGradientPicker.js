import { useState } from "react";
import { ColorPicker } from "react-color-gradient-picker";
import "react-color-gradient-picker/dist/index.css";

const color = {
  red: 255,
  green: 0,
  blue: 0,
  alpha: 1,
};

const gradient = {
  points: [
    {
      left: 0,
      red: 0,
      green: 0,
      blue: 0,
      alpha: 1,
    },
    {
      left: 100,
      red: 255,
      green: 0,
      blue: 0,
      alpha: 1,
    },
  ],
  degree: 0,
  type: "linear",
};

const ReactColorGradientPicker = () => {
  const [colorAttrs, setColorAttrs] = useState(color);
  const [gradientAttrs, setGradientAttrs] = useState(gradient);

  const onChangeColor = (colorAttrs) => {
    setColorAttrs(colorAttrs);
  };

  const onChangeGradient = (gradientAttrs) => {
    setGradientAttrs(gradientAttrs);
  };

  return (
    <div className="container">
      <h1 className="title">react-color-gradient-picker</h1>
      <div className="centerlize-element">
        <div style={{ position: "relative", top: "8px" }}>
          <ColorPicker
            onStartChange={onChangeColor}
            onChange={onChangeColor}
            onEndChange={onChangeColor}
            color={colorAttrs}
          />
        </div>

        <ColorPicker
          onStartChange={onChangeGradient}
          onChange={onChangeGradient}
          onEndChange={onChangeGradient}
          gradient={gradientAttrs}
          isGradient
        />
      </div>
    </div>
  );
};

export default ReactColorGradientPicker;
