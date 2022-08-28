import logo from './logo.svg';
import './App.css';

import { AppProvider } from "./contexts/AppContext";
import AuthContainer from "./components/AuthContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
        <AppProvider>
          <div className="App">
          {/* <Route path="/" element={<AuthContainer />} /> */}
          <AuthContainer />
          </div>
        </AppProvider>
      // {/* </Routes>
    // </BrowserRouter> */}
  );
}

export default App;
