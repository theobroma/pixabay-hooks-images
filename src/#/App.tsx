import { Box, Button, Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleAppBar } from '../@components/AppBar/AppBar';
import ImageGallery from '../@components/ImageGallery';
import LoadingPage from '../@components/UI/LoadingPage';
import { picturesSelector } from '../@store/pictures/selectors';
import { incrementPage, picturesTC } from '../@store/pictures/slice';

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { loading: picturesLoading, page } = useSelector(picturesSelector);

  useEffect(() => {
    dispatch(picturesTC({ pictureSearch: '', page }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <div className="App">
      <SimpleAppBar />
      <Container maxWidth="lg">
        {picturesLoading && <LoadingPage />}
        <ImageGallery />
        <Box my={3} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLoadMore()}
          >
            Load more
          </Button>
        </Box>
      </Container>
    </div>
  );
};
