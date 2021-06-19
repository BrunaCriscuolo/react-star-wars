import React from 'react';
import { Navbar, Nav } from 'rsuite';

import Button from '../Button';

import { Container } from './styles';
import GlobalStyles from '../../styles/globals';

const NavbarCustom = () => (
  <Container>
    <Navbar>
      <Navbar.Header>
        <a href='/'>
          <img src={GlobalStyles.images.logo} alt='Logo Star Wars' />
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav pullRight>
          <Button label='Your Favorites' />
        </Nav>
      </Navbar.Body>
    </Navbar>
  </Container>

);
export default NavbarCustom;
