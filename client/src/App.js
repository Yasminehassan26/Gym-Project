import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home/HomePage";
import About from "./components/Home/About";
import LoginPage from "./components/Registeration/LoginPage";
import RegistrationNavBar from "./components/Registeration/RegistrationNavBar";
import SignUp from "./components/Registeration/SignUpPage";
import { useHistory } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import AllPrograms from "./components/Programs/AllPrograms";
import AllSessions from "./components/Sessions/AllSessions";
import AllTips from "./components/Tips/TipsNavigator";
import ShopCard from "./components/Shop/ShopCard"
import AllTrainers from "./components/Trainer/AllTrainers";
import {ReactSession} from 'react-client-session';
import Shop from "./components/Shop/ShopNavigator";
import Cart from "./components/Shop/Cart";
function App() {
  let history = useHistory();
  ReactSession.setStoreType("sessionStorage");

  return (
    <div style={{ backgroundColor: "black" }}>

      <Switch>
        <Route exact path="/">
          <HomePage history={history} />
        </Route>
        <Route path="/Registration">
          <RegistrationNavBar history={history} />
        </Route>
        <Route path="/AllPrograms">
          <AllPrograms history={history} />
        </Route>
        <Route path="/AllSessions">
          <AllSessions history={history} />
        </Route>
        <Route path="/AllTips">
          <AllTips history={history} />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Trainers">
          <AllTrainers history={history} />
        </Route>
        <Route path="/Shop">
          <Shop history={history} />
        </Route>
        <Route path="/SignIn">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
