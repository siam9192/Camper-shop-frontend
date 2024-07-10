import { useState } from 'react';

type TImageGalleryProps = {
  images: string[];
};

const ImageGallery = ({ images }: TImageGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);
  images = [
    'https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/250d/250d-1-500x500.jpg',

    ' https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/250d/250d-3-500x500.jpg',

    ' https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/250d/250d-6-500x500.jpg',

    ' https://www.startech.com.bd/image/cache/catalog/camera/dslr-camera/canon/250d/250d-4-500x500.jpg',
  ];

  const handleActiveImage = (index: number) => {
    setActiveImage(index);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="lg:w-[20%] grid grid-cols-4 lg:flex flex-col gap-5">
        {images.map((image, index) => {
          return (
            <div
              className={`p-1 hover:cursor-pointer ${activeImage === index ? 'border-l-4 border-info_color' : ''}`}
              onClick={() => handleActiveImage(index)}
            >
              <img src={image} className="w-full" key={index} alt="" />
            </div>
          );
        })}
      </div>
      <div className="lg:w-[80%]  ">
        <img src={images[activeImage]} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default ImageGallery;
