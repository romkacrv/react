import React, { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import * as providers from '../providers';
import * as pages from '../pages';

import '../assets/css/index.scss';

const App = (): ReactElement => {
  return (
    <providers.ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<pages.Main />} />
          <Route path="/users" element={<pages.Users />} />
          <Route path="/users/:id" element={<pages.User />} />
        </Routes>
      </BrowserRouter>
    </providers.ModalProvider>
  );
};

export default App;
