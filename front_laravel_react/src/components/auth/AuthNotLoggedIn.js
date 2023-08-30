import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import AuthMenu from "./AuthMenu";
import tree from '../../svg/tree.svg';
// import logo from '/logo.512.png';
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
    <Row md={5} className="glass align-items-center yekan fs-4">
      <Col sm="12" md="6">
        <AuthMenu loggedIn={false} />
      </Col>
      <Col sm="12" md="6">
        {/* <span>you are not loggedIn</span>  */}
            {/* <Tree className="tree" style={{scale:'0.25' ,display:"block"}} /> */}
        <div className="d-flex flex-column">
          {/* <img src={tree} alt="logo" className="w-50 m-2" /> */}
          <span className="align-items-center  justify-content-center"><img src={'logo512.png'} alt="logo" className=" w-50 m-2 dropShadow" /></span>
          
          <span className=" tgradient fs-1  justify-content-center top-1">برنامه‌ای برای تنظیم زمان</span>
        </div>    
       
        
      </Col>
    </Row>
  );
};

export default AuthNotLoggedIn;
