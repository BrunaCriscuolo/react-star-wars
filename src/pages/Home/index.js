import React from 'react';

import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Button from '../../components/Button';

import {
  Container,
  Image
} from './styles';

import GlobalStyles from '../../styles/globals';

const Home = ({ history }) => (
  <Container>
    <Grid className='container'>
      <Row>
        <Col xs={24} sm={24} md={12} className='mt-7 home-padding'>
          <h3>Welcome!</h3>
          <h1>Join the dark side</h1>
          <p>I am your father. Search your feelings, you know it to be true! Join me, and together we can rule the galaxy as father and son. It is the only way.</p>

          <Col xs={24} sm={24} md={9} lg={7}>
            <Button
              label='Start here!'
              onClick={() => history.push('/characters')}
            />
          </Col>
        </Col>

        <Col xs={24} sm={24} md={12}>
          <Image src={GlobalStyles.images.darthVader} alt='Darth Vader' />
        </Col>
      </Row>
    </Grid>
  </Container>
);
export default Home;
