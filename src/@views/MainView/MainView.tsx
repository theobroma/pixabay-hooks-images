import {
  Box,
  Button,
  CircularProgress,
  Container,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react';
import ImageGallery from '../../@components/ImageGallery';
import LoadingPage from '../../@components/UI/LoadingPage';
import { useAppDispatch } from '../../@store/configureStore';
import { useGetPokemonByNameQuery } from '../../@store/pictures/api';
import { incrementPage, picturesTC } from '../../@store/pictures/slice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonProgress: {
      // color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }),
);

const MainView: React.FC = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const [page, setPage] = useState(1);
  // const {
  //   loading: picturesLoading,
  //   page,
  //   pictureSearch,
  //   data: { hits },
  // } = useAppSelector(picturesSelector);

  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(page);
  // const data = [] as any;
  // const isFetching = true;
  const hits = data?.hits;

  // console.log(data);
  // console.log(error);
  // console.log('isLoading', isLoading); // Можна використовувати при першій загрузці

  // console.log('isFetching', isFetching); // Можна використовувати при наступних загрузках для видалення попередніх даних

  // console.log(isError);
  // console.log(isUninitialized);
  // console.log(isSuccess);
  // console.log(refetch);

  // useEffect(() => {
  //   dispatch(picturesTC({ pictureSearch, page }));
  // }, [dispatch, pictureSearch, page]);

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

  return (
    <Container maxWidth={false}>
      {/* {picturesLoading && <LoadingPage />} */}
      {hits && !isFetching && <ImageGallery hits={hits} />}
      <Box my={3}>
        <div className={classes.root}>
          <div className={classes.wrapper}>
            <Button
              variant="contained"
              color="primary"
              disabled={isFetching}
              onClick={() => handleLoadMore()}
            >
              Load more
            </Button>
            {isFetching && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default MainView;
