import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
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
        <div className="flex justify-center w-full">
          <button
            // variant="outline-warning"
            className="btn btn-outline-warning m-3"
            onClick={() => logout()}
          >
            {/* Logout */}
            خروج
          </button>
          <span className="d-in">
          {/* Logged in as {userName} */}
          !{userName} عزیز خوش آمدید
        </span>
        </div>
      </Col>
      <Col sm="12" md="6">
        <AuthMenu loggedIn={true} />
      </Col>
    </Row>
  );
};

export default AuthLogout;
