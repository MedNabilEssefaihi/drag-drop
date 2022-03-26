import { useState } from "react";
import {
  Slider,
  Sketch,
  Material,
  Colorful,
  Compact,
  Circle,
  Wheel,
  Block,
  Github,
  Chrome,
} from "@uiw/react-color";
import {
  Alpha,
  Hue,
  ShadeSlider,
  Saturation,
  Interactive,
  hsvaToHslaString,
} from "@uiw/react-color";
import {
  EditableInput,
  EditableInputRGBA,
  EditableInputHSLA,
} from "@uiw/react-color";

const UIWReactColor = () => {
  const [hex, setHex] = useState("#fff");
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 68, a: 1 });

  return (
    <div className="container">
      <h1>@uiw/react-color</h1>
      <h4>Sketch</h4>

      <div className="centerlize-element">
        {/* <Sketch
          style={{ marginLeft: "20" }}
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
          }}
        /> */}

        <Alpha
          hsva={hsva}
          onChange={(newAlpha) => {
            setHsva({ ...hsva, ...newAlpha });
          }}
        />
      </div>
    </div>
  );
};

export default UIWReactColor;
