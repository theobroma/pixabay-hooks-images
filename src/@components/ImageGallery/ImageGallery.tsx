// Responsive approach https://www.tilcode.com/react-media-query-hook-responsive-material-ui-gridlist/
import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { nanoid } from '@reduxjs/toolkit';
import * as React from 'react';
import { useAppDispatch } from '../../@store/configureStore';
import { setImageData } from '../../@store/modal/slice';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

interface Props {
  hits: any;
}

export const ImageGallery: React.FC<Props> = ({ hits }) => {
  const dispatch = useAppDispatch();

  const classes = useStyles();
  const theme = useTheme();

  //   RESPONSIVE HACK
  const screenExtraLarge = useMediaQuery(theme.breakpoints.only('xl'));
  const screenLarge = useMediaQuery(theme.breakpoints.only('lg'));
  const screenMedium = useMediaQuery(theme.breakpoints.only('md'));
  const screenSmall = useMediaQuery(theme.breakpoints.only('sm'));
  const screenExtraSmall = useMediaQuery(theme.breakpoints.only('xs'));
  const screenNarrow = useMediaQuery('(max-width:340px)');

  const getScreenWidth = () => {
    if (screenExtraLarge) {
      return 5;
    }
    if (screenLarge) {
      return 4;
    }
    if (screenMedium) {
      return 3;
    }
    if (screenSmall) {
      return 2;
    }
    if (screenExtraSmall) {
      return 1;
    }
    if (screenNarrow) {
      return 1;
    }
    return 1;
  };
  //   END of RESPONSIVE HACK

  return (
    <div className={classes.root}>
      <ImageList
        rowHeight={260}
        cols={getScreenWidth()}
        gap={1}
        className={classes.gridList}
      >
        {hits?.map((tile: any) => (
          <ImageListItem
            //  key={tile.id}
            key={nanoid()}
            cols={1}
            rows={1}
          >
            <img
              role="presentation"
              src={tile.webformatURL}
              alt={tile.tags}
              // alt="none"
              onClick={() => {
                dispatch(
                  setImageData({
                    largeImageURL: tile.largeImageURL,
                    tags: tile.tags,
                  }),
                );
              }}
            />
            <ImageListItemBar
              title={tile.tags}
              position="top"
              actionIcon={
                <IconButton aria-label="star title" className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImageGallery;
