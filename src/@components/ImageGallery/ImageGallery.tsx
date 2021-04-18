// Responsive approach https://www.tilcode.com/react-media-query-hook-responsive-material-ui-gridlist/
import * as React from 'react';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Theme,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { picturesSelector } from '../../@store/pictures/selectors';
import { setImageData } from '../../@store/pictures/slice';

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

export const ImageGallery: React.FC = () => {
  const dispatch = useDispatch();
  const picturesData = useSelector(picturesSelector).data;
  const picturesHits = picturesData.hits;

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
      <GridList
        cellHeight={260}
        cols={getScreenWidth()}
        spacing={1}
        className={classes.gridList}
      >
        {picturesHits?.map((tile) => (
          <GridListTile key={tile.id} cols={1} rows={1}>
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
            <GridListTileBar
              title={tile.tags}
              titlePosition="top"
              actionIcon={
                <IconButton aria-label="star title" className={classes.icon}>
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
              className={classes.titleBar}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ImageGallery;
