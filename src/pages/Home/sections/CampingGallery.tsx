import React from 'react';

const categories = [
  { label: 'All', value: '', isActive: false },
  { label: 'Branding', value: 'Branding', isActive: true },
  { label: 'Code', value: 'Code', isActive: false },
  { label: 'Marketing', value: 'Marketing', isActive: false },
];

const portfolioList = [
  {
    image: 'https://www.nc-camping.de/wp-content/uploads/2020/09/teaser3.jpg',
    title: 'Forest Tour',
  },
  {
    image:
      'https://static.wixstatic.com/media/707955_083b2158732b4615a7db35102fe17804~mv2.jpeg/v1/fill/w_250,h_333,al_c,q_90,enc_auto/707955_083b2158732b4615a7db35102fe17804~mv2.jpeg',
    title: 'Forest Tour',
  },
  {
    image:
      'https://www.outdoorsy.com/wp-content/uploads/2019/01/Campers-1024x683.jpg',
    title: 'Forest Tour',
  },
  {
    image:
      'https://img.freepik.com/premium-photo/vertical-full-length-portrait-young-people-roasting-marshmallows-while-enjoying-camping-with-frie_236854-33688.jpg',
    title: 'Forest Tour',
  },
  {
    image:
      'https://www.switchbacktravel.com/sites/default/files/articles%20/4-season%20tents%20%28The%20North%20Face%20VE%2025%20at%20Denali%20basecamp%20m%29.jpg',
    title: 'Iceland Tour',
  },
  {
    image:
      'https://i0.wp.com/roundtheworld.in/wp-content/uploads/2022/02/Matheran-Forest-Camping-Camp-B-01-1.jpeg?fit=1600%2C1200&ssl=1',
    title: 'Forest Tour',
  },
  {
    image:
      'https://www.transitionsabroad.com/listings/travel/articles/images/small-group-travel-volcano-pucon-chile.jpg',
    title: 'Web Portal Dev',
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUY-Mz-TtzBLlOW_eCjZaz76JZKE8wurxUdFhs_yQdBycKuml0McaEyURaSbKtggNFXRQ&usqp=CAU',
    title: 'See Tour',
  },
];

const CampingGallery = () => {
  return (
    <section className=" font-jakarta ezy__portfolio9 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="px-4">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 md:col-span-4 md:mt-6 lg:mt-12 md:pt-6 lg:pt-12">
            <div className="xl:my-12 xl:py-12">
              <div className="mb-6 md:my-12 lg:py-12">
                <h2 className="text-3xl leading-none md:text-[45px] font-bold  mb-6">
                  Tour Gallery
                </h2>
                <p className="text-lg leading-8 mb-2">
                  Explore our captivating tour gallery, where artistry and
                  history converge. Immerse yourself in a curated collection
                  spanning centuries, featuring masterpieces that inspire and
                  stories that resonate with every visit
                </p>
              </div>
            </div>
            {portfolioList.slice(0, 2).map((portfolio, i) => (
              <div
                className="group rounded-xl overflow-hidden relative mt-6"
                key={i}
              >
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="max-w-full h-auto w-full"
                />
                <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
                  <h5 className="font-medium text-xl">{portfolio.title}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-12 md:col-span-4 md:mt-6 md:pt-6 lg:mt-12 lg:pt-12">
            {portfolioList.slice(2, 5).map((portfolio, i) => (
              <div
                className="group rounded-xl overflow-hidden relative mt-6"
                key={i}
              >
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="max-w-full h-auto w-full"
                />
                <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
                  <h5 className="font-medium text-xl">{portfolio.title}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-4">
            {portfolioList.slice(5, 8).map((portfolio, i) => (
              <div
                className="group rounded-xl overflow-hidden relative mt-6"
                key={i}
              >
                <img
                  src={portfolio.image}
                  alt={portfolio.title}
                  className="max-w-full h-auto w-full"
                />
                <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
                  <h5 className="font-medium text-xl">{portfolio.title}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampingGallery;
