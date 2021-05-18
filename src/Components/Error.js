import React from "react";

const Error = ({error}) => {
  return (
    <div className="error">
      An error occured{" "}
      {process.env.REACT_APP_ENVIRONMENT === "dev"
        ? " : " + error.message
        : " :"}
    </div>
  );
};

export default Error;
