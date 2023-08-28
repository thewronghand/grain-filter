import "./App.css";
// import { useGrain } from "./util/hooks/useGrain";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import SubPage1 from "./Pages/SubPage1";
import SubPage2 from "./Pages/SubPage2";

function App() {
  // const canvasRef = useGrain();

  return (
    <>
      {/* <canvas ref={canvasRef} className="noise" /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/subpage1" element={<SubPage1 />} />
        <Route path="/subpage2" element={<SubPage2 />} />
      </Routes>
    </>
  );
}

export default App;
