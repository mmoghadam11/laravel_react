import React, { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
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
          {/* <h3>Login</h3> */}
          <h3>ورود</h3>
          {/* EMAIL */}
          <div className="mb-3" >
            <label><MdEmail className="" />ایمیل</label>
            <input 
              type="email"
              className="form-control"
              placeholder="ایمیل خود را وارد کنید"
              name="email"
              value={userEmail}
              onChange={handleUserEmail}
            />
          </div>
          

          {/* HIDDEN PASSWORD */}
          <div className={"mb-3"}>
            <label><GoKey className="" />رمز</label>
            <input
              name="password"
              type="password"
              value={userPassword}
              onChange={handleUserPassword}
              className="form-control"
              placeholder="رمز عبور را وارد کنید"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="d-grid ">
            <Button type="submit" variant="outline-info" 
            // className="btn btn-primary" 
            // onClick={() => login()}
            >
              ورود
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
