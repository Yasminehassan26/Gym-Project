import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home/HomePage";
import About from "./components/Home/About";
import LoginPage from "./components/Registeration/LoginPage";
import RegistrationNavBar from "./components/Registeration/RegistrationNavBar";
import SignUp from "./components/Registeration/SignUpPage";
import { useHistory } from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import AllPrograms from "./components/Program/AllPrograms";
import AllSessions from "./components/Session/AllSessions";
import TipNavigator from "./components/Tips/TipsNavigator";

function App() {
  let history = useHistory();


  return (
    // <Profile/>
    // <Tips/>
    <div style={{
     width : '100%' , height : '100%' }}>
       <Navbar  history={history}  /> 
          {/* <Switch>
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
          </Switch> */}
          <AllPrograms/>
          {/* <AllSessions/> */}
          {/* <TipNavigator/> */}

 
       </div>
  );
}

export default App;
