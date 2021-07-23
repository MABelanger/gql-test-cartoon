import { useState, useEffect } from 'react';

import {
  useQuery,
  gql,
  useLazyQuery,
} from '@apollo/client';

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
export function useCharacters() {
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

  return {
    characters, filterName, setFilterName, loading, error,
  };
}
