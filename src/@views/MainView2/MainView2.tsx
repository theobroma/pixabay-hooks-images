// https://stackoverflow.com/questions/69499487/rtk-query-pagination-and-combine-queries
// https://stackoverflow.com/questions/67909356/is-there-any-way-to-fetch-all-the-responses-stored-in-api-slice-rtk-query/71196866#71196866
// import { Box, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import ImageGallery from '../../@components/ImageGallery';
// import LoadingPage from '../../@components/UI/LoadingPage';
// import { useAppDispatch } from '../../@store/configureStore';
// import { useGetPicturesQuery } from '../../@store/pictures/api';
// import LoadMoreButton from '../../@components/LoadMoreButton';

// const MainView2 = () => {
//   const dispatch = useAppDispatch();

//   const [page, setPage] = useState(1);

//   const { data, error, isLoading, isFetching, isError } =
//     useGetPicturesQuery(page);

//   const hits = data?.hits;

//   useEffect(() => {
//     // console.log(data);
//     console.log(hits);
//   }, [hits]);

//   useEffect(() => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   }, [hits]);

//   const handleLoadMore = () => {
//     // dispatch(incrementPage());
//     setPage(page + 1);
//   };

//   if (isError) return <div>An error has occurred!</div>;

//   return (
//     <Container maxWidth={false}>
//       {isFetching && <LoadingPage />}
//       {hits && <ImageGallery hits={hits} />}
//       <Box my={3}>
//         <LoadMoreButton isFetching={isFetching} handleClick={handleLoadMore} />
//       </Box>
//     </Container>
//   );
// };

const MainView2 = () => {
  return <div>MainView2</div>;
};

export default MainView2;
