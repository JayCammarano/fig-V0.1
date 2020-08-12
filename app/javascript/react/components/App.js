import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ArtistIndexContainer from "./artists/index/ArtistIndexContainter";
import ArtistShowPage from "./artists/show/ArtistShowPage";
import ReleaseShowPage from "./releases/show/ReleaseShowPage";
import ArtistNewForm from "./artists/new/ArtistNewForm";
import ReleaseTile from "./releases/ReleaseTile";
import ReleaseNewForm from "./releases/new/ReleaseNewForm";
import ArtistUpdateContainer from "./artists/update/ArtistUpdateContainer";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import ReleaseUpdatePage from "./releases/update/ReleaseUpdatePage";
import Cookies from "js-cookie"
export const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Cookies.get("auth.user") !== undefined
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          component={() => (
            <Login
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
              client={props.client}
            />
          )}
        />
        <Route
          exact
          path="/"
          component={() => <ArtistIndexContainer/>}
        />
        <Route
          path="/signup"
          component={() => <SignUp client={props.client} />}
        />

        <Route
          exact
          path="/artists"
          component={() => <ArtistIndexContainer setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn} client={props.client} />}
        />
        <Route
          exact
          path="/artists/:id/releases/new"
          component={ReleaseNewForm}
        />
                <Route
          exact
          path="/artists/:id/update"
          component={ArtistUpdateContainer}
        />

        <Route exact path="/artists/new" component={ArtistNewForm} />
        <Route exact path="/artists/:id" component={ArtistShowPage} />
        <Route
          exact
          path="/artists/:artist_id/releases/:id"
          component={ReleaseShowPage}
        />
        <Route
          exact
          path="/artists/:artist_id/releases/:id/update"
          component={ReleaseUpdatePage}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
