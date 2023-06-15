import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Stock from "./pages/Stock/index.jsx"
import Shop from "./pages/Shop/index.jsx"

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Stock/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
