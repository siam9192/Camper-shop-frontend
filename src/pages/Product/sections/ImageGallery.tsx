import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

type TImageGalleryProps = {
  images: string[];
};

const ImageGallery = ({ images }: TImageGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);
  

  const handleActiveImage = (index: number) => {
    setActiveImage(index);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-5">
      <div className="lg:w-[20%] grid grid-cols-4 lg:flex flex-col gap-5">
        {images.map((image, index) => {
          return (
            <div
              className={`p-1 hover:cursor-pointer ${activeImage === index ? 'border-4 border-info_color' : ' border-2 border-black'}`}
              onClick={() => handleActiveImage(index)} key={index}
            >
              <img src={image} className="w-full" key={index} alt="" />
            </div>
          );
        })}
      </div>
      <div className="lg:w-[80%]  ">
     <div className='w-full lg:block hidden'>
     <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: images[activeImage],
        width:140,
        height:140
    },
    largeImage: {
        src: images[activeImage],
        width: 836,
        height: 1100,
        
    },
}} />
     </div>


        <img src={images[activeImage]} className="w-full lg:hidden" alt="" />
        
      </div>
    </div>
  );
};

export default ImageGallery;
