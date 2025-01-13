import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("richblack-700");

  return (
    <div className={`bg-${color} h-screen w-full`}>
      <div className={`px-4 py-2 rounded-lg border border-red-500 bg-white`}>
        <div className="flex items-center justify-between">
          <button
            onClick={() => setColor("red-950")}
            className="bg-red-950 text-white px-4 py-2 rounded-2xl"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue-900")}
            className="bg-blue-900 text-white px-4 py-2 rounded-2xl"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green-500")}
            className="bg-green-500 text-white px-4 py-2 rounded-2xl"
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow-900")}
            className="bg-yellow-900 text-white px-4 py-2 rounded-2xl"
          >
            Yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
