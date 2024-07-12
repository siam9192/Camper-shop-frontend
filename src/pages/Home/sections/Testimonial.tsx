import { Swiper, SwiperSlide } from 'swiper/react';

const reviews = [
    [
        {
          "name": "John Doe",
          "description": "I had a wonderful experience with this company. The service was impeccable, and the products exceeded my expectations. They arrived promptly and were exactly as described. I would highly recommend them!",
          "rating": 5
        },
        {
          "name": "Alice Smith",
          "description": "My order was delivered faster than expected, which was a pleasant surprise. The customer support team was very helpful and responsive when I had a question about my purchase. Overall, a great experience!",
          "rating": 4
        },
        {
          "name": "Michael Brown",
          "description": "The product quality was good, but I found the packaging could be improved. It arrived intact, but it could have been more secure. Despite this, I am satisfied with my purchase and would consider buying again.",
          "rating": 3
        },
        {
          "name": "Emily Davis",
          "description": "Unfortunately, the product was damaged when it arrived. However, the company's customer service was excellent. They quickly arranged for a replacement, and it arrived in good condition. I appreciate their efficient handling of the issue.",
          "rating": 2
        },
        {
          "name": "David Wilson",
          "description": "My experience with this company was disappointing. There was poor communication regarding my order, and it took an unreasonably long time to resolve the issues I encountered. I would not recommend them.",
          "rating": 1
        },
        {
          "name": "Sarah Johnson",
          "description": "I had an amazing experience shopping with this company. The website was easy to navigate, the checkout process was smooth, and my order arrived quickly. The product quality was excellent, and I would definitely shop here again!",
          "rating": 5
        }
      ]
      
]

const Testimonial = () => {
  return (
    <div>
         <section className="py-24 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 ">
                <span className="text-sm text-gray-500 font-medium text-center block mb-2">TESTIMONIAL</span>
                <h2 className="text-4xl text-center font-bold text-gray-900 ">What our happy user says!</h2>
            </div>
           
            <Swiper 
        slidesPerView = {1}
        spaceBetween = {32}
        loop = {true}
        centeredSlides = {true}
        pagination = {{
            el: ".swiper-pagination",
            clickable: true,

        }}
        autoplay = {{
            delay: 2500,
            disableOnInteraction: false,
        }}
        breakpoints ={ {
        640: {
          slidesPerView: 1,
          spaceBetween: 32,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
    >
       {
        reviews.map(()=>{
            return  <SwiperSlide>
                     <div className="">
            <div
                className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm slide_active:border-indigo-600">
                <div className="">
                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                        <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                fill="currentColor" />
                        </svg>
                        <span className="text-base font-semibold text-indigo-600">4.9</span>
                    </div>
                    <p
                        className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                        Pagedone has made it possible for me to stay on top of my portfolio and make
                        informed
                        decisions
                        quickly and easily.
                    </p>
                </div>
                <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696229969.png"
                        alt="avatar" />
                    <div className="block">
                        <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Jane D</h5>
                        <span className="text-sm leading-4 text-gray-500">CEO </span>
                    </div>
                </div>
            </div>
        </div>
                </SwiperSlide>
            
        })
       }
 
        </Swiper>
            {/* <div className="swiper mySwiper">
                <div className="swiper-wrapper w-max">
                   
                    <div className="swiper-slide">
                        <div
                            className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 slide_active:border-indigo-600 hover:shadow-sm">
                            <div className="">
                                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                            fill="currentColor" />
                                    </svg>
                                    <span className="text-base font-semibold text-indigo-600">4.9</span>
                                </div>
                                <p
                                    className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                                    Thanks to pagedone, I feel more informed and confident about my investment decisions
                                    than
                                    ever
                                    before.
                                </p>
                            </div>
                            <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                                <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696229994.png"
                                    alt="avatar" />
                                <div className="block">
                                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh P.
                                    </h5>
                                    <span className="text-sm leading-4 text-gray-500">Product Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div
                            className=" flex justify-between flex-col lg:w-full group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm">
                            <div className="">
                                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                            fill="currentColor" />
                                    </svg>
                                    <span className="text-base font-semibold text-indigo-600">4.9</span>
                                </div>
                                <p
                                    className="text-base text-gray-600 leading-6  transition-all duration-500  pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                                    The customer service team at pagedone went above and beyond to help me resolve a
                                    billing
                                    issue.
                                </p>
                            </div>
                            <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                                <img className="h-10 w-10" src="	https://pagedone.io/asset/uploads/1696230027.png"
                                    alt="avatar" />
                                <div className="block">
                                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Alex K.</h5>
                                    <span className="text-sm leading-4 text-gray-500">Design Lead</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div
                            className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm">
                            <div className="">
                                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                            fill="currentColor" />
                                    </svg>
                                    <span className="text-base font-semibold text-indigo-600">4.9</span>
                                </div>
                                <p
                                    className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                                    Pagedone has made it possible for me to stay on top of my portfolio and make
                                    informed
                                    decisions
                                    quickly and easily.
                                </p>
                            </div>
                            <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                                <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696229969.png"
                                    alt="avatar" />
                                <div className="block">
                                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Jane D</h5>
                                    <span className="text-sm leading-4 text-gray-500">CEO </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div
                            className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto slide_active:border-indigo-600 hover:border-indigo-600 hover:shadow-sm ">
                            <div className="">
                                <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                                    <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                            fill="currentColor" />
                                    </svg>
                                    <span className="text-base font-semibold text-indigo-600">4.9</span>
                                </div>
                                <p
                                    className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                                    Thanks to pagedone, I feel more informed and confident about my investment decisions
                                    than
                                    ever
                                    before.
                                </p>
                            </div>
                            <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                                <img className="h-10 w-10" src="https://pagedone.io/asset/uploads/1696229994.png"
                                    alt="avatar" />
                                <div className="block">
                                    <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh P.
                                    </h5>
                                    <span className="text-sm leading-4 text-gray-500">Product Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div> */}
        </div>
    </section>
      
    </div>
  )
}

export default Testimonial