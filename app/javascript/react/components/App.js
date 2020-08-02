import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ArtistIndexContainer from "./artists/index/ArtistIndexContainter"

export const App = (props) => {
  return(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={ArtistIndexContainer} />
    <Route exact path="/artists" component={ArtistIndexContainer} />
  </Switch>
</BrowserRouter>)
}
export default App
