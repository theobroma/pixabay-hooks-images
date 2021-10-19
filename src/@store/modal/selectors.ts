import { RootState } from '..';

export const modalSelector = (state: RootState) => {
  return state.modal;
};
