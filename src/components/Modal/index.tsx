import React, { ReactElement } from 'react';

type TModal = {
  onClose?: () => void;
  children: ReactElement;
};

const Modal = ({ onClose, children }: TModal): ReactElement => {
  return (
    <div>
      text goes here!
      <button onClick={onClose}>close</button>
      {children}
    </div>
  );
};

export default Modal;
