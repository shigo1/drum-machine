import "./App.css";
import DrumPad from "./comps/DrumPad";
import React, {useState} from "react";

function App() {
  const [active,setActive] = useState(false);

  const handleTheme = ()=>{
    setActive(!active);

  }


  return (
    <div className={active ? "App-dark" : "App"}>
        <div className="position-absolute theme">
            <button className="p-1" onClick={handleTheme} >{active ? "Dark" : "Light"}</button>
          
        </div>
      <DrumPad />
    </div>
  );
}

export default App;
