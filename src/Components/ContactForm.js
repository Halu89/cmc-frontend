import React, { Component } from "react";

import FormInput from "./FormInput";
import { validate, createFetchOptions } from "../utils";

export const flashTypeEnum = {
  success: "success",
  error: "error",
  loading: "loading",
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: {},
      errors: {},
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
      errors: { ...prevState.errors, [name]: validate[name](value) },
    }));
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;

    //Change parent state in App component
    this.props.onChange(e);
    //Set field touched
    this.setState((prevState) => ({
      touched: { ...prevState.touched, [name]: value },
    }));
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, objet, message } = this.props.formData;
    // Block the submition
    //if form unvalid
    const { errors } = this.state;
    for (const err in errors) {
      if (errors[err]) return;
    }
    //or if message already sending
    if (this.props.isMessageSending) return;

    //Display a loading message while mail is sending
    // TODO : Add a loading spinner
    this.props.addFlash({
      type: flashTypeEnum.loading,
      message: "Envoi du message en cours",
    });
    this.props.setMessageSending(true);
    this.props.closeModal();

    // Send the form
    fetch(
      process.env.REACT_APP_MAIL_API_URI,
      // "https://zefzefkjbjhbjhreergre.com", // For testing error message
      createFetchOptions(name, email, objet, message)
    )
      .then((sentMail) => {
        this.props.removePreviousFlash();
        this.props.setMessageSending(false);

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
        // Display a confirmation message
        this.props.addFlash({
          type: flashTypeEnum.success,
          message: "Merci pour votre message ❤",
        });
        console.log("Message sent");
      })
      .catch((e) => {
        this.props.removePreviousFlash();
        this.props.setMessageSending(false);

        //Display an error message
        this.props.addFlash({
          type: flashTypeEnum.error,
          message:
            process.env.REACT_APP_ENVIRONMENT === "dev"
              ? "Error : " + e.message
              : "Désolé, une erreur est survenue",
        });
      });
  };

  render() {
    const { touched, errors } = this.state;
    const values = this.props.formData;
    const formLogic = {
      handleChange: this.handleInputChange,
      onBlur: this.handleBlur,
      touched,
      errors,
    };
    return (
      <div className="contact-form">
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Nom :"
            name="name"
            value={values.name}
            formLogic={formLogic}
          />
          <FormInput
            label="Email :"
            name="email"
            value={values.email}
            formLogic={formLogic}
          />
          <FormInput
            label="Objet :"
            name="objet"
            value={values.objet}
            formLogic={formLogic}
          />
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
              autoComplete="off"
              spellCheck="true"
              style={values.message ? { borderColor: "green" } : {}}
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
