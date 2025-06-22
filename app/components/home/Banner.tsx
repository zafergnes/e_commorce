import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[200px] bg-black flex items-center justify-center">
      <div className="h-[137px] relative w-full">
        <Image  src={"/banner.jpg"} fill alt="" className="object-cover"/>
      </div>
    </div>
  )
}

export default Banner