import type { RootState } from '../../../@store/configureStore';

export const modalSelector = (state: RootState) => {
  return state.modal;
};
