import React from "react";
// Not working

const FormInput = ({
  name,
  handleChange,
  onBlur,
  label,
  values,
  touched,
  errors,
}) => {
  return (
    <label htmlFor={`"${name}"`}>
      {label}
      <input
        type={name === "email" ? "email" : "text"}
        name={`"${name}"`}
        id={`"${name}"`}
        value={values[name]}
        onChange={(e) => {
          handleChange(e);
          console.log(values);
        }}
        onBlur={onBlur}
        required
      />
      <span>{touched[name] && errors[name]}</span>
    </label>
  );
};

export default FormInput;
