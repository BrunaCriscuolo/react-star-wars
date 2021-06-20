import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'rsuite';
import { useLocation } from 'react-router-dom';

import Button from '../Button';

import { Container } from './styles';
import GlobalStyles from '../../styles/globals';

import history from '../../services/history';

const NavbarCustom = () => {
  const location = useLocation();

  const [label, setLabel] = useState('Your Favorites');
  const [route, setRoute] = useState('/favorites');

  useEffect(() => {
    setLabel('Your Favorites');
    setRoute('/favorites');

    if (location.pathname === '/favorites') {
      setLabel('Characters');
      setRoute('/characters');
    }
  }, [location.pathname]);

  return (
    <Container>
      <Navbar>
        <Navbar.Header>
          <a href='/'>
            <img src={GlobalStyles.images.logo} alt='Logo Star Wars' />
          </a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav pullRight>
            <Button label={label} onClick={() => history.push(route)} />
          </Nav>
        </Navbar.Body>
      </Navbar>
    </Container>

  );
};
export default NavbarCustom;
