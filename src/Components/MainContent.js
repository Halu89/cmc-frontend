import React from "react";
import { Switch, Route } from "react-router-dom";

import Presentation from "./Presentation";
import Lecons from "./Lecons";
import Actus from "./Actus";
import ContactModal from "./ContactModal";

const MainContent = (props) => {
  return (
    <>
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
      {props.isModalOpen && <ContactModal {...props} />}
    </>
  );
};

export default MainContent;
