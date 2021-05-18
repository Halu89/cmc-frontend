import React, { Component } from "react";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.formData,
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
    // Set field touched
    this.setState((prevState) => ({
      touched: { ...prevState.touched, [name]: true },
    }));
    // Validate the input
    this.setState((prevState) => ({
      errors: { ...prevState.errors, [name]: this.validate[name](value) },
    }));
  };
  handleInputChange = (e) => {
    const { fieldName } = e.target;

    //Change parent state in App component
    this.props.onChange(e);

    //Set field touched
    this.setState((prevState) => ({
      touched: { ...prevState.touched, [fieldName]: true },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, objet, message } = this.props.formData;
    // Block the submition if form unvalid
    const { errors } = this.state;
    for (const err in errors) {
      if (errors[err]) return;
    }
    // Send the form
    fetch(
      process.env.REACT_APP_MAIL_API_URI,
      createFetchOptions(name, email, objet, message)
    )
      .then((sentMail) => {
        // Verify that the request worked
        if (!sentMail.ok)
          throw new Error(
            sentMail.statusText
              ? sentMail.statusText
              : `We couldn't send the mail`
          );
      })
      .then(() => {
        // If successful
        this.props.resetForm();
        this.props.closeModal();

        // Display a confirmation message
        console.log("Message sent")
        //TODO
      })
      .catch((e) =>
        //Display an error message
        //TODO
        console.log(e)
      );
  };

  render() {
    const { touched, errors } = this.state;
    const values = this.props.formData;
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

function createFetchOptions(name, email, object, message) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  // Create the body of the x-www-form-urlencoded form
  var urlencoded = new URLSearchParams();
  urlencoded.append("message", constructMail(name, email, object, message));
  urlencoded.append("emailAddress", email);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  return requestOptions;
}

function constructMail(name, email, objet, message) {
  return `
  Nouveau message de ${name}(${email})
<br>
  Objet : ${objet}
<br>
---------------------------
<br>
  Message: 
  <br>
  ${message}
  `;
}
