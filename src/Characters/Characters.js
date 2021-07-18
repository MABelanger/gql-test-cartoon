import React from 'react';

import {
  useQuery,
  gql,
} from '@apollo/client';

import { CharacterCard } from './CharacterCard';

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

function renderCharacters(characters) {
  return characters.map((character, index) => {
    console.log('index', index);
    return (
      <div>
        <CharacterCard key={index} name={character.name} image={character.image} />
      </div>
    );
  });
}

function renderErrors(errors) {
  return (
    <ul>
      {
      errors.map((error) => (<li>{error}</li>))
    }
    </ul>
  );
}

export default function Characters(props) {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, { variables: { filter: { name: props.filterName } } });

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.log('error', error);
    return <p>Error...</p>;
  }

  const characters = data.characters.results;

  console.log('characters', characters);

  return (
    <div>
      { renderCharacters(characters) }
    </div>
  );
}
