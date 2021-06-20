import React from 'react';

import Row from '../Row';
import Col from '../Col';

import { Container } from './styles';

const Footer = () => (
  <Container>
    <Row>
      <Col xs={12} sm={12} md={12}>
        <span>Data provided by Star Wars. © 2021 Star Wars</span>
      </Col>
      <Col xs={12} sm={12} md={12} className='footter__text-align'>
        <span>Developed by Bruna Magalhães.</span>
      </Col>
    </Row>
  </Container>
);

export default Footer;
