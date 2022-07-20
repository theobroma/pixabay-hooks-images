// https://stackoverflow.com/questions/69499487/rtk-query-pagination-and-combine-queries
import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ImageGallery from '../../@components/ImageGallery';
import LoadingPage from '../../@components/UI/LoadingPage';
import { useAppDispatch } from '../../@store/configureStore';
import { useGetPicturesQuery } from '../../@store/pictures/api';
import { HitsEntityType } from '../../@types';
import LoadMoreButton from '../../@components/LoadMoreButton';

const MainView = () => {
  const dispatch = useAppDispatch();

  const [noMoreResults, setNoMoreResults] = useState(false);
  const [page, setPage] = useState(1);
  const [hits, setHits] = useState<HitsEntityType[]>([]);

  const { data, error, isLoading, isFetching, isError } = useGetPicturesQuery(
    page,
    {
      skip: noMoreResults,
    },
  );

  // const {
  //   loading: picturesLoading,
  //   page,
  //   pictureSearch,
  //   data: { hits },
  // } = useAppSelector(picturesSelector);

  // const { data, error, isLoading, isFetching } = useGetPicturesQuery(page);

  // const data = [] as any;
  // const isFetching = true;

  // const hits = data?.hits;

  // useEffect(() => {
  //   dispatch(picturesTC({ pictureSearch, page }));
  // }, [dispatch, pictureSearch, page]);

  useEffect(() => {
    if (data?.hits?.length) {
      setHits([...hits, ...data.hits]);
    } else if (page > 1) {
      setNoMoreResults(true);
    }
  }, [data]); // yes!'data' only

  // useEffect(() => {
  //   console.log(data);
  //   console.log(hits);
  // }, [hits, data]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [hits]);

  const handleLoadMore = () => {
    // dispatch(incrementPage());
    setPage(page + 1);
  };

  if (isError) return <div>An error has occurred!</div>;

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
