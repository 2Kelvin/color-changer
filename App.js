import { useState } from "react";
import DisplayColor from "./Components/DisplayColor";
import InputText from "./Components/InputText";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="app">
      <DisplayColor
        color={color}
      />
      <InputText
        color={color}
        setColor={setColor}
      />
    </div>
  );
}

export default App;
