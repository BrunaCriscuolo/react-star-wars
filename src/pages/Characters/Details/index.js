import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { charactersListRequest } from '../../../store/modules/characters/actions';

const CharactersDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [, setListCharacters] = useState([]);

  const {
    charactersList,
    // charactersLoading
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
      setListCharacters(charactersList);
    }
  }, [charactersList]);

  return (
    <p>teste</p>
  );
};
export default CharactersDetails;
