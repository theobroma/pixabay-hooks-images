import { RootState } from '../configureStore';

export const modalSelector = (state: RootState) => {
  return state.modal;
};
