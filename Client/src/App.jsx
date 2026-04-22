import React from "react";
import "./index.css";
import { useUser } from "./Context/UserContext";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div className="w-full h-full bg-black text-white">
      <Dashboard />
    </div>
  );
};

export default App;
