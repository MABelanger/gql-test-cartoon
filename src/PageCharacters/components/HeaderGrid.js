import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Input } from '@material-ui/core';

export function HeaderGrid(props) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={3}>
        <Input onChange={props.onChange} value={props.filterName} placeholder="search characters..." />
      </Grid>
    </Grid>
  );
}
