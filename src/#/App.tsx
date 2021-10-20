import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyModal from '../@components/Modal';
import { modalSelector } from '../@store/modal/selectors';
import { clearImageData } from '../@store/modal/slice';
import MainView from '../@views/MainView';
import { GuestLayout } from './Layouts';

export const AppContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { largeImageURL, tags } = useSelector(modalSelector);

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
