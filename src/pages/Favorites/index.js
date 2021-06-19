import React, { useEffect, useState } from 'react';

import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Table from '../../components/Table';
import Tooltip from '../../components/Tooltip';
import Icon from '../../components/Icon';

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
      setTotalResults(list.length);
      setListFavorites(list.map(item => ({
        name: item
      })));
    }
  }, []);

  const handleRemoveFavorite = value => {
    const data = listFavorites.filter(item => item.name !== value);
    setListFavorites([...data]);
    const list = data.map(item => item.name);
    localStorage.setItem('listFavorites', list);
  };

  return (
    <div>
      <Grid className='container'>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <h1>teste</h1>
          </Col>
          <Col xs={24} sm={24} md={18} lg={20}>
            <Table
              label='Dados'
              total={totalResults}
              data={listFavorites}
              header={header}
              hasAction
              flexGrowAction={2}
              returnAction={(rowData => (
                <div className='icon__container'>
                  <Tooltip label='Remover dos favoritos'>
                    <div className='d-inline-block'>
                      <Icon icon='trash' onClick={() => handleRemoveFavorite(rowData.name)} />
                    </div>
                  </Tooltip>
                </div >
              ))} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
export default Favorites;