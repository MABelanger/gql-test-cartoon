import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

export function CenterContainer(props) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >

      <Grid item xs={3}>
        {props.children}
      </Grid>

    </Grid>
  );
}

CenterContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
