import { Link } from "react-router-dom";
import { useGrain } from "../util/hooks/useGrain";

export default function SubPage1() {
  const canvasRef = useGrain();
  return (
    <>
      <canvas ref={canvasRef} className="noise" />
      <>this is subpage1</>
      <Link to="/">return to main</Link>
    </>
  );
}
