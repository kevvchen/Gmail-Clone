import React, { useEffect } from "react";

// Components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Mail from "./components/Mail/Mail";
import EmailList from "./components/EmailList/EmailList";
import SendMail from "./components/SendMail/SendMail";
import Login from "./components/Login/Login";

// CSS Files
import "./App.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";

// React DOM router
// Routes is equivalent to Switch but better -- new v6
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// firebase
import { auth } from "./config/firebase";

const App = () => {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // user is logged in
        dispatch(
          login({
            // action.payloads
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
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
      )}
    </BrowserRouter>
  );
};

export default App;
