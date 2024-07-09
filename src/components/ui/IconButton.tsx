import React, { ReactNode } from 'react'
import { IconContext, IconType } from 'react-icons';
import { Link } from 'react-router-dom';
type TIconButtonProps = {
    icon:IconType,
    size?:string;
    value?: number | string , 
    className?: string;
    clickFun?:()=> void | any;
    path?:string;
}

const IconButton = ({icon,size,value,className,clickFun,path}:TIconButtonProps) => {
    const SelectedIcon = icon
  return (
    <div className= {className} onClick={clickFun}>
   <Link to={path||""}>
   <button type="button" className="m-1 ms-0 relative py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg  text-gray-800  hover:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">

<IconContext.Provider value={{size}}>
   <SelectedIcon/>
</IconContext.Provider>

<span className={`flex absolute top-0 end-0 -mt-2 -me-2 ${!value ? "hidden" :""}`}>
<span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600"></span>
<span className="relative inline-flex text-xs bg-secondary_color text-white rounded-full py-0.5 px-1.5">
{value}
</span>
</span>
</button>
   </Link>
  </div>
  )
}

export default IconButton