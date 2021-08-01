import React, { createContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/logout";
import Errorpage from "./components/Errorpage";
import Twitter from "./components/Twitter";
// import Googles from "./components/Googles";


// import { initialState, reducer } from "./reducer/UseReducer";
import { initialState, reducer } from "../src/reducer/UseReducer";
import Ghome from "./components/Googles";
import Gsearch from "./components/gsearch";

//context
export const UserContext = createContext();

export const Routing = () => {
  return (
    <Switch>
      <Route exact   path="/">
        <Home />
      </Route>

      <Route  exact path="/About">
        <About />
      </Route>

      <Route  exact path="/Contact">
        <Contact />
      </Route>

      <Route  exact path="/Login">
        <Login />
      </Route>

      <Route  exact path="/Signup">
        <Signup />
      </Route>
      <Route  exact path="/Googles">
        <Ghome />
      </Route>
      <Route  exact path="/gsearch">
        <Gsearch />
      </Route>

      <Route  exact path="/Twitter">
        <Twitter />
      </Route>
      <Route  exact path="/logout">
        <Logout />
      </Route>

      <Route>
        <Errorpage />
      </Route>
    </Switch>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};
export default App;
