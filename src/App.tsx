import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import "./other.css";
import {Home} from "./components/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
