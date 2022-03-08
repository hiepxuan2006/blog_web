import React from "react";
import { useParams } from "react-router";
import "./login.scss";
import Login from "./login/Login";
import Register from "./register/Register";
function Auth(props) {
  const slug = useParams();
  const { authRoute } = props

  return (
    <div className="auth">
      <div className="auth__wrap">
        {
          (authRoute === "login") && <Login />}{

          (authRoute === 'register') && <Register />
        }
      </div>
    </div>
  );
}

export default Auth;
