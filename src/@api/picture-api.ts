// FILE NOT USED!!! Use RTKQ version instead
import { PicturesDataResponseType } from '../@types';
import { pixabayAxiosInstance } from './api';

export const pictureAPI = {
  fetchImages(pictureSearch: string, page: number) {
    return pixabayAxiosInstance.get<PicturesDataResponseType>(
      `/?q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
    );
  },
};
