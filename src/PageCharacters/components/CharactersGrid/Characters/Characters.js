import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { CharacterCard } from './CharacterCard';

export function Characters(props) {
  return props.characters.map((character) => (
    <Grid item xs={4} key={character.id}>
      <CharacterCard name={character.name} image={character.image} />
    </Grid>
  ));
}

Characters.propTypes = {
  characters: PropTypes.shape(PropTypes.string).isRequired,
};
