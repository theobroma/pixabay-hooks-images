import { combineReducers } from 'redux';
import { picturesReducer } from './pictures/slice';

export const rootReducer = combineReducers({
  pictures: picturesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
