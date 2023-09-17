import { useEffect, useState } from "react";
import "./App.css";
import ASCIIText from "./Components/ASCII-Text/ASCIIText";

function App() {
  const initalConfig = {
    font: "Standard",
  };

  const [config, setConfig] = useState(initalConfig);
  const [showComp, setShowComp] = useState(true);

  useEffect(() => {
    console.log("updating comp");
    setShowComp(true);
  }, [config]);

  const handleChange = (e) => {
    setShowComp(false);
    setConfig({
      ...config,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="message"
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Type something"
        />
        <select name="font" id="font" onChange={(e) => handleChange(e)}>
          <option value="Standard">Standard</option>
          <option value="Big">Big</option>
        </select>
      </div>
      {showComp && (
        <ASCIIText
          message={config.message}
          font={config.font}
          htmlClassname="preview"
        />
      )}
    </div>
  );
}

export default App;
