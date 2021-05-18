import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <p className="loading__text">Chargement</p>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
