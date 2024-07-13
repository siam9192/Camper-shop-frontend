import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import ProductCard from '../../../components/ui/ProductCard';
import {
  useGetProductsQuery,
  useGetRecommendedProductsQuery,
} from '../../../redux/features/Products/Products.api';
import { TProduct } from '../../../types';
import { loadingItems } from '../../../utils/constant';
import ProductLoadingCard from '../../../components/ui/ProductLoadingCard';
import SectionContainer from '../../../components/layout/SectionContainer';

const RecommendedProducts = () => {
  const { data, isLoading } = useGetRecommendedProductsQuery(undefined);
  const products = data?.data || [];

  return (
    <SectionContainer>
      <div className="py-10 space-y-2">
        <h1 className=" md:text-4xl text-2xl font-semibold text-center">
          Recommended For You
        </h1>
        <p className=" text-center text-gray-800 font-medium">
          Recommended For You: Personalized Gear Picks for Your Outdoor
          Adventures
        </p>
      </div>
      <div className="py-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-3 font-jakarta">
        {isLoading
          ? loadingItems.map((item: any, index: number) => (
              <ProductLoadingCard />
            ))
          : products.map((product: any, index: number) => (
              <ProductCard product={product} key={index} />
            ))}
      </div>
      <div className="text-center py-5">
        <Link to="/products">
          <Button text="View More Product" />
        </Link>
      </div>
    </SectionContainer>
  );
};

export default RecommendedProducts;
