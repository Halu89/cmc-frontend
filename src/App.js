import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import Lecons from "./Components/Lecons";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Presentation />
          </Route>
          <Route exact path="/lecons">
            <Lecons />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
