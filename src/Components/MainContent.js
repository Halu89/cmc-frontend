import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Presentation from "./Presentation";
import Lecons from "./Lecons";
import Actus from "./Actus";
import ContactModal from "./ContactModal";
import NoMatch from "./NoMatch";
import FlashMessage from "./FlashMessage";
import BackToTopButton from "./BackToTopButton";
import { flashTypeEnum } from "./ContactForm";
class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: "",
        email: "",
        objet: "",
        message: "",
      },
      flashMessages: [
        {
          type: flashTypeEnum.disclaimer,
          message: "Site en construction",
          id: 0,
        },
        // { type: flashType.error, message: "Displayng an error message", id: 1 },
      ],
      id: 1,
      isMessageSending: false,
    };
  }
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

  closeFlash = (id) => {
    this.setState({
      flashMessages: this.state.flashMessages.filter((item) => id !== item.id),
    });
  };
  addFlash = (newFlash) => {
    newFlash.id = this.state.id;
    this.setState((prevState) => {
      return {
        flashMessages: [...prevState.flashMessages, newFlash],
        id: prevState.id + 1,
      };
    });
  };

  setMessageSending = (bool) => {
    this.setState({ isMessageSending: bool });
  };

  render() {
    const flashMessages = this.state.flashMessages.map((flash, idx) => (
      <FlashMessage flash={flash} key={idx} closeFlash={this.closeFlash} />
    ));

    return (
      <>
        {this.state.flashMessages.length > 0 && flashMessages}
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
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        {this.props.isModalOpen && (
          <ContactModal
            closeModal={this.props.closeModal}
            resetForm={this.resetForm}
            onChange={this.handleInputChange}
            formData={this.state.formData}
            addFlash={this.addFlash}
            isMessageSending={this.state.isMessageSending}
            setMessageSending={this.setMessageSending}
            removePreviousFlash={() => this.closeFlash(this.state.id - 1)}
          />
        )}
        {!this.props.isModalOpen && <BackToTopButton />}
      </>
    );
  }
}

export default MainContent;
