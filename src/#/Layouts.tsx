import { Box } from '@material-ui/core';
import React from 'react';
import { PrimarySearchAppBar } from '../@components/AppBar/AppBar';
// import Footer from '../@components/Footer';

interface ILayout {
  // All other props
  [x: string]: any;
}

export const GuestLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="HolyGrail">
      <PrimarySearchAppBar />
      <main className="HolyGrail-content">
        <Box mt={2} mb={2}>
          {children}
        </Box>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
