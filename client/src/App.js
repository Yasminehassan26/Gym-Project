import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./components/Home/HomePage";
import About from "./components/Home/About";
import LoginPage from "./components/Registeration/LoginPage";
import RegistrationNavBar from "./components/Registeration/RegistrationNavBar";
import SideProfile from "./components/Profile/SideProfile";
import SignUp from "./components/Registeration/SignUpPage";
import { useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();


  return (
    
    <div style={{ backgroundColor: "black" }}>
       <Navbar  history={history}  /> 
 
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/Registration">
              <RegistrationNavBar />
            </Route>
            <Route path="/SignUp">
              <SignUp/>
            </Route>
            <Route path="/SignIn">
              <LoginPage />
            </Route>
          </Switch>


         
    
  
 
      </div>
  );
}

export default App;
