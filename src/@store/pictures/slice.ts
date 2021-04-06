import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pictureAPI } from '../../@api/picture-api';
import { PicturesDataType } from '../../@types';

const picturesInitialState = {
  data: {} as PicturesDataType,
};

export const picturesTC = createAsyncThunk(
  'pictures/picturesTC',
  async (param: { pictureSearch: string; page: number }, thunkAPI) => {
    try {
      const res = await pictureAPI.fetchImages(param.pictureSearch, param.page);
      return { data: res.data };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  },
);

export const slice = createSlice({
  name: 'search',
  initialState: picturesInitialState,
  reducers: {
    // clearDataAC(state) {
    //   state.data = {};
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(picturesTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.data = action.payload.data;
      }
    });
  },
});

export const picturesReducer = slice.reducer;
// export const { clearDataAC } = slice.actions;