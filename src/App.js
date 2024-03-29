import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeView from "./components/HomeView/HomeView";
import AboutView from "./components/AboutView/AboutView";
import GalleryView from "./components/GalleryView/GalleryView";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/about-us">
            <AboutView />
          </Route>
          <Route exact path="/gallery">
            <GalleryView />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
