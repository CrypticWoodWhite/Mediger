import React from "react";

import { Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Profile from "./components/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";
import PatientList from "./pages/PatientList";
import CreateRoom from"./pages/CreateRoom.js";
import CompanyInfo from"./pages/CompanyInfo"; 
import FrontDesk from"./pages/FrontDesk";
import Notes from"./pages/Notes";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    console.log("LOADING")
    return <Loading />;
  }

  return (
    
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
    
       
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/Admin" exact component={Admin} />
            <PrivateRoute path="/Profile" exact component={Profile} />
            <PrivateRoute path="/PatientList" exact component={PatientList} />
            <PrivateRoute path="/CreateRoom" exact component={CreateRoom} />
            <PrivateRoute path="/CompanyInfo" exact component={CompanyInfo} />
            <PrivateRoute path="/FrontDesk" exact component={FrontDesk} />
            <PrivateRoute path="/Notes/:id" exact component={Notes} />
          </Switch>
    
       
      </div>
    </Router>
  );
};

export default App;
