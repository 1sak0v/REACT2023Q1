import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';

import { TModallProps } from '../../types/types';

import './modal.scss';

const modal = document.getElementById('modal') as HTMLElement;

const Modal = ({ children, onClose }: TModallProps) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    modal.appendChild(element);

    return () => {
      modal.removeChild(element);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div className="modal__overlay" onClick={onClose}>
      {children}
    </div>,
    element
  );
};

export default Modal;
