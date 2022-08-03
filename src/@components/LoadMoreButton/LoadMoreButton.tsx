import * as React from 'react';

import type { Theme } from '@material-ui/core';
import {
  Button,
  createStyles,
  makeStyles,
  // CircularProgress,
} from '@material-ui/core';

interface Props {
  isFetching: boolean;
  handleClick: () => void;
}

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

const LoadMoreButton = ({ isFetching, handleClick }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          disabled={isFetching}
          onClick={() => handleClick()}
        >
          Load more
        </Button>
        {/* {isFetching && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )} */}
      </div>
    </div>
  );
};

export default LoadMoreButton;
