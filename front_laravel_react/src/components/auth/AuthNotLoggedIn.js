import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import AuthMenu from "./AuthMenu";
import tree from '../../svg/tree.svg';
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
    <Row md={5}>
      <Col sm="12" md="6">
        {/* <span>you are not loggedIn</span>  */}
        <span>شماهنوز وارد نشده‌اید</span>
            {/* <Tree className="tree" style={{scale:'0.25' ,display:"block"}} /> */}
        <div>
           <img src={tree} alt="logo" className="w-50 m-2" />
        </div>    
       
        
      </Col>
      <Col sm="12" md="6">
        <AuthMenu loggedIn={false} />
      </Col>
    </Row>
  );
};

export default AuthNotLoggedIn;
