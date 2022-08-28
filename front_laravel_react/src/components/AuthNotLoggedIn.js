import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import AuthMenu from "./AuthMenu";
import Tree from "../svg/Tree";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AuthNotLoggedIn = () => {
  const appContext = useContext(AppContext);
  const {
    userEmail,
    userPassword,
    handleUserEmail,
    handleUserPassword,
    login,
  } = appContext;
  return (
    <Row>
      <Col sm="12" md="6">
        <span>you are not loggedIn</span>
        {/* <Tree className="tree" style={{scale:'0.25' ,display:"block"}} /> */}
      </Col>
      <Col sm="12" md="6">
        <AuthMenu loggedIn={false} />
      </Col>
    </Row>
  );
};

export default AuthNotLoggedIn;
