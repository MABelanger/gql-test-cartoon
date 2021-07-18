import React from 'react';
import Grid from '@material-ui/core/Grid';

import { CharacterCard } from './CharacterCard';

export function Characters(props) {
  return props.characters.map((character, index) => {
    console.log('index', index);
    return (
      <Grid item xs={4} key={index}>
        <CharacterCard name={character.name} image={character.image} />
      </Grid>
    );
  });
}
