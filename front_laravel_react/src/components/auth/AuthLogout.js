import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import AuthMenu from "./AuthMenu";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlinePoweroff } from 'react-icons/ai';

const AuthLogout = () => {
  const appContext = useContext(AppContext);
  const { userName, logout } = appContext;
  return (
    <Row>
      <Col sm="12" md="6">
        <div className="flex justify-center w-full">
          <span className="d-in">
            {/* Logged in as {userName} */}
            <BsPersonCircle className="fs-2"/> {userName} عزیز خوش آمدید!
          </span>
          <button
            // variant="outline-warning"
            className="btn btn-warning m-3"
            onClick={() => logout()}
          >
            {/* Logout */}
            خروج <AiOutlinePoweroff/>
          </button>
        </div>
      </Col>
      <Col sm="12" md="6">
        <AuthMenu loggedIn={true} />
      </Col>
    </Row>
  );
};

export default AuthLogout;
