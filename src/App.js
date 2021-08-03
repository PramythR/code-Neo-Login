import React from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="app">
      <GlobalProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
