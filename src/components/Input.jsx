import React from "react";
import '../sass/flames.scss'
import { TextField } from "@material-ui/core";

const Input = ({
  label,
  name,
  placeholder,
  className,
  color,
  formik,
}) => {
  return (
    <TextField
      label={label}
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={formik.handleChange}
      value={formik.values[name]}
      onBlur={formik.handleBlur}
      color={color}
      className={className}
    />
  );
};

export default Input;
