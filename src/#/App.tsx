import { Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SimpleAppBar } from '../@components/AppBar/AppBar';
import ImageGallery from '../@components/ImageGallery';
import { picturesTC } from '../@store/pictures/slice';

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(picturesTC({ pictureSearch: '', page: 1 }));
  }, [dispatch]);

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
        <ImageGallery />
      </Container>
    </div>
  );
};
