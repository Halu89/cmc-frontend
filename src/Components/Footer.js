import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div id="adress">
        <ul>
          <li>🏠 Adresse: Centre Musical Collois</li>
          <li>chez Mme Brigitte Thérias</li>
          <li>131, chemin du Béal</li>
          <li>06480 - La Colle sur Loup</li>
        </ul>
      </div>
      <button onClick={() => props.openModal()}>Message 📧</button>
      <ul>
        <li>📞 Telephone : +33 6 62 91 02 71</li>
        <li>📧 Email : ecolemusiquecmc.collesurloup@gmail.com</li>
      </ul>
    </footer>
  );
};

export default Footer;
