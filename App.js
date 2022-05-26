import { useState } from "react";
import DisplayColor from "./Components/DisplayColor";
import InputText from "./Components/InputText";

function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [blackFont, setBlackFont] = useState(true);

  return (
    <div className="app">
      <DisplayColor
        color={color}
        hexValue={hexValue}
        blackFont={blackFont}
      />
      <InputText
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        blackFont={blackFont}
        setBlackFont={setBlackFont}
      />
    </div>
  );
}

export default App;
