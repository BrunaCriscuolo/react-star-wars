import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
import Tooltip from '../../components/Tooltip';
import Icon from '../../components/Icon';
import Fold from '../../components/Fold';
import Input from '../../components/Input';

import { Container } from './styles';

import { charactersListRequest } from '../../store/modules/characters/actions';

const header = [
  { dataKey: 'name', name: 'Name', flexGrow: 2 },
  { dataKey: 'birth_year', name: 'Birthdate', flexGrow: 2 },
];

const Characters = ({ history }) => {
  const dispatch = useDispatch();

  const [totalResults, setTotalResults] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);
  const [listCharacters, setListCharacters] = useState([]);
  const [listFavorites, setListFavorites] = useState([]);
  const [search, setSearch] = useState('');

  const {
    charactersList,
    charactersLoading
  } = useSelector(({ characters }) => characters);

  useEffect(() => {
    dispatch(charactersListRequest());
    const data = localStorage.getItem('listFavorites');

    if (data) {
      const list = data.split(',');
      setListFavorites(list);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(charactersList).length > 0) {
      const { count, results } = charactersList;

      setTotalResults(count);
      if (results)
        setListCharacters(results.map((item, index) => ({ ...item, id: index + 1 })));
    }
  }, [charactersList]);

  useEffect(() => {
    const finalFilters = {
      page: pageIndex,
    };
    dispatch(charactersListRequest(finalFilters));
  }, [pageIndex]);

  const handleSearch = value => {
    setPageIndex(1);
    setSearch(value);

    const finalFilters = {
      search: value,
      page: 1,
    };

    dispatch(charactersListRequest(finalFilters));
  };

  const handleFavorite = value => {
    const data = localStorage.getItem('listFavorites');
    let list = value;

    if (data)
      list = [data, value];

    setListFavorites([...listFavorites, value]);
    localStorage.setItem('listFavorites', list);
  };

  const handleRemoveFavorite = value => {
    const data = listFavorites.filter(item => item !== value);
    setListFavorites([...data]);

    localStorage.setItem('listFavorites', data);
  };
  return (
    <Container>
      <Fold>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <h2>Explore all the characters <br />in the galaxy</h2>
          </Col>
        </Row>
        <Row className='character__d-flex'>
          <Col xs={24} sm={20} md={10}>
            <Input
              placeholder='Type in character name'
              value={search}
              onChange={handleSearch}
            />
          </Col>
        </Row>
      </Fold>
      <Grid className='container'>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <Table
              label='Characters'
              total={totalResults}
              data={listCharacters}
              header={header}
              loading={charactersLoading}
              hasAction
              flexGrowAction={2}
              returnAction={(rowData => (
                <div className='icon__container'>
                  {listFavorites && (
                    listFavorites.find(item => item === rowData.name) ? (
                      <Tooltip label='Remover dos favoritos'>
                        <div className='table__d-inline-block'>
                          <Icon icon='heart' onClick={() => handleRemoveFavorite(rowData.name)} />
                        </div>
                      </Tooltip>
                    ) : (
                      <Tooltip label='Favoritar'>
                        <div className='table__d-inline-block'>
                          <Icon icon='heart-o' onClick={() => handleFavorite(rowData.name)} />
                        </div>
                      </Tooltip>
                    )
                  )}
                  <Tooltip label='Visualizar'>
                    <div className='table__d-inline-block'>
                      <Icon icon='eye' onClick={() => history.push(`/characters/details/${rowData.id}`)} />
                    </div>
                  </Tooltip>
                </div >
              ))} />
          </Col>

          <Col xs={24} sm={24} md={24}>
            <Pagination
              total={totalResults}
              onChangePage={setPageIndex}
              activePage={pageIndex}
            />
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};
export default Characters;
