import React from 'react';

import {
  useQuery,
  gql,
} from '@apollo/client';

import { CharacterGrid } from './CharacterGrid';

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

export default function PageCharacters(props) {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, { variables: { filter: { name: props.filterName } } });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log('error', error);
    return (
      <p>
        Error :
        {error}
      </p>
    );
  }

  const characters = data.characters.results;

  console.log('characters', characters);

  return (
    <CharacterGrid characters={characters} />
  );
}
