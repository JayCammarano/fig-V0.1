import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ArtistIndexContainer from "./artists/index/ArtistIndexContainter";
import ArtistShowPage from "./artists/show/ArtistShowPage";
export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ArtistIndexContainer} />
        <Route exact path="/artists" component={ArtistIndexContainer} />
        <Route exact path="/artists/:id" component={ArtistShowPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
