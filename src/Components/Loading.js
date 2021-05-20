import React from "react";

const Loading = () => {
  return (
    <div className="loading">
      <p className="loading__text">Chargement</p>
      <LoadingSpinner scale={0.5} />
    </div>
  );
};

const LoadingSpinner = ({ scale }) => {
  return (
    <div className="lds-roller" style={{ transform: `scale(${scale})` }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { LoadingSpinner };
export default Loading;
