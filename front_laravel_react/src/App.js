import logo from './logo.svg';
import './App.css';

import { AppProvider } from "./contexts/AppContext";
import AuthContainer from "./components/auth/AuthContainer";
import Header from './components/header/Header';

<link href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-Variable-font-face.css" rel="stylesheet" type="text/css" />

function App() {
  return (

    <AppProvider>
      <div className="App">
          {/* <Route path="/" element={<AuthContainer />} /> */}
          <AuthContainer/>
      </div>
    </AppProvider>
    //
  );
}

export default App;
