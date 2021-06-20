import React from 'react';

import { TextField } from './styles';

const Input = ({
  type,
  placeholder,
  name,
  onChange,
  value,
  className,
}) => (
  <TextField
    name={name}
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    value={value}
    className={className}
  />
);
export default Input;
