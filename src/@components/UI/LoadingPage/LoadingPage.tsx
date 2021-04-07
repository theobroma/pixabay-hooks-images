import React from 'react';
import { CircularProgress, Grid, Box } from '@material-ui/core';

export const LoadingPage: React.FC = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ height: '100vh' }}
        >
          <CircularProgress color="secondary" />
        </Box>
      </Grid>
    </Grid>
  );
};
export default LoadingPage;
