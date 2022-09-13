import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import AuthMenu from "./AuthMenu";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const AuthLogout = () => {
  const appContext = useContext(AppContext);
  const { userName, logout } = appContext;
  return (
    <Row>
      <Col sm="12" md="6">
        <span className="">
          Logged in as {userName}
        </span>
        <div className="flex justify-center w-full">
          <button
            // variant="outline-warning"
            className="btn btn-outline-warning"
            onClick={() => logout()}
          >
            Logout
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
