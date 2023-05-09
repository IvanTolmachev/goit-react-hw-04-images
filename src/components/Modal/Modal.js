import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { BoxModal, ModalWindowBox } from './Modal.styled';

export function Modal({ children, modalClose }) {
  useEffect(() => {
    const closeModalEsc = e => {
      if (e.code === 'Escape') {
        modalClose();
      }
    };

    window.addEventListener('keydown', closeModalEsc);
    return () => {
      window.removeEventListener('keydown', closeModalEsc);
    };
  }, [modalClose]);

  const closeModalBackdropClick = e => {
    if (e.target.id === 'backdrop') {
      modalClose();
    }
  };

  return (
    <BoxModal id={'backdrop'} onClick={closeModalBackdropClick}>
      <ModalWindowBox>{children}</ModalWindowBox>
    </BoxModal>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
};
