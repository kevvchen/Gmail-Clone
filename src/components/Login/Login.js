import React from "react";

// Material UI
import { Button } from "@mui/material";

// CSS Files
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          alt="Gmail login logo"
        />
        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Login;
