import { Box, Button, Container } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageGallery from '../../@components/ImageGallery';
import LoadingPage from '../../@components/UI/LoadingPage';
import { useGetPokemonByNameQuery } from '../../@store/pictures/api';
import { incrementPage, picturesTC } from '../../@store/pictures/slice';

const MainView: React.FC = () => {
  const dispatch = useDispatch();
  // const {
  //   loading: picturesLoading,
  //   page,
  //   pictureSearch,
  //   data: { hits },
  // } = useSelector(picturesSelector);

  const { data, error, isLoading } = useGetPokemonByNameQuery('fdsf');

  // useEffect(() => {
  //   dispatch(picturesTC({ pictureSearch, page }));
  // }, [dispatch, pictureSearch, page]);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // }, [hits]);

  // const handleLoadMore = () => {
  //   dispatch(incrementPage());
  // };

  return (
    <Container maxWidth={false}>
      {/* {picturesLoading && <LoadingPage />} */}
      <ImageGallery hits={data?.hits} />
      {/* {hits.length > 0 && (
        <Box my={3} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLoadMore()}
          >
            Load more
          </Button>
        </Box>
      )} */}
    </Container>
  );
};

export default MainView;
