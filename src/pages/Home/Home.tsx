import Categories from './sections/Categories';
import Faq from './sections/Faq';
import FeaturedProducts from './sections/FeaturedProducts';
import Hero from './sections/Hero';
import RecommendedProducts from './sections/RecommendedProducts';
import Services from './sections/Services';

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedProducts />
      <Categories />
      <FeaturedProducts/>
      <Services/>
      <Faq />
    </div>
  );
};

export default Home;
