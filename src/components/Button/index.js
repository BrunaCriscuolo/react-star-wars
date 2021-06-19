import React from 'react';

import { ButtonCustom } from './styles';

const Button = ({
  appearance = 'btn__default',
  label,
  type = 'button',
  onClick,
}) => (

  <ButtonCustom
    appearance={appearance}
    onClick={onClick}
    type={type}
  >
    {label}
  </ButtonCustom>
);
export default Button;
