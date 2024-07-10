import { useState } from 'react';
import { productCategories } from '../../../../utils/constant';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const Filter = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleFilter = (e: any) => {
    e.preventDefault();
    const filter: any = {};
    if (minPrice) {
      filter.minPrice = minPrice;
    }
    if (maxPrice) {
      filter.maxPrice = maxPrice;
    }
    if (category) {
      filter.category = category;
    }
    const searchParams = queryString.stringify(filter);
    navigate(`?${searchParams}`);
  };

  const reset = (e: any) => {
    navigate('');
  };
  return (
    <div className="lg:w-[20%] lg:pt-20 pt-10">
      <form className="space-y-5" onSubmit={handleFilter}>
        <div>
          <h2 className="text-black font-bold">Filter by price</h2>
          <div className="grid grid-cols-2 gap-3 py-2 ">
            <input
              onChange={(e) => setMinPrice(parseInt(e.target.value))}
              placeholder="Min"
              min={0}
              type="number"
              className="w-full p-2 border-2 placeholder:text-black"
            />
            <input
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              placeholder="Max"
              max={1000000}
              type="number"
              className="w-full p-2  border-2 placeholder:text-black"
            />
          </div>
        </div>
        <div className="space-y-2">
          <h2 className="text-black font-bold">Filter by category</h2>
          <div className="">
            <select
              onChange={(e) => setCategory(e.target.value)}
              name=""
              id=""
              className=" bg-transparent py-2 border w-full uppercase text-black font-bold"
            >
              <option value="">Select Category</option>
              {productCategories.map((category, index) => {
                return (
                  <option value={category} key={index}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleFilter}
            className=" text-white bg-button_color px-2 py-1 uppercase"
          >
            Filter
          </button>
          <button
            type="reset"
            onClick={reset}
            className=" text-white bg-button_color px-2 py-1 uppercase"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
