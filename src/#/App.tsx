import { Box, Button, Container, Grid, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleAppBar } from '../@components/AppBar/AppBar';
import ImageGallery from '../@components/ImageGallery';
import LoadingPage from '../@components/UI/LoadingPage';
import { picturesSelector } from '../@store/pictures/selectors';
import { picturesTC } from '../@store/pictures/slice';

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch();
  // const picturesLoading = useSelector(picturesSelector).loading;
  const { loading: picturesLoading, page } = useSelector(picturesSelector);

  useEffect(() => {
    dispatch(picturesTC({ pictureSearch: '', page }));
  }, [dispatch, page]);

  return (
    <div className="App">
      <SimpleAppBar />
      <Container maxWidth="lg">
        {/* <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>111</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>222</Paper>
          </Grid>
        </Grid> */}
        {picturesLoading && <LoadingPage />}
        <ImageGallery />
        <Box my={3} textAlign="center">
          <Button variant="contained" color="primary">
            Load more
          </Button>
        </Box>
      </Container>
    </div>
  );
};
