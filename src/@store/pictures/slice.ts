import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pictureAPI } from '../../@api/picture-api';

const picturesInitialState = {
  //   data: [] as Array<searchPlaceResponseType>,
  data: [],
};

export const picturesTC = createAsyncThunk(
  'pictures/picturesTC',
  async (param: { pictureSearch: any; page: any }, thunkAPI) => {
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
    clearDataAC(state) {
      state.data = [];
    },
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
export const { clearDataAC } = slice.actions;
