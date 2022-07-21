import React from 'react';
import AppModal from '../@features/AppModal';
import MainView from '../@views/MainView';

import { AppLayout } from './AppLayout';

export const AppContainer = () => {
  return (
    <AppLayout>
      <MainView />
      <AppModal />
    </AppLayout>
  );
};
