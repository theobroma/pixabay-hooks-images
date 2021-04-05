import { API_KEY, instance } from './api';

// const fetchImages = async ({ pictureSearch: any, page: any }) => {
//   return await axios
//     .get(
//       `/?key=${apiKey}&q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
//     )
//     .then(({ data }) => data.hits);
// };

export const pictureAPI = {
  fetchImages(pictureSearch: any, page: any) {
    return instance.get(
      `/?key=${API_KEY}&q=${pictureSearch}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
    );
  },
};

// fetchImages.propTypes = {
//   pictureSearch: PropTypes.string.isRequired,
//   page: PropTypes.number.isRequired,
// };

// export default fetchImages;
