import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage.js";
import ClassicMode from "./components/ClassicMode.js";
import RestrictiveMode from "./components/RestrictiveMode.js";


export default function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#80160e"}}>
      <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/ClassicPomodoro" element={<ClassicMode />}/>
          <Route path="/RestrictivePomodoro" element={<RestrictiveMode />}/>
      </Routes>
    </div>
  );
}
