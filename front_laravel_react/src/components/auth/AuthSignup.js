import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { MdEmail } from "react-icons/md";
import { GoKey } from "react-icons/go";
import { IoMdPerson } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import AuthMenu from "./AuthMenu";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const AuthSignup = () => {
  const appContext = useContext(AppContext);
  const {
    userNameInput,
    userEmail,
    userPassword,
    handleUserNameInput,
    handleUserEmail,
    handleUserPassword,
    signup,
    errorMessage,
  } = appContext;
  const [hidePassword, setHidePassword] = useState(true);
  const showHiddenPassword = hidePassword ? "" : "hidden";
  const showRevealedPassword = hidePassword ? "hidden" : "";
  function togglePassword() {
    setHidePassword(!hidePassword);
  }
  return (
    <Row className="h--75 ">
      <Col sm="12" md="6" className="">
        <AuthMenu loggedIn={false} c={'glass yekan fs-4'} />
      </Col>
      <Col sm="12" md="6" >
        <Form onSubmit={(e) => signup(e)} className="glass">
        <h3 className="yekan">ثبت نام</h3>
        {/* USER NAME */}
        <div className="mb-3">
          <label>نام<IoMdPerson className="" /></label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="User name"
            value={userNameInput}
              onChange={handleUserNameInput}
          />
        </div>
        {/* EMAIL */}
        <div className="mb-3">
          <label>آدرس ایمیل<MdEmail className="" /></label>
          <input
            type="email"
            name="email"
            value={userEmail}
            onChange={handleUserEmail}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        {/* HIDDEN PASSWORD */}
        <div className={showHiddenPassword +"mb-3"}>
          <label>رمز عبور<GoKey className="" /></label>
          <input
            name="password"
            type="password"
            value={userPassword}
            onChange={handleUserPassword}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        {/* HIDDEN PASSWORD */}
          {/* <div className="col-span-1 bg-blue-200 text-center pt-1">
            <button
              className="text-blue-500 text-3xl focus:outline-none"
              onClick={() => togglePassword()}
            >
              <FaRegEye />
            </button>
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
        </div>  */}

        {/* SUBMIT BUTTON */}
        <div className="d-grid">
          <Button type="submit" 
          className="btn btn-primary" 
          // onClick={() => signup()}
          >
            ثبت
          </Button>
        </div>
        
        <div className="">
          {errorMessage}
        </div>
        </Form>
      </Col>
    </Row>
  );
};

export default AuthSignup;
