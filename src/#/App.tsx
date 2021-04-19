import { Box, Button, Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PrimarySearchAppBar } from '../@components/AppBar/AppBar';
import ImageGallery from '../@components/ImageGallery';
import MyModal from '../@components/Modal';
import LoadingPage from '../@components/UI/LoadingPage';
import { picturesSelector } from '../@store/pictures/selectors';
import {
  clearImageData,
  incrementPage,
  picturesTC,
} from '../@store/pictures/slice';

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch();
  const {
    loading: picturesLoading,
    page,
    pictureSearch,
    largeImageURL,
    tags,
    data: { hits },
  } = useSelector(picturesSelector);

  useEffect(() => {
    dispatch(picturesTC({ pictureSearch, page }));
  }, [dispatch, pictureSearch, page]);

  const toggleModal = () => {
    dispatch(clearImageData());
  };

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <div className="App">
      <Box mb={2}>
        <PrimarySearchAppBar />
      </Box>
      <Container maxWidth="lg">
        {picturesLoading && <LoadingPage />}
        <ImageGallery />
        {hits.length > 0 && (
          <Box my={3} textAlign="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleLoadMore()}
            >
              Load more
            </Button>
          </Box>
        )}
      </Container>
      {largeImageURL && (
        <MyModal onClose={toggleModal}>
          123
          <img
            src={largeImageURL}
            // alt="something"
            alt={tags}
          />
        </MyModal>
      )}
    </div>
  );
};
