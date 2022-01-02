import * as React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
======
>>>>>>> 01bb6a8204ab9db7f826311814883ce0b98b5c24
=======
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
>>>>>>> f89aff833af2169d1d0b675269b6adb0a5447eb2
import Navbar from "./components/Navbar";
import HomePage from "./components/Home/HomePage";
import About from "./components/Home/About";
import LoginPage from "./components/Registeration/LoginPage";
import RegistrationNavBar from "./components/Registeration/RegistrationNavBar";
import SignUp from "./components/Registeration/SignUpPage";
import { useHistory } from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import Tips from "./components/TipsPage/Tips";

function App() {
  let history = useHistory();


  return (
    // <Profile/>
    // <Tips/>
    <div style={{ backgroundColor: "black" }}>
       <Navbar  history={history}  /> 
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/Registration">
              <RegistrationNavBar history={history}/>
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
