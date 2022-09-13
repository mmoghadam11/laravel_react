import React, { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { MdEmail } from "react-icons/md";
import { GoKey } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import AuthMenu from "./AuthMenu";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const AuthLogin = () => {
  const appContext = useContext(AppContext);
  const {
    userEmail,
    userPassword,
    handleUserEmail,
    handleUserPassword,
    login,
    errorMessage,
  } = appContext;
//   const [hidePassword, setHidePassword] = useState(true);
//   const showHiddenPassword = hidePassword ? "" : "hidden";
//   const showRevealedPassword = hidePassword ? "hidden" : "";
//   function togglePassword() {
//     setHidePassword(!hidePassword);
//   }
  return (
    <Row>
      <Col sm="12" md="6">
        <Form onSubmit={(e) => login(e)}>
        <h3>Login</h3>
        {/* EMAIL */}
        <div className="mb-3" >
          <label><MdEmail className="" />Email address</label>
          <input 
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={userEmail}
            onChange={handleUserEmail}
          />
        </div>
        

        {/* HIDDEN PASSWORD */}
        <div className={"mb-3"}>
          <label><GoKey className="" />Password</label>
          <input
            name="password"
            type="password"
            value={userPassword}
            onChange={handleUserPassword}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        
       
        {/* REVEALED PASSWORD */}
        {/* <div className={showRevealedPassword + " grid grid-cols-7 w-full"}>
          <div className="col-span-1 bg-blue-500 pt-1">
            <GoKey className="text-white text-3xl mx-auto" />
          </div>
          <div className="col-span-5">
            <input
              className="w-full bg-blue-200 placeholder-blue-800 pl-3 py-2"
              name="password"
              type="text"
              placeholder="Password"
              value={userPassword}
              onChange={handleUserPassword}
            />
          </div>
          <div className="col-span-1 bg-blue-200 text-center pt-1">
            <button
              className="text-blue-500 text-3xl focus:outline-none"
              onClick={() => togglePassword()}
            >
              <FaRegEyeSlash />
            </button>
          </div>
        </div> */}

        {/* SUBMIT BUTTON */}
        <div className="d-grid ">
          <Button type="submit" variant="info" 
          className="btn btn-primary" 
          // onClick={() => login()}
          >
            Login
          </Button>
        </div>
        <div className="">
          {errorMessage}
        </div>
        
        </Form>
      </Col>
      <Col sm="12" md="6">
        <AuthMenu loggedIn={false} />
      </Col>
    </Row>
  );
};

export default AuthLogin;
