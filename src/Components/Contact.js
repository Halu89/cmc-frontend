import React, { useCallback, useEffect, useRef } from "react";

function ContactForm(props) {
  const modal = useRef(null);

  const escapeListener = useCallback((e) => {
    if (e.key === "Escape") {
      props.closeModal();
    }
  });

  const clickListener = useCallback(
    (e) => {
      if (!modal.current.contains(e.target)) {
        props.closeModal();
      }
    },
    [props]
  );

  useEffect(() => {
    document.addEventListener("click", clickListener);
    document.addEventListener("keyup", escapeListener);
    return () => {
      document.removeEventListener("click", clickListener);
      document.removeEventListener("keyup", escapeListener);
    };
  });

  function submitForm(e) {
    e.preventDefault();
    //Send mail
  }

  return (
    <React.Fragment>
      <div className="modal-parent">
        <div id="modal-children" ref={modal}>
          <h1>Contact</h1>
          <div className="contact-form">
            <form action={submitForm}>
              <label htmlFor="name">Nom :</label>
              <input type="text" name="Name" id="name" />
              <label htmlFor="email">Email :</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="objet">Objet :</label>
              <input type="text" name="objet" id="objet" />
              <label htmlFor="message">Message :</label>
              <textarea name="message" id="message" rows="12" cols="40" />
              <button type="button">Envoyer</button>
            </form>
          </div>
          <div id="adress-recap">
            <ul>
              <li>📞&nbsp;+33 6 62 91 02 71</li>
              <li style={{ fontSize: ".8em" }}>
                📧&nbsp;ecolemusiquecmc.collesurloup@gmail.com
              </li>
              <li>🏠&nbsp;Centre Musical Collois</li>
              <li>chez Mme Brigitte Thérias</li>
              <li>131, chemin du Béal</li>
              <li>06480 - La Colle sur Loup</li>
            </ul>
          </div>
          <span id="close-btn" onClick={props.closeModal}>
            X
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactForm;
