import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBacon,
  faCalendarAlt,
  faTemperatureHigh,
  faWater,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { Grid, Typography } from '@material-ui/core';
import { CurrentWeatherResponseType } from '../../../@types';

export const CurrentWeatherData: React.FC<Props> = ({
  currentWeather: {
    temp_c,
    condition,
    last_updated,
    humidity,
    wind_kph,
    wind_dir,
    gust_kph,
  },
}) => {
  const updateDate = new Date(last_updated);
  const currentWeekday = { weekday: 'long' } as const;
  const currentDate = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as const;
  const last_updated_weekday = updateDate.toLocaleString(
    'en-US',
    currentWeekday,
  );
  const last_updated_date = updateDate.toLocaleString('en-US', currentDate);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <div>
            <img src={condition?.icon} width="150" alt="condition" />
            <div>
              <p>{temp_c}&#176;C</p>
              <p>{condition?.text}</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} />
              <Typography component="span" variant="subtitle1">
                Today:
              </Typography>
              {last_updated_weekday} {last_updated_date}
            </p>
            <p>
              <FontAwesomeIcon icon={faTemperatureHigh} />
              <Typography component="span" variant="subtitle1">
                Feels Like:
              </Typography>
              {temp_c}&#176;C
            </p>
            <p>
              <FontAwesomeIcon icon={faWater} />
              <Typography component="span" variant="subtitle1">
                Humidity:
              </Typography>
              {humidity} %
            </p>
            <p>
              <FontAwesomeIcon icon={faWind} />
              <Typography component="span" variant="subtitle1">
                Wind:
              </Typography>
              {wind_kph} km/h ({wind_dir})
            </p>
            <p>
              <FontAwesomeIcon icon={faBacon} />
              <Typography component="span" variant="subtitle1">
                Gust:
              </Typography>
              {gust_kph}
            </p>
          </div>
        </Grid>
      </Grid>
      <div />
    </div>
  );
};

type Props = {
  currentWeather: CurrentWeatherResponseType;
};
