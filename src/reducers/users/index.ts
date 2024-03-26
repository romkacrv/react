import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

import * as types from '../../types';

const initialState: types.TUsers = [];

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    get: (state) => state,
  },
});

export default usersSlice;
