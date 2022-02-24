// https://stackoverflow.com/questions/61528692/can-react-material-ui-inputbase-component-have-an-onsubmit-action
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useAppDispatch } from '../../../@store/configureStore';
import { setPictureSearch } from '../../../@store/pictures/slice';
import { useStyles } from './SearchBar.styles';

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = React.useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setPictureSearch(searchValue));
  };

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <form className="App" onSubmit={onSubmit}>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          // additional
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default SearchBar;
