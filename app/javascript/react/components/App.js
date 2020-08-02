import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ArtistIndexContainer from "./artists/index/ArtistIndexContainter";
import ArtistShowPage from "./artists/show/ArtistShowPage";
import ReleaseShowPage from "./releases/show/ReleaseShowPage"
export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/artists/:artist_id/releases/:id"
          component={ReleaseShowPage}
        />
        <Route exact path="/" component={ArtistIndexContainer} />
        <Route exact path="/artists" component={ArtistIndexContainer} />
        <Route exact path="/artists/:id" component={ArtistShowPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
