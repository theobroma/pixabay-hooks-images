import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

interface IKeyboardEvent {
  code: string;
}

const modalRoot = document.querySelector('#modal-root') as Element;

const MyModal = ({ onClose, children }: Props) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = (event: IKeyboardEvent) => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const onKeyPressHandler = (event: IKeyboardEvent) => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={s.Overlay}
      onClick={handleBackdropClick}
      onKeyPress={onKeyPressHandler}
      role="button"
      tabIndex={0}
    >
      <div className={s.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default MyModal;
