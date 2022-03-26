import Gradient from "javascript-color-gradient";

const JavascriptColorGradient = () => {
  const colorGradient = new Gradient();
  const secondGradient = new Gradient();

  colorGradient.setGradient("#3F2CAF", "e9446a");
  secondGradient.setGradient("#3F2CAF", "#e9446a", "edc988", "607D8B");

  secondGradient.setMidpoint(8);

  const colorArr = colorGradient.getArray();
  const secondColorArr = secondGradient.getArray();

  return (
    <div className="container">
      <h1 className="title">javascript-color-gradient</h1>

      <h4>Using two color gradients and default (10) midpoints</h4>
      <div>
        {colorArr.map((color) => {
          return (
            <button
              className="button"
              style={{ backgroundColor: color }}
              key={color}
            />
          );
        })}
      </div>
      <h4>Using four color gradients and 15 midpoints</h4>
      <div>
        {secondColorArr.map((color) => {
          return (
            <button
              className="button"
              style={{ backgroundColor: color }}
              key={color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default JavascriptColorGradient;
