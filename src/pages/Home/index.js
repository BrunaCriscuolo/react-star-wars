import React from 'react';

import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';

import {
  Container,
  Image
} from './styles';

import GlobalStyles from '../../styles/globals';

const Home = ({ history }) => {

  const goTo = () => {
    history.push('/characters');
  };

  return (
    <Container>
      <Grid className='container'>
        <Row>
          <div>
            <Col xs={24} sm={24} md={12}>
              <h3>Welcome!</h3>
              <h1>Join the dark side</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum accusantium dolorem repudiandae ut porro aliquid, saepe reiciendis beatae natus molestiae modi temporibus molestias unde. In quibusdam officia quia incidunt molestias.</p>
              <button onClick={goTo} type='button'>Start here!</button>
            </Col>
          </div>

          <Col xs={24} sm={24} md={12}>
            <Image src={GlobalStyles.images.darthVader} alt='Darth Vader' />
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};
export default Home;
