import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Fold from '../../../components/Fold';
import Row from '../../../components/Row';
import Col from '../../../components/Col';
import Grid from '../../../components/Grid';
import Table from '../../../components/Table';
import Button from '../../../components/Button';
import Icon from '../../../components/Icon';

import { charactersListRequest } from '../../../store/modules/characters/actions';

const header = [
  { dataKey: 'name', name: 'Name', flexGrow: 2 },
  { dataKey: 'height', name: 'Height (cm)', flexGrow: 2 },
  { dataKey: 'mass', name: 'Mass (kg)', flexGrow: 2 },
];

const CharactersDetails = ({ history }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [listData, setListData] = useState([]);

  const {
    charactersList,
  } = useSelector(({ characters }) => characters);

  useEffect(() => {
    const id = location.pathname.split('/');
    const filters = {
      id: id[3]
    };
    dispatch(charactersListRequest(filters));
  }, [location.pathname]);

  useEffect(() => {
    if (Object.keys(charactersList).length > 0) {
      const defaultData = '-----';

      setListData([{
        name: charactersList.name || defaultData,
        height: charactersList.height || defaultData,
        mass: charactersList.mass || defaultData,
      }]);
    }
  }, [charactersList]);

  return (
    <>
      <Fold>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <h2>Find out everything about <br />this character</h2>
          </Col>
        </Row>
      </Fold>
      <Grid className='container'>
        <Row>
          <Col xs={24} sm={24} md={7}>
            <Button
              label={(<> <Icon icon='long-arrow-left' /> Return to a previous page</>)}
              onClick={() => history.push('/characters/')} />
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <Table
              label='Character'
              total={1}
              data={listData}
              header={header}
            />
          </Col>
        </Row>
      </Grid>
    </>
  );
};
export default CharactersDetails;
