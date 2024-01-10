import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../unit/Firebase';
import { redirect } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {gg} from '../unit/Firebase';
const initialAuthState = {
  isAuthenticated: localStorage.getItem('user'),
  error: {}
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
   setError(state, action) {
      state.error = action.payload;
   },
   setAuth(state, action) {
    state.isAuthenticated = action.payload;
   },
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;