import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: 0,
    width: '100%',
    marginBottom: 16,
  },
});

export const SimpleAppBar: React.FC = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Pixabay Images</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
