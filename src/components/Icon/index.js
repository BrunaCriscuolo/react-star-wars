import React from 'react';
import { Icon } from 'rsuite';

import { Container } from './styles';

const IconCustom = ({
  icon,
  onClick,
  spin = false,
  disabled = false,
  fontSize,
}) => (
  <Container className={disabled ? 'disabled' : ''} fontSize={fontSize}>
    <Icon icon={icon} onClick={onClick} spin={spin} />
  </Container>
);
export default IconCustom;










