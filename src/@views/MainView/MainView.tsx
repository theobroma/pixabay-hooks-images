import React, { useEffect, useState } from 'react';

import { Box, Container } from '@material-ui/core';

import ImageGallery from '../../@components/ImageGallery';
import LoadMoreButton from '../../@components/LoadMoreButton';
import LoadingPage from '../../@components/UI/LoadingPage';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { picturesSelector } from '../../@store/pictures/selectors';
import { picturesTC } from '../../@store/pictures/slice';

const MainView = () => {
  const dispatch = useAppDispatch();

  const {
    data: {
      // total,
      // totalHits,
      hits,
    },
    error,
    isError,
    isFetching,
    pictureSearch,
  } = useAppSelector(picturesSelector);

  const [page, setPage] = useState(1);

  // fetch after search changed
  useEffect(() => {
    setPage(1); // reset page
    dispatch(picturesTC({ page: 1 })); // works also as initial fetch
  }, [dispatch, pictureSearch]); // without page

  const handleLoadMore = () => {
    // dispatch(incrementPage());
    setPage(page + 1);
    dispatch(picturesTC({ page: page + 1 }));
  };

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [hits]);

  if (isError)
    return (
      <div>
        An error has occurred!
        <br />
        {error}
      </div>
    );

  return (
    <Container maxWidth={false}>
      {isFetching && <LoadingPage />}
      {hits && <ImageGallery hits={hits} />}
      <Box my={3}>
        <LoadMoreButton isFetching={isFetching} handleClick={handleLoadMore} />
      </Box>
    </Container>
  );
};

export default MainView;
