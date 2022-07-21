import * as React from 'react';
import MyModal from './Modal';
import { useAppDispatch, useAppSelector } from '../../@store/configureStore';
import { modalSelector } from './store/selectors';
import { resetModalStateAC } from './store/slice';

export const AppModal = () => {
  const dispatch = useAppDispatch();
  const { largeImageURL, tags } = useAppSelector(modalSelector);

  const toggleModal = () => {
    dispatch(resetModalStateAC());
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
