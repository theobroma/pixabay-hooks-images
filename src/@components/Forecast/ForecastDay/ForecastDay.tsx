import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ForecastDay: React.FC<Props> = ({
  weekDay,
  date,
  sunrise,
  sunset,
  icon,
  condition_text,
  min_temp,
  max_temp,
}) => {
  return (
    <div>
      <h3>{weekDay}</h3>
      <p>{date}</p>
      <img src={icon} alt="icon" />
      <p>{condition_text}</p>
      <p>
        {min_temp} - {max_temp}&#176;C
      </p>
      <div>
        <p>
          <FontAwesomeIcon icon={faSun} /> {sunrise}
        </p>
        <p>
          <FontAwesomeIcon icon={faMoon} />
          {sunset}
        </p>
      </div>
    </div>
  );
};

export default ForecastDay;

type Props = {
  weekDay: string;
  date: string;
  sunrise: string;
  sunset: string;
  icon: string;
  condition_text: string;
  min_temp: number;
  max_temp: number;
};
