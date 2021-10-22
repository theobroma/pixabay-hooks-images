import React from 'react';
import MyModal from '../@components/Modal';
import { useAppDispatch, useAppSelector } from '../@store/configureStore';
import { modalSelector } from '../@store/modal/selectors';
import { clearImageData } from '../@store/modal/slice';
import MainView from '../@views/MainView';
import { GuestLayout } from './Layouts';

export const AppContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { largeImageURL, tags } = useAppSelector(modalSelector);

  const toggleModal = () => {
    dispatch(clearImageData());
  };

  return (
    <GuestLayout>
      <MainView />
      {largeImageURL && (
        <MyModal onClose={toggleModal}>
          123
          <img src={largeImageURL} alt={tags} />
        </MyModal>
      )}
    </GuestLayout>
  );
};
