import { Box } from '@material-ui/core';
import React from 'react';
import { PrimarySearchAppBar } from '../@components/AppBar/AppBar';

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
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
