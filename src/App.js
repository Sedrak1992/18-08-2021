import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";

function App() {
  const [item, setItem] = useState(1);
  const minus = () => {
    if (item != 0) {
      setItem(item - 1);
    }
  };

  return (
    <div className='App'>  
      <h1>{item}</h1>
      <form> 
        <input type='texs'></input>
      </form>
      <br />
      <button onClick={() => setItem(item + 1)}> + </button>
      <div>
        <button onClick={minus}>-</button>
      </div>
    </div>
  );
}

export default App;
