import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      objet: "",
      message: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //Validate the form

    //Send the form

    //Close the modal
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="contact-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleInputChange}
          />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.handleInputChange}
          />
          <label htmlFor="objet">Objet :</label>
          <input
            type="text"
            name="objet"
            id="objet"
            onChange={this.handleInputChange}
          />
          <label htmlFor="message">Message :</label>
          <textarea
            name="message"
            id="message"
            onChange={this.handleInputChange}
            rows="12"
            cols="40"
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
