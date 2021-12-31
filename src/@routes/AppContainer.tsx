import React from 'react';
import MyModal from '../@components/Modal';
import { useAppDispatch, useAppSelector } from '../@store/configureStore';
import { modalSelector } from '../@store/modal/selectors';
import { clearImageData } from '../@store/modal/slice';
import MainView from '../@views/MainView';
import { AppLayout } from './AppLayout';

export const AppContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { largeImageURL, tags } = useAppSelector(modalSelector);

  const toggleModal = () => {
    dispatch(clearImageData());
  };

  return (
    <AppLayout>
      <MainView />
      {largeImageURL && (
        <MyModal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </MyModal>
      )}
    </AppLayout>
  );
};
