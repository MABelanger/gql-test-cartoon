import React, { useState, useEffect } from 'react';
import { Input } from '@material-ui/core';

import {
  useQuery,
  gql,
  useLazyQuery,
} from '@apollo/client';

import { CharactersGrid } from './CharactersGrid';

const GET_ALL_CHARACTERS = gql`
  query AllCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        id
        name
        status
        species
        type
        gender
        image
        created
      }
    }
  }
`;

export function PageCharacters(props) {
  const [filterName, setFilterName] = useState('');
  const [characters, setCharacters] = useState([]);

  const [
    loadCharacters,
    {
      called, loading, data, error,
    },
  ] = useLazyQuery(GET_ALL_CHARACTERS, {
    variables: { filter: { name: filterName } },
  });

  useEffect(() => {
    loadCharacters();
  }, [filterName]);

  useEffect(() => {
    if (data && data.characters && data.characters.results.length > 0) {
      const characters = data.characters.results;
      setCharacters(characters);
    }
  }, [data]);

  function handleFilterNameChange(e) {
    const { value } = e.target;
    setFilterName(value);
  }

  console.log('characters', characters);

  function renderCharacters() {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Not found...</p>;
    return <CharactersGrid characters={characters} />;
  }

  return (
    <div>
      <Input onChange={handleFilterNameChange} value={filterName} />
      {renderCharacters()}
    </div>
  );
}
