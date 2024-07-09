
import ProductCard from "../../../../components/ui/ProductCard"

import { useGetProductsQuery } from "../../../../redux/features/Products/Products.api"


const Shop = () => {

  const searchParams = window.location.search
  
  const {data} = useGetProductsQuery(searchParams)
  const products = data?.data || []
  const currentPage = 1
  const options = [
    {
       display:"DEFAULT SORTING" ,
       value:"",
       isChecked:true
    },
    {
        display:"PRICE(LOW-HIGH)" ,
        value:"-1",
        
     }
  ]
  const pages = [1,2,4,56,484.4764]
  return (
    <div className="lg:w-[80%]">
         <div className=" flex justify-between items-center">
          <div>
          <h2 className=" text-black font-bold uppercase md:block hidden">Showing 1-12 of 20 results</h2>
          </div>
           <select name="" id="" className=" bg-transparent p-2 uppercase text-black font-bold">
            <option value="" defaultChecked>Default Sorting</option>
            <option value="">Price(Low-High)</option>
           </select>
         </div>
        
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
             products.map((product:any,index:number)=> <ProductCard product = {product} key={index}/>)
            }
           </div>

           <div className="flex items-center gap-2">
            {
                pages.map((page,index)=>{
                    return <div className={`px-4 py-2 border border-primary_color text-center text-black  hover:bg-primary_color hover:text-white hover:cursor-pointer ${currentPage === index ? "bg-info_color" : ""}`}>
                       {index+1}
                    </div>
                })
            }
           </div>
    </div>
    
  )
}

export default Shop