import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import Dashboard from "./component/dashboard/Dashboard";
import UserPage from "./component/user/UserPage";
import Navbar from "./component/navbar/Navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/userpage" component={UserPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
