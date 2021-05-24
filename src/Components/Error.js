import React from "react";

const Error = ({error}) => {
  return (
    <div className="error">
      Une erreur est survenue avec le serveur{" "}
      {process.env.REACT_APP_ENVIRONMENT === "dev"
        ? " : " + error.message
        : ""}
    </div>
  );
};

export default Error;
