import React from 'react';
import { Icon } from 'rsuite';

import { Container } from './styles';

const IconCustom = ({
  icon,
  onClick,
}) => (
  <Container>
    <Icon icon={icon} onClick={onClick} />
  </Container>
);
export default IconCustom;
