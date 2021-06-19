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

const Characters = () => {
  const dispatch = useDispatch();

  const [totalResults, setTotalResults] = useState(0);
  const [pageSize, setPageSize] = useState(5);
  const [pageIndex, setPageIndex] = useState(1);
  const [listCharacters, setListCharacters] = useState([]);

  const {
    charactersList,
    charactersLoading
  } = useSelector(({ characters }) => characters);

  useEffect(() => {
    dispatch(charactersListRequest());
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

  return (
    <div>
      <Grid className='container'>
        <Row>
          <Col xs={24} sm={24} md={24}>
            <input onChange={({ target }) => handleSearch(target.value)} />
          </Col>
          <Col xs={24} sm={24} md={24}>
            <h2>Characters: {totalResults}</h2>
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
              returnAction={() => (
                <div className='icon__container'>
                  <Tooltip label='Editar'>
                    <div className='d-inline-block'>
                      <Icon icon='edit' />
                    </div>
                  </Tooltip>
                  <Tooltip label='Deletar'>
                    <div className='d-inline-block'>
                      <Icon icon='trash' />
                    </div>
                  </Tooltip>
                </div >
              )} />
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
