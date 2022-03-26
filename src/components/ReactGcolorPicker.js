import ReactGPicker from "react-gcolor-picker";

const ReactgColorPicker = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div className="container">
      <h1>react-gcolor-picker</h1>
      <ReactGPicker value="#ffffff" onChange={onChange} gradient format="hex" />
    </div>
  );
};

export default ReactgColorPicker;
