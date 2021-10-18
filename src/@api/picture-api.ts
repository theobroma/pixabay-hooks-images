import { PicturesDataType } from '../@types';
import { instance } from './api';

export const pictureAPI = {
  fetchImages(pictureSearch: string, page: number) {
    return instance.get<PicturesDataType>(
      `/?q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
    );
  },
};
