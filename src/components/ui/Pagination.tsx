
type TPaginationProps = {
    pages:number[],
    currentPage:number,
    setCurrentPage:(value:number)=>void
}
const Pagination = ({pages,currentPage,setCurrentPage}:TPaginationProps) => {
    
    const changePage = (page:number)=>{
    setCurrentPage(page)
    }
    const nextPage = ()=>{
        const page = currentPage + 1
        if(pages.length >= page ){
            setCurrentPage(page)
        }
    }
    const prevPage = ()=>{
        const page = currentPage - 1
        if( 0 < page ){
            setCurrentPage(page)
        }
    }

  return (
   
    <nav className="flex items-center gap-x-1">
      <button onClick={prevPage} type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"></path>
        </svg>
        <span>Previous</span>
      </button>
      <div className="flex items-center flex-wrap gap-x-1">
      {
        pages.map((page,index)=>{
            return      <button key={index} onClick={()=>changePage(page)} type="button" className={`*:min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 font-bold ${currentPage === page && "bg-gray-200"} hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10`}>{page}</button>
        })
      }
      </div>
      <button onClick={nextPage} type="button" className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
        <span>Next</span>
        <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </nav>
   
  )
}

export default Pagination