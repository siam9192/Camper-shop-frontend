import { useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../redux/features/Products/products.api';
import ImageGallery from './sections/ImageGallery';
import ProductDetails from './sections/ProductDetails';
import { useEffect } from 'react';

const Product = () => {
  const { id } = useParams();
  const { data, isLoading, isError,refetch } = useGetProductQuery(id as string);
  const product = data?.data;

  if (isLoading) {
    return <div className="min-h-[80vh]">Loading....</div>;
  }
  if (isError) {
    return (
      <div className="min-h-[80vh]">
        <h1 className=" text-4xl text-center py-20 font-bold text-black">
          Something went wrong
        </h1>
      </div>
    );
  }

  
  return (
    <div className="min-h-[80vh]">
      <div className="md:py-10 grid grid-cols-1 md:grid-cols-2   gap-10">
        <ImageGallery images={product.images}/>
        <ProductDetails product={product} />
      </div>
    </div>
  );
};

export default Product;
