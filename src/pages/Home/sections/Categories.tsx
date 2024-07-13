import { BsBackpack3 } from 'react-icons/bs';
import { TProductCategory } from '../../../types';
import { MdGpsFixed, MdOutlineElectricBike } from 'react-icons/md';
import { GiCampCookingPot, GiClothes } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const productCategories: TProductCategory[] = [
  {
    name: 'BackPacks',
    icon: BsBackpack3,
  },
  {
    name: 'BackPacks',
    icon: MdGpsFixed,
  },
  {
    name: 'Navigation & GPS',
    icon: MdGpsFixed,
  },
  {
    name: 'Outdoor Clothing',
    icon: GiClothes,
  },
  {
    name: 'Electronics & Gadgets',
    icon: MdOutlineElectricBike,
  },
  {
    name: 'Cookings',
    icon: GiCampCookingPot,
  },
];

const Categories = () => {
  return (
    <div className=" md:py-20 py-5">
      <div className=" space-y-2">
        <h1 className=" md:text-4xl text-2xl font-semibold text-center">
          Popular Categories{' '}
        </h1>
        <p className=" text-center text-gray-800 font-medium">
          Popular Categories: Shop from our popular categories
        </p>
      </div>
      <div className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-5 gap-3 font-jakarta">
        {productCategories.map((category, index) => {
          return (
            <Link to={`/products?category=${category.name}`}>
              <div
                className=" flex flex-col h-full bg-info_color space-y-2  p-10"
                key={index}
              >
                <div className=" text-3xl md:text-5xl text-primary_color flex justify-center items-center">
                  <category.icon />
                </div>
                <h1 className=" font-bold   text-primary_color text-center">
                  {category.name}
                </h1>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="text-center"></div>
    </div>
  );
};

export default Categories;
