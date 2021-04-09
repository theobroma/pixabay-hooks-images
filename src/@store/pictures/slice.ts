import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { pictureAPI } from '../../@api/picture-api';
import { PicturesDataType } from '../../@types';

const picturesInitialState = {
  data: {
    total: 0,
    totalHits: 0,
    hits: [],
  } as PicturesDataType,
  loading: false,
  page: 1,
};

// delay
function waitforme(milisec: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('');
    }, milisec);
  });
}

export const picturesTC = createAsyncThunk(
  'pictures/picturesTC',
  async (param: { pictureSearch: string; page: number }, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      await waitforme(2000);
      const res = await pictureAPI.fetchImages(param.pictureSearch, param.page);
      return { data: res.data };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  },
);

export const slice = createSlice({
  name: 'pictures',
  initialState: picturesInitialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(picturesTC.fulfilled, (state, action) => {
      if (action.payload) {
        // state.data = action.payload.data;
        state.data.total = action.payload.data.total;
        state.data.totalHits = action.payload.data.totalHits;
        state.data.hits.push(...action.payload.data.hits);
      }
    });
  },
});

export const picturesReducer = slice.reducer;
export const { setLoading, incrementPage } = slice.actions;
