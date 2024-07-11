import React from 'react'
import ConfirmPopup from './ConfirmPopup'
import { useDeleteProductMutation } from '../../redux/features/Products/products.api'
import { toastError, toastSuccess } from '../../utils/constant'
import UpdateProductForm from '../../pages/ManageProducts/sections/UpdateProductForm'
import { TProduct } from '@/types'

const ManageProductCard = ({product}:{product:TProduct}) => {
  const [deleteProduct,{isError}] = useDeleteProductMutation()
  const onClick = async()=>{
   const res = await deleteProduct(product._id)
   
   if(!res.error && res.data.success){
    toastSuccess("Product deleted successfully")
   }
   else {
    toastError("Something went wrong")
   }
  }
  return (
    <tr>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
      <div className="flex gap-2">
        <img
          src={product.images[0]}
          alt=""
          className="w-16 h-16 md:w-20 md:h-20 rounded-md"
        />
        <div className="space-y-1">
          <h3 className=" text-[10px] md:text-xs text-secondary_color font-bold uppercase">
            {product.category}
          </h3>
          <h3 className=" text-[12px] md:text-[18px] font-bold uppercase">
            {product.name}
          </h3>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
      ${product.price}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
      {product.stock}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
      <div className=" flex items-center  gap-2 md:gap-4 ">
      {/* <span   
              data-hs-overlay={`#update-product-modal`} className="inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </span> */}
        <UpdateProductForm product={product}/>
        <ConfirmPopup id={product._id} clickFn={onClick}/>
      </div>
    </td>
 
  </tr>
  )
}

export default ManageProductCard