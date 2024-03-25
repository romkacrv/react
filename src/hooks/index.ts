import { useContext } from 'react';

import * as context from '../context';

const useModal = () => {
  return useContext(context.ModalContext);
};

export { useModal };
