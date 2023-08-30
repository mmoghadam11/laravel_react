import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

import { Button } from 'react-bootstrap';


const AuthMenu = (props) => {
  const appContext = useContext(AppContext);
  const { changeAuthStatusLogin, changeAuthStatusSignup } = appContext;
  return (
    <div className={"flex justify-center w-full "+ props.c}>
      {props.loggedIn ? null :(
        <div className="">
        {/* Authentication */}
        اهراز هویت
        </div>
      )}
      
      <div className="m-3">
        {/* Using Laravel Sanctum */}
        تنظیم برنامه کاری
        
      </div>
      {props.loggedIn ? null : (
        <div className="">
          <Button variant="outline-dark"
            className="mt-3"
            onClick={() => changeAuthStatusSignup()}
          >
            {/* Signup */}
            ثبت نام
          </Button>
          <Button variant="outline-dark"
            className="mt-3"
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
