import React from "react";

function ContactForm(props) {
  function submitForm(e) {
    e.preventDefault();
    //Send mail
  }

  return (
    <React.Fragment>
      {props.visibility && (
        <div className="modal-parent">
          <div id="modal-children">
            <div className="contact-form">
            <h1>Contact</h1>
              <form action={submitForm}>
                <label htmlFor="name">Nom :</label>
                <input type="text" name="Name" id="name" />
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="objet">Objet :</label>
                <input type="text" name="objet" id="objet" />
                <label htmlFor="message">Message :</label>
                <textarea name="message" id="message" rows="6" />
                <button type="button">Envoyer</button>
              </form>
            </div>
            <div id="adress-recap">
              <ul>
                <li>
                  <span>Icon</span>Phone
                </li>
                <li>
                  <span>Icon</span>Mail
                </li>
                <li>
                  <span>Icon</span>Adresse1
                </li>
                <li>Adresse2</li>
              </ul>
            </div>
            <span id="close-btn" onClick={props.closeModal}>
              X
            </span>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ContactForm;
