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
    this.validate = {
      name: (value) => {
        if (!exists(value)) {
          return `Veuillez indiquer un nom`;
        } else if (!isMinLength(value, 3)) {
          return "Le nom doit faire plus de 3 caractères";
        }
      },
      email: (value) => {
        if (!exists(value)) {
          return "Veuillez indiquer un mail pour la réponse";
        }
        if (!isValidEmail(value)) {
          return "Veuillez utiliser une adress mail valide";
        }
      },
      objet: (value) => {
        if (!exists(value)) {
          return `Veuillez indiquer un objet`;
        }
      },
      message: (value) => {
        if (!exists(value)) {
          return `Veuillez remplir ce champ`;
        }
      },
    };
  }

  handleBlur = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      touched: { ...prevState.touched, [name]: true },
    }));
    this.setState((prevState) => ({
      errors: { ...prevState.errors, [name]: this.validate[name](value) },
    }));
  };

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
    const { values, touched, errors } = this.state;
    return (
      <div className="contact-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Nom :
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              required
            />
            <span>{touched.name && errors.name}</span>
          </label>
          <label htmlFor="email">
            Email :
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              required
            />
            <span>{touched.email && errors.email}</span>
          </label>
          <label htmlFor="objet">
            Objet :
            <input
              type="text"
              name="objet"
              id="objet"
              value={values.objet}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              required
            />
            <span>{touched.objet && errors.objet}</span>
          </label>
          <label htmlFor="message">
            Message :
            <textarea
              name="message"
              id="message"
              value={values.message}
              onChange={this.handleInputChange}
              onBlur={this.handleBlur}
              rows="12"
              cols="40"
              required
            />
            <span>{touched.message && errors.message}</span>
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;

function exists(input) {
  if (input.trim().length > 0) {
    return true;
  }
  return false;
}

function isMinLength(input, min) {
  if (input.length > min) {
    return `${input} doit faire plus de 3 caractères`;
  }
  return false;
}

function isValidEmail(input) {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      input
    )
  ) {
    return `Veuillez utiliser une adresse valide.`;
  }
  return false;
}
