import React, { useEffect,useState } from "react";
import axios from "axios";
import {
  NOT_LOGGED_IN,
  LOG_IN_FORM,
  SIGN_UP_FORM,
  LOGGED_IN,
} from "../constants/AuthStatus";

const AppContext = React.createContext();

const AppProvider = (props) => {
  let hostName = "";
  if (process.env.NODE_ENV === "development") {
    hostName = "http://localhost:8000/";
  } else if (process.env.NODE_ENV === "production") {
    hostName = "http://localhost:8000/";
  }


  
  const [authStatus, setAuthStatus] = useState(NOT_LOGGED_IN);
  const [token, setToken] = useState("");
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.defaults.headers.post['Content-Type'] ='application/json';
    axios.defaults.headers.post['Accept'] ='application/json';
    
    if(localStorage.getItem('User_Token')!==null){
      
      setAuthStatus(LOGGED_IN);
      setToken(localStorage.getItem('User_Token'))
      if(localStorage.getItem('User_data')===null)
      {
        axios.defaults.headers.post['Authorization'] =`Bearer ${token}`;
        axios.post(hostName + "api/me").then(
          (response) => {
          console.log(response);
          });
      }
      let user_data = JSON.parse(localStorage.getItem('User_data'));
      setUserId(user_data.id);
      setUserName(user_data.name);
      setErrorMessage("");
      setAuthStatus(LOGGED_IN);
    }
  }, []);

  const [errorMessage, setErrorMessage] = useState("");
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  

  function changeAuthStatusLogin() {
    setAuthStatus(LOG_IN_FORM);
  }

  function changeAuthStatusSignup() {
    setAuthStatus(SIGN_UP_FORM);
  }

  function handleUserNameInput(changeEvent) {
    let updatedUserName = changeEvent.target.value;
    setUserNameInput(updatedUserName);
  }

  function handleUserEmail(changeEvent) {
    let updatedUserEmail = changeEvent.target.value;
    setUserEmail(updatedUserEmail);
  }

  function handleUserPassword(changeEvent) {
    let updatedUserPassword = changeEvent.target.value;
    setUserPassword(updatedUserPassword);
  }

  const signup = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.defaults.headers.post['Content-Type'] ='application/json';
    axios.defaults.headers.post['Accept'] ='application/json';
    axios.defaults.withCredentials = true;
    // CSRF COOKIE
    axios.get(hostName + "sanctum/csrf-cookie").then(
      (response) => {
        //console.log(response);
        // SIGNUP / REGISTER
        axios
          .post(hostName + "api/register", {
            name: userNameInput,
            email: userEmail,
            password: userPassword,
          })
          .then(
            (response) => {
              console.log("User_Token",response.data);
              localStorage.setItem("User_Token", JSON.stringify(response.data.access_token));
              setToken(localStorage.getItem("User_Token"));
              localStorage.setItem("User_data", JSON.stringify(response.data.user));
              // GET USER
              axios.get(hostName + "api/user").then(
                (response) => {
                  // console.log("lll",response);
                  
                  setUserId(response.data.id);
                  setUserName(response.data.name);
                  setErrorMessage("");
                  setAuthStatus(LOGGED_IN);
                },
                // GET USER ERROR
                (error) => {
                  setErrorMessage("get user error : could not complete the sign up");
                }
              );
            },
            // SIGNUP ERROR
            (error) => {
              console.log(error.response.data)
              // if (error.response.data.errors.name) {
              //   setErrorMessage(error.response.data.errors.name[0]);
              // } else if (error.response.data.errors.email) {
              //   setErrorMessage(error.response.data.errors.email[0]);
              // } else if (error.response.data.errors.password) {
              //   setErrorMessage(error.response.data.errors.password[0]);
              // } else if (error.response.data.message) {
              //   setErrorMessage(error.response.data.message);
              // } else {
              //   setErrorMessage("set user error : Could not complete the sign up");
              // }
            }
          );
      },
      // COOKIE ERROR
      (error) => {
        setErrorMessage("Could not complete the sign up");
      }
    );
  };

  const login = (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    axios.defaults.headers.post['Content-Type'] ='application/json';
    axios.defaults.headers.post['Accept'] ='application/json';
    
    // CSRF COOKIE
    // console.log("jjjjj");
    axios.get(hostName + "sanctum/csrf-cookie").then(
      (response) => {
        console.warn('first:',response.data);
        // LOGIN
        axios.post(hostName + "api/login", {
            email: userEmail,
            password: userPassword,
            // xsrfHeaderName:"X-XSRF-TOKEN"
          })
          .then(
            (response) => {
              console.log("sec",response);
              // localStorage.setItem("User_Data", JSON.stringify(response.data));
              setToken(JSON.stringify(response.data.access_token));
              localStorage.setItem("User_Token", token);
              localStorage.setItem("User_data", JSON.stringify(response.data.user));
              
               // GET USER
              axios.get(hostName + "api/user").then(
                (response) => {
                  console.log("third",response);
                  setUserId(response.data.id);
                  setUserName(response.data.name);
                  setErrorMessage("");
                  setAuthStatus(LOGGED_IN);
                },
                // GET USER ERROR
                (error) => {
                  setErrorMessage("Could not complete the login");
                }
              );
            },
             // LOGIN ERROR
            (error) => {
              if (error.response) {
                setErrorMessage(error.response.data.message);
              } else {
                setErrorMessage("Could not complete the login");
              }
            }
          );
      },
      // COOKIE ERROR
      (error) => {
        setErrorMessage("Could not complete the login");
      }
    );
  };

  function logout() {
    axios.defaults.withCredentials = true;
    axios.defaults.headers.post['Content-Type'] ='application/json';
    axios.defaults.headers.post['Accept'] ='application/json';
    axios.defaults.headers.post['Authorization'] =`Bearer ${token}`;
    axios.post(hostName + "api/logout").then(
      (response) => {
      // console.log(response);
      // });
    localStorage.clear();
    setUserId(0);
    setUserName("");
    setUserNameInput("");
    setUserEmail("");
    setUserPassword("");
    setAuthStatus(NOT_LOGGED_IN);
      });
  }

  return (
    <AppContext.Provider
      value={{
        authStatus,
        changeAuthStatusLogin,
        changeAuthStatusSignup,
        userId,
        userName,
        userNameInput,
        userEmail,
        userPassword,
        handleUserNameInput,
        handleUserEmail,
        handleUserPassword,
        signup,
        login,
        logout,
        errorMessage,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
