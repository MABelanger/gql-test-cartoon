import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';

import { Characters } from './Characters';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export function CharacterGrid(props) {
  const classes = useStyles();

  const charactersChunks = _.chunk(props.characters, 3);

  console.log('charactersChunks', charactersChunks);
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <>
          {
            charactersChunks.map((characters) => (
              <Grid container item xs={12} spacing={3}>
                <Characters characters={characters} />
              </Grid>
            ))
          }
        </>
      </Grid>
    </div>
  );
}

CharacterGrid.propTypes = {
  characters: PropTypes.shape(PropTypes.string).isRequired,
};
