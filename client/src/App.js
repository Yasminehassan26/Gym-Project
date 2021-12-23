
import {Route } from "react-router-dom";

import Navbar from './components/Navbar';
import HomePage from "./components/Home/HomePage";
import SignUpPage from "./components/Registeration/SignUpPage"
function App() {
  return (

    <div >
        <div>

      <Navbar/>
      {/* <HomePage/> */}
    <SignUpPage/>
        </div>
      </div>
      
      
     );
}

export default App;
