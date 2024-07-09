import Rating from "react-rating"
import { TProduct } from "../../types"
import { FaStar, FaStarHalf } from "react-icons/fa"
import { FaRegStar } from "react-icons/fa6"
import { ReactNode } from "react"

 
 type TProductCardProps = {
  product:TProduct
 }

 const renderRating = (rating:number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);
  const stars = [];
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar/>);
  }
  
  // Half star (if applicable)
  if (halfStar) {
    stars.push(<FaStarHalf/>);
  }
  
  // Empty stars
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar/>);
  }
  
  return stars;
};

const ProductCard = ({product}:TProductCardProps) => {
  return (
    <div className="p-5 bg-white rounded">
       
          <img  src="/images/bag1.jpg" className="w-full" alt="" />
       
        <div className="py-5 space-y-2">
          <div className=" flex justify-between items-center">
            <h2 className=" text-[14px] text-gray-500 uppercase">{product.category}</h2>
            <div className=" flex items-center gap-1 text-secondary_color">
            {
              renderRating(product.rating).map((item:ReactNode,index:number)=>item)
            }
            </div>
          </div>
          <div className="space-y-2">
          <h1 className="  font-bold text-black uppercase">{product.name}</h1>
          <h2 className=" text-gray-900 text-xl font-semibold  ">$ {product.price}</h2>
          </div>
        </div>
    </div>
  )
}

export default ProductCard