import React from "react";

// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

// CSS Files
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
    </div>
  );
};

export default App;
