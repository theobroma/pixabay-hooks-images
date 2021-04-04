import { Card, CardContent, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentWeatherSelector } from '../../@store/current-weather/selectors';
import { getCurrentWeatherTC } from '../../@store/current-weather/slice';
import { CurrentWeatherData } from './CurrentWeatherData/CurrentWeatherData';
import { Location } from './Location/Location';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 16,
  },
});

export const CurrentWeather: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { lon, lat, location, currentWeather } = useSelector(
    currentWeatherSelector,
  );

  useEffect(() => {
    if (lat !== 0 && lon !== 0) {
      dispatch(getCurrentWeatherTC({ lat, lon }));
    }
  }, [lat, lon, dispatch]);

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography component="h1" variant="h5">
            CurrentWeather
          </Typography>
          <Location location={location} />
          <CurrentWeatherData currentWeather={currentWeather} />
        </CardContent>
      </Card>
    </div>
  );
};
