import React from "react";

// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";
import SendMail from "./components/SendMail/SendMail";

// CSS Files
import "./App.css";

// Redux
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

// React DOM router
// Routes is equivalent to Switch but better -- new v6
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </BrowserRouter>
  );
};

export default App;
