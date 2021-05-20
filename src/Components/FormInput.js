import React from "react";
// Not working

const FormInput = ({ name, label, value, formLogic }) => {
  const { handleChange, onBlur, touched, errors } = formLogic;
  return (
    <label htmlFor={`"${name}"`}>
      {label}
      <input
        type={name === "email" ? "email" : "text"}
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        required
      />
      <span>{touched[name] && errors[name]}</span>
    </label>
  );
};

export default FormInput;
