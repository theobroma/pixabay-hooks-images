// const ImageGallery = ({ picture, setImageData }) => {
//   return (
//     <ul className={s.ImageGallery}>
//       {picture.map(({ webformatURL, largeImageURL, tags }, index) => (
//         <ImageGalleryItem
//           onSetImageData={setImageData}
//           key={index}
//           src={webformatURL}
//           largeImageURL={largeImageURL}
//           tags={tags}
//         />
//       ))}
//     </ul>
//   );
// };
// export default ImageGallery;
import * as React from 'react';
import { useSelector } from 'react-redux';
import { picturesSelector } from '../../@store/pictures/selectors';
import ImageGalleryItem from './ImageGalleryItem';

export const ImageGallery: React.FC = () => {
  const picturesData = useSelector(picturesSelector).data;
  const picturesHits = picturesData.hits;
  return (
    <div>
      <span>gallery</span>
      {picturesHits?.map((item) => (
        <ImageGalleryItem
          //   onSetImageData={setImageData}
          key={item.id}
          picture={item}
          //   src={webformatURL}
          //   largeImageURL={largeImageURL}
          //   tags={tags}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
