import React, { ReactElement } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Pages from "../pages";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages.Main />} />
        <Route path="/users" element={<Pages.Users />} />
        <Route path="/users/:id" element={<Pages.Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
