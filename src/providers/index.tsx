import React, { useState, ReactElement } from 'react';

import * as context from '../context';

export const ModalProvider = ({ children }: { children: ReactElement }) => {
  const [modal, setModal] = useState(null);

  const open = (modal: ReactElement) => {
    setModal(modal);
  };

  const close = () => {
    setModal(null);
  };

  const modalProps = {
    onClose: modal?.props?.onClose ? modal.props.onClose : close,
  };

  return (
    <context.ModalContext.Provider
      value={{
        open,
        close,
        isOpen: !!modal,
      }}>
      {modal && React.cloneElement(modal, modalProps)}
      {children}
    </context.ModalContext.Provider>
  );
};
