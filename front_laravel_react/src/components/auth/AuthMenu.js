import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

import { Button } from 'react-bootstrap';


const AuthMenu = (props) => {
  const appContext = useContext(AppContext);
  const { changeAuthStatusLogin, changeAuthStatusSignup } = appContext;
  return (
    <div className="">
      <div className="">
        {/* Authentication */}
        اهراز هویت
      </div>
      <div className="">
        Using Laravel Sanctum
      </div>
      {props.loggedIn ? null : (
        <div className="">
          <Button variant="info"
            className=""
            onClick={() => changeAuthStatusSignup()}
          >
            {/* Signup */}
            ثبت نام
          </Button>
          <Button variant="info"
            className=""
            onClick={() => changeAuthStatusLogin()}
          >
            {/* Login */}
            ورود
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthMenu;
