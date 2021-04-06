import { RootState } from '..';

export const picturesSelector = (state: RootState) => {
  return state.pictures;
};
