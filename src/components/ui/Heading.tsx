
type THeadingProps = ()=>{
    heading:string;
    title?:string
}

export const Heading = () => {
  return (
    <div className=" py-10 space-y-2">
        <h1 className=" md:text-4xl text-2xl font-semibold text-center">
          Recommended For You
        </h1>
        <p className=" text-center text-gray-800 font-medium">
          Recommended For You: Personalized Gear Picks for Your Outdoor
          Adventures
        </p>
      </div>
  )
}
