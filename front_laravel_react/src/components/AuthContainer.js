import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import {
  NOT_LOGGED_IN,
  LOG_IN_FORM,
  SIGN_UP_FORM,
  LOGGED_IN,
} from "../constants/AuthStatus";
import AuthNotLoggedIn from "./AuthNotLoggedIn";
import AuthSignup from "./AuthSignup";
import AuthLogin from "./AuthLogin";
import AuthLogout from "./AuthLogout";
import { AppContext } from "../contexts/AppContext";

const AuthContainer = () => {
  const appContext = useContext(AppContext);
  const { authStatus, errorMessage } = appContext;
  const showNotLoggedIn = authStatus === NOT_LOGGED_IN ? "" : "d-none";
  const showLoginForm = authStatus === LOG_IN_FORM ? "" : "d-none";
  const showSignupForm = authStatus === SIGN_UP_FORM ? "" : "d-none";
  const showLoggedIn = authStatus === LOGGED_IN ? "" : "d-none";

  return (
    <Container>
      <div className={showNotLoggedIn + " py-4"}>
        <AuthNotLoggedIn />
      </div>
      <div className={showLoginForm + "  py-4"}>
        <AuthLogin option="login" />
      </div>
      <div className={showSignupForm + " py-4"}>
        <AuthSignup option="signup" />
      </div>
      <div className={showLoggedIn + " py-4"}>
        <AuthLogout />
      </div>
    </Container>
  );
};

export default AuthContainer;
