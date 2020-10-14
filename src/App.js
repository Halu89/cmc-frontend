import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import Lecons from "./Components/Lecons";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactForm from "./Components/Contact";

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
          <Route exact path="/lecons">
            <Lecons />
          </Route>
        </Switch>
        <Footer openModal={openModal} />
      </BrowserRouter>
      {modalOpen && (
        <ContactForm
          //For debugging
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
