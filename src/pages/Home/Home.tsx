import Categories from './sections/Categories';
import Faq from './sections/Faq';
import Hero from './sections/Hero';
import RecommendedProducts from './sections/RecommendedProducts';

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedProducts />
      <Categories />
      <Faq />
    </div>
  );
};

export default Home;
