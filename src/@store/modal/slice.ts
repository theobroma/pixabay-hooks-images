import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = {
  largeImageURL: '',
  tags: '' as string,
};

export const slice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    setImageData(state, action) {
      state.largeImageURL = action.payload.largeImageURL;
      state.tags = action.payload.tags;
    },
    clearImageData(state) {
      state.largeImageURL = '';
      state.tags = '';
    },
  },
});

export const modalReducer = slice.reducer;
export const { setImageData, clearImageData } = slice.actions;
