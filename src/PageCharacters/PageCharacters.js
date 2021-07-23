import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { Input } from '@material-ui/core';

import { useCharacters } from './hooks/characters-hook';
import { CenterComponent } from './CenterComponent';
import { CharactersGrid } from './CharactersGrid';

export function PageCharacters(props) {
  const {
    characters, filterName, setFilterName, loading, error,
  } = useCharacters();

  function handleFilterNameChange(e) {
    const { value } = e.target;
    setFilterName(value);
  }

  function renderCharacters() {
    if (loading) return <CenterComponent><CircularProgress /></CenterComponent>;
    if (error) return <CenterComponent>Not Found...</CenterComponent>;
    return <CharactersGrid characters={characters} />;
  }

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <Input onChange={handleFilterNameChange} value={filterName} placeholder="search characters..." />
        </Grid>
        {renderCharacters()}
      </Grid>
    </div>
  );
}
