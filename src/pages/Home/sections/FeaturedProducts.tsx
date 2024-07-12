import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import ProductCard from '../../../components/ui/ProductCard';
import {
  useGetProductsQuery,
  useGetRecommendedProductsQuery,
} from '../../../redux/features/Products/products.api';
import { TProduct } from '../../../types';
import { loadingItems } from '../../../utils/constant';
import ProductLoadingCard from '../../../components/ui/ProductLoadingCard';

const FeaturedProducts = () => {
  const { data, isLoading } = useGetRecommendedProductsQuery(undefined);
  const products = data?.data || [];

  return (
    <div className="py-20 py-5">
      <div className=" space-y-2">
        <h1 className=" md:text-4xl text-2xl font-semibold text-center">
          Featured Products
        </h1>
        <p className=" text-center text-gray-800 font-medium">
          Recommended For You: Personalized Gear Picks for Your Outdoor
          Adventures
        </p>
      </div>
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5 gap-3 font-jakarta">
        {isLoading
          ? loadingItems.map((item: any, index: number) => (
              <ProductLoadingCard />
            ))
          : products.map((product: any, index: number) => (
              <ProductCard product={product} key={index} />
            ))}
      </div>
      <div className="text-center">
        <Link to="/products">
          <Button text="View More Product" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
