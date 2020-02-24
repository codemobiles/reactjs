import React, { useState, useEffect } from "react";
import "./App.css"
import Counter from "./Counter";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Initial");
  }, []);


  const styles = {
    root: {
      backgroundColor: "#00F",
      textAlign: "center",
      paddingTop: 50,
      paddingBottom: 50
    }
  }

  return (
    <div
      className="Root"
    >
      <h1>{count}</h1>
      <br />
      {/* JSX */}
      <button onClick={() => setCount(count + 1)}>ADD</button>
      <br />
      {/* JSX */}
      <button onClick={() => setCount(count - 1)}>REMOCE</button>

      <Counter/>
    </div>
  );
}
