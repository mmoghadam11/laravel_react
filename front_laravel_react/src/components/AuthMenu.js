import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

import { Button } from 'react-bootstrap';


const AuthMenu = (props) => {
  const appContext = useContext(AppContext);
  const { changeAuthStatusLogin, changeAuthStatusSignup } = appContext;
  return (
    <div className="">
      <div className="">
        Authentication
      </div>
      <div className="">
        Using Laravel Sanctum
      </div>
      {props.loggedIn ? null : (
        <div className="">
          <Button
            className=""
            onClick={() => changeAuthStatusSignup()}
          >
            Signup
          </Button>
          <Button
            className=""
            onClick={() => changeAuthStatusLogin()}
          >
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthMenu;
