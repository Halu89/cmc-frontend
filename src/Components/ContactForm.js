import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: "",
        email: "",
        objet: "",
        message: "",
      },
      touched: {},
      errors: {},
    };
  }

  handleBlur = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      touched: { ...prevState.touched, [name]: true },
    }));
  };

  validate = {};
  handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form

    // Send the form

    // Reset state
    // Close the modal
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => ({
      values: { ...prevState.values, [name]: value },
      touched: { ...prevState.touched, [name]: true },
    }));
  };

  render() {
    return (
      <div className="contact-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Nom :
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              required
            />
            <span></span>
          </label>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
            required
          />
          <label htmlFor="objet">Objet :</label>
          <input
            type="text"
            name="objet"
            id="objet"
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
            required
          />
          <label htmlFor="message">Message :</label>
          <textarea
            name="message"
            id="message"
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
            rows="12"
            cols="40"
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
