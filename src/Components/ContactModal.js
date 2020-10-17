import React, { useCallback, useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

function ContactModal(props) {
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
          <ContactForm submitForm={submitForm}/>
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

export default ContactModal;
