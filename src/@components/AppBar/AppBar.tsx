import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme: Theme) => {
  // console.log(theme); // print mui global theme object
  return {
    ...createStyles({
      grow: {
        flexGrow: 1,
      },
      title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
          display: 'block',
        },
      },
    }),
  };
});

export const PrimarySearchAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Pixabay Images
            </Typography>
            {/* search */}
            <SearchBar />
            <div className={classes.grow} />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
