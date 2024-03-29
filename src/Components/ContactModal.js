import React, { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

function ContactModal(props) {
  const modal = useRef(null);
  const { closeModal } = props;

  useEffect(() => {
    // Close Modal on escape press
    const escapeListener = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keyup", escapeListener);
    return () => {
      document.removeEventListener("keyup", escapeListener);
    };
  }, [closeModal]);

  useEffect(() => {
    // To close modal on click outside
    const clickListener = (e) => {
      // Optional chaining : current can be null if we click on the close button
      if (!modal.current?.contains(e.target)) {
        closeModal();
      }
    };

    document.addEventListener("click", clickListener);
    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [closeModal]);

  return (
    <React.Fragment>
      <div className="modal-parent">
        <div id="modal-children" ref={modal}>
          <h1>Contact</h1>
          <ContactForm {...props} />
          <AdressRecap />
          <button
            id="close-btn"
            className="close-btn"
            onClick={props.closeModal}
          >
            X
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

const AdressRecap = () => {
  return (
    <div id="adress-recap">
      <ul>
        <li>
          <span role="img" aria-label="phone">
            📞
          </span>
          &nbsp;+33 6 62 91 02 71
        </li>
        <li>
          <span role="img" aria-label="mail">
            📧
          </span>
          &nbsp;ecolemusiquecmc.collesurloup@gmail.com
        </li>
        <li>
          <span role="img" aria-label="house">
            🏠
          </span>
          &nbsp;Centre Musical Collois
        </li>
        <li>chez Mme Brigitte Thérias</li>
        <li>131, chemin du Béal</li>
        <li>06480 - La Colle sur Loup</li>
      </ul>
    </div>
  );
};

export default ContactModal;
