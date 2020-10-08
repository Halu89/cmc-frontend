import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div id="adress"> Adresse</div>
      <button onClick={() => props.openModal()}>Contact</button>
      <ul>
        <li>Telephone :</li>
        <li>Email :</li>
      </ul>
    </footer>
  );
};

export default Footer;
