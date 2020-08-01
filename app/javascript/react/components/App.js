import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./global/navbar/NavBarContainer";

export const App = (props) => {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NavBar} />
      </Switch>
    </BrowserRouter>
    </div>
  );
};

export default App;
