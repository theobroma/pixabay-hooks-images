import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = {
  largeImageURL: null as string | null,
  tags: undefined as string | undefined,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    resetModalStateAC: () => modalInitialState,
    setImageData(state, action) {
      state.largeImageURL = action.payload.largeImageURL;
      state.tags = action.payload.tags;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { setImageData, resetModalStateAC } = modalSlice.actions;
