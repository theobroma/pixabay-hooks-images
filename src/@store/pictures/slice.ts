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
  pictureSearch: 'nature',
  largeImageURL: '',
  // largeImageURL:
  //   'https://pixabay.com/get/g6c5abb332425843c9179b22435f354f8196863905e6c842e4d399527db510613a17a959eec3cdb72db80a2eab0d99b61aecca3a423e31932f5c2d39f01e39273_1280.jpg',
  tags: '' as string,
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
      await waitforme(1000);
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
    setPictureSearch(state, action) {
      state.data.hits = []; // clear
      state.page = 1;
      state.pictureSearch = action.payload;
    },
    setImageData(state, action) {
      state.largeImageURL = action.payload.largeImageURL;
      state.tags = action.payload.tags;
    },
    clearImageData(state) {
      state.largeImageURL = '';
      state.tags = '';
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
export const {
  setLoading,
  incrementPage,
  setPictureSearch,
  setImageData,
  clearImageData,
} = slice.actions;
