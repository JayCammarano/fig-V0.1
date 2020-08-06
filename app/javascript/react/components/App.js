import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
<<<<<<< HEAD
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

=======
import ArtistIndexContainer from "./artists/index/ArtistIndexContainter";
import ArtistShowPage from "./artists/show/ArtistShowPage";
import ReleaseShowPage from "./releases/show/ReleaseShowPage";
import ArtistNewForm from "./artists/new/ArtistNewForm";
import ReleaseTile from "./releases/ReleaseTile";
import ReleaseNewForm from "./releases/new/ReleaseNewForm";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ArtistIndexContainer} />
        <Route exact path="/artists" component={ArtistIndexContainer} />
        <Route
          exact
          path="/artists/:id/releases/new"
          component={ReleaseNewForm}
        />
        <Route exact path="/artists/new" component={ArtistNewForm} />
        <Route exact path="/artists/:id" component={ArtistShowPage} />
        <Route
          exact
          path="/artists/:artist_id/releases/:id"
          component={ReleaseShowPage}
        />
      </Switch>
    </BrowserRouter>
  );
};
>>>>>>> 4f102d698048680483f9b4995c4bf62e3b2813d6
export default App;
