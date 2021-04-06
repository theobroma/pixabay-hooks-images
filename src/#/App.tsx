import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { SimpleAppBar } from '../@components/AppBar/AppBar';

export const AppContainer: React.FC = () => {
  return (
    <div className="App">
      <SimpleAppBar />
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>111</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>222</Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
