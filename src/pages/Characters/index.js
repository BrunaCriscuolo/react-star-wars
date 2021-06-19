import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Grid from '../../components/Grid';
import Row from '../../components/Row';
import Col from '../../components/Col';
import Pagination from '../../components/Pagination';
import Table from '../../components/Table';
import Tooltip from '../../components/Tooltip';
import Icon from '../../components/Icon';

import { charactersListRequest } from '../../store/modules/characters/actions';

const header = [
  { dataKey: 'name', name: 'Name', flexGrow: 2 },
  { dataKey: 'birth_year', name: 'Birthdate', flexGrow: 2 },
];

const Characters = ({ history }) => {
  const dispatch = useDispatch();

  const [totalResults, setTotalResults] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [pageIndex, setPageIndex] = useState(1);
  const [listCharacters, setListCharacters] = useState([]);
  const [listFavorites, setListFavorites] = useState([]);

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
      setListCharacters(results);
    }
  }, [charactersList]);

  useEffect(() => {
    const finalFilters = {
      page: pageIndex,
    };
    dispatch(charactersListRequest(finalFilters));
  }, [pageIndex]);

  const handleChangeLength = dataKey => {
    setPageIndex(1);
    setPageSize(dataKey);
  };

  const handleSearch = value => {
    setPageIndex(1);

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

  const handleGoTo = () => {
    history.push('/favorites');
  };

  return (
    <div>
      <Grid className='container'>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <input onChange={({ target }) => handleSearch(target.value)} />
          </Col>
          <Col xs={24} sm={24} md={24}>
            <h2>Characters: {totalResults}</h2>
            <button onClick={handleGoTo} type='button'>Ver todos </button>
          </Col>
          <Col xs={24} sm={24} md={18} lg={20}>
            <Table
              label='Dados'
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
                        <div className='d-inline-block'>
                          <Icon icon='heart' onClick={() => handleRemoveFavorite(rowData.name)} />
                        </div>
                      </Tooltip>
                    ) : (
                      <Tooltip label='Favoritar'>
                        <div className='d-inline-block'>
                          <Icon icon='heart-o' onClick={() => handleFavorite(rowData.name)} />
                        </div>
                      </Tooltip>
                    )
                  )}
                </div >
              ))} />
          </Col>

          <Col xs={24} sm={24} md={18} lg={20}>
            <Pagination
              total={totalResults}
              displayLength={pageSize}
              onChangePage={setPageIndex}
              onChangeLength={handleChangeLength}
              activePage={pageIndex}
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
export default Characters;
