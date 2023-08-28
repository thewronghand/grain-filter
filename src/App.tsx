import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGrain } from "./util/hooks/useGrain";

function App() {
  const [count, setCount] = useState(0);
  const canvasRef = useGrain();

  return (
    <>
      <div>
        <canvas ref={canvasRef} className="noise" />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Film grain effect!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Wow this is beautiful!</p>
      </div>
      <p className="read-the-docs">But should I apply this to my project?</p>
    </>
  );
}

export default App;
