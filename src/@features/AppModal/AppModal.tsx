import * as React from 'react';
import MyModal from './Modal';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { modalSelector } from './store/selectors';
import { clearImageData } from './store/slice';

export const AppModal = () => {
  const dispatch = useAppDispatch();
  const { largeImageURL, tags } = useAppSelector(modalSelector);

  const toggleModal = () => {
    dispatch(clearImageData());
  };
  return (
    <>
      {largeImageURL && (
        <MyModal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </MyModal>
      )}
    </>
  );
};
export default AppModal;
