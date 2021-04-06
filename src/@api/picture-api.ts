import { API_KEY, instance } from './api';

export const pictureAPI = {
  fetchImages(pictureSearch: any, page: any) {
    return instance.get(
      `/?key=${API_KEY}&q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
    );
  },
};
