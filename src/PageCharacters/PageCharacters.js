import React from 'react';

import { useCharacters } from './hooks/characters-hook';
import { CharactersGrid } from './components/CharactersGrid';
import { HeaderGrid } from './components/HeaderGrid';

export function PageCharacters(props) {
  const {
    characters, filterName, setFilterName, isLoading, hasError,
  } = useCharacters();

  function handleFilterNameChange(e) {
    const { value } = e.target;
    setFilterName(value);
  }

  return (
    <div>
      <HeaderGrid
        onChange={handleFilterNameChange}
        filterName={filterName}
      />
      <CharactersGrid
        characters={characters}
        isLoading={isLoading}
        hasError={hasError}
      />
    </div>
  );
}
