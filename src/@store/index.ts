import { combineReducers } from 'redux';
import { modalReducer } from './modal/slice';
import { picturesReducer } from './pictures/slice';

export const rootReducer = combineReducers({
  modal: modalReducer,
  pictures: picturesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
