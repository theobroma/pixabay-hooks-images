import React from 'react';
import AppModal from '../@features/AppModal';
// import MainView from '../@views/MainView';
// import MainView2 from '../@views/MainView2';
import MainView3 from '../@views/MainView3';
import { AppLayout } from './AppLayout';

export const AppContainer = () => {
  return (
    <AppLayout>
      {/* <MainView /> */}
      {/* <MainView2 /> */}
      <MainView3 />
      <AppModal />
    </AppLayout>
  );
};
