import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Presentation from "./Components/Presentation";
import Lecons from "./Components/Lecons";
import Actus from "./Components/Actus";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContactModal from "./Components/ContactModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: { name: "egtrhzf", email: "email@gmail.com", objet: "ezf", message: "zef" },
      isModalOpen: true,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };
  resetForm = () => {
    this.setState({
      formData: { name: "", email: "", objet: "", message: "" },
    });
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header openModal={this.openModal} />
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
          <Footer openModal={this.openModal} />
          {this.state.isModalOpen && (
            <ContactModal
              formData={this.state.formData}
              closeModal={this.closeModal}
              onChange={this.handleInputChange}
              resetForm={this.resetForm}
            />
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
