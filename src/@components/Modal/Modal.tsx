import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root') as Element;

const MyModal: React.FC<Props> = ({ onClose, children }) => {
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

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
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

type Props = {
  onClose: () => void;
};

interface IKeyboardEvent {
  code: string;
}
