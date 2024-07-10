import { Dispatch } from "react"

type TInputNumberProps = {
quantity:number;
setQuantity:Dispatch<number>
}

const InputNumber = ({quantity,setQuantity}:TInputNumberProps) => {
 const increment = ()=>{
 const value = quantity + 1;

    setQuantity(value)
 
 }
 const decrement = ()=>{
    const value = quantity -  1;
        setQuantity(value)
    }
  return (
    <div  className="py-2 px-3  bg-white border border-gray-200 rounded-lg dark:bg-neutral-900 dark:border-neutral-700" data-hs-input-number="">
      <div  className="w-full flex justify-between items-center gap-x-5">
        <div  className="grow">
          <span  className="block text-xs text-gray-500 dark:text-neutral-400">
            Select quantity
          </span>
          <input readOnly  className="w-full outline-none p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white" type="number" value={quantity} data-hs-input-number-input=""/>
        </div>
        <div  className="flex justify-end items-center gap-x-1.5">
          <button onClick={decrement} type="button"  className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-input-number-decrement="">
            <svg  className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg>
          </button>
          <button onClick={increment} type="button"  className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" data-hs-input-number-increment="">
            <svg  className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  
  )
}

export default InputNumber