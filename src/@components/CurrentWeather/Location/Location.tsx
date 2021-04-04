import { Typography } from '@material-ui/core';
import React from 'react';

type Props = {
  location: {
    name: string;
    region: string;
    country: string;
  };
};

export const Location: React.FC<Props> = ({ location }) => {
  return (
    <div>
      <Typography component="h2" variant="h6">
        {location.name}, {location.region}, {location.country}
      </Typography>
    </div>
  );
};
export default Location;
