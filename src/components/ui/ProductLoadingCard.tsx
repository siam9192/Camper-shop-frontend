const ProductLoadingCard = () => {
  return (
    <div className="flex w-full  flex-col gap-4">
      <div className="skeleton h-52 w-full rounded-none"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-1/2"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default ProductLoadingCard;
