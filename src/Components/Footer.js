import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div id="adress">
        <ul>
          <li>🏠&nbsp;Adresse&nbsp;: Centre Musical Collois</li>
          <li>chez Mme Brigitte Thérias</li>
          <li>131, chemin du Béal</li>
          <li>06480 - La Colle sur Loup</li>
        </ul>
      </div>
      <button onClick={() => props.openModal()}>Message&nbsp;📧</button>
      <div id="footer-contact">
        <ul>
          <li>📞&nbsp;Téléphone&nbsp;: +33 6 62 91 02 71</li>
          <li>📧&nbsp;Email&nbsp;: ecolemusiquecmc.collesurloup@gmail.com</li>
        </ul>
      </div>
      <div id="footer-copyright">
        &copy; Corentin Briand 2021
      </div>
    </footer>
  );
};

export default Footer;
