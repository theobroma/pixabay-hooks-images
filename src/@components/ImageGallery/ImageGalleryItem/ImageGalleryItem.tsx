import * as React from 'react';

interface IImageGalleryItemProps {
  picture: any;
}

export const ImageGalleryItem: React.FC<IImageGalleryItemProps> = ({
  picture,
}) => {
  console.log(picture);
  return (
    <div>
      <span>item</span>
    </div>
  );
};

export default ImageGalleryItem;
