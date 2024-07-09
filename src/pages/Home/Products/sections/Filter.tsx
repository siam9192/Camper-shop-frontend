import { productCategories } from "../../../../utils/constant"


const Filter = () => {
  return (
    <div className="lg:w-[20%] lg:pt-20 pt-10">
     <div className="space-y-5">
     <div>
       <h2 className="text-black font-bold">Filter by price</h2>
       <div className="grid grid-cols-2 gap-3 py-2 ">
        <input placeholder="Min" min={0} type="number" className="w-full p-2 border-2 placeholder:text-black" />
        <input placeholder="Max" max={1000000} type="number" className="w-full p-2  border-2 placeholder:text-black" />
       </div>
       </div>
       <div className="space-y-2">
       <h2 className="text-black font-bold">Filter by category</h2>
      <div className="">
      <select name="" id="" className=" bg-transparent py-2 border w-full uppercase text-black font-bold">
          {
            productCategories.map((category,index)=>{
                return <option value={category} key={index}>{category}</option>
            })
          }
           </select>
      </div>
       </div>
       <button className=" text-white bg-button_color px-2 py-1 uppercase">Filter</button>
     </div>
    </div>
  )
}

export default Filter