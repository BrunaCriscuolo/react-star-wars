import React, { useEffect, useState } from 'react';

import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Table from '../../components/Table';
import Tooltip from '../../components/Tooltip';
import Icon from '../../components/Icon';
import Fold from '../../components/Fold';

const header = [
  { dataKey: 'name', name: 'Name', flexGrow: 2 },
];

const Favorites = () => {
  const [totalResults, setTotalResults] = useState(0);
  const [listFavorites, setListFavorites] = useState([]);

  useEffect(() => {
    let list = localStorage.getItem('listFavorites');

    if (list) {
      list = list.split(',');
      setListFavorites(list.map(item => ({
        name: item
      })));
    }
  }, []);

  useEffect(() => {
    setTotalResults(listFavorites.length);
  }, [listFavorites]);

  const handleRemoveFavorite = value => {
    const data = listFavorites.filter(item => item.name !== value);
    const list = data.map(item => item.name);

    setListFavorites([...data]);
    localStorage.setItem('listFavorites', list);
  };

  return (
    <>
      <Fold>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <h2>Your favorite characters <br />in one place!</h2>
          </Col>
        </Row>
      </Fold>
      <Grid className='container'>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <Table
              label='Characters'
              total={totalResults}
              data={listFavorites}
              header={header}
              hasAction
              flexGrowAction={2}
              returnAction={(rowData => (
                <div className='icon__container'>
                  <Tooltip label='Remover dos favoritos'>
                    <div className='table__d-inline-block'>
                      <Icon icon='trash' onClick={() => handleRemoveFavorite(rowData.name)} />
                    </div>
                  </Tooltip>
                </div >
              ))} />
          </Col>
        </Row>
      </Grid>
    </>
  );
};
export default Favorites;
