import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root') as Element;

const MyModal: React.FC<Props> = ({ children }) => {
  // useEffect(() => {
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => window.removeEventListener('keydown', handleKeyDown);
  // });

  // const handleKeyDown = (event: any) => {
  //   if (event.code === 'Escape') {
  //     onClose();
  //   }
  // };

  // const handleBackdropClick = (event: any) => {
  //   if (event.currentTarget === event.target) {
  //     onClose();
  //   }
  // };

  return createPortal(
    <div
      className={s.Overlay}
      // onClick={handleBackdropClick}
      // onKeyDown={() => {}}
    >
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default MyModal;

type Props = {
  // onClose: any;
  children: any;
};
