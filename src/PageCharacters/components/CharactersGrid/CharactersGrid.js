import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import _ from 'lodash';

import { CenterContainer } from '../CenterContainer';
import { Characters } from './Characters';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export function CharactersGrid(props) {
  const classes = useStyles();

  if (props.isLoading) return <CenterContainer><CircularProgress /></CenterContainer>;
  if (props.hasError) return <CenterContainer>Not Found...</CenterContainer>;

  const charactersChunks = _.chunk(props.characters, 3);

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

CharactersGrid.propTypes = {
  characters: PropTypes.shape(PropTypes.string).isRequired,
  isLoading: PropTypes.bool,
  hasError: PropTypes.bool,
};

CharactersGrid.defaultProps = {
  isLoading: false,
  hasError: false,
};
