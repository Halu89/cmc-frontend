import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import Lecons from "./Components/Lecons";
import Actus from "./Components/Actus";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactModal from "./Components/ContactModal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Presentation />
          </Route>
          <Route exact path="/actus">
            <Actus />
          </Route>
          <Route exact path="/lecons">
            <Lecons />
          </Route>
        </Switch>
        <Footer openModal={openModal} />
        {modalOpen && <ContactModal closeModal={closeModal} />}
      </BrowserRouter>
    </div>
  );
}

export default App;
