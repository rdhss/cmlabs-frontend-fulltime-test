import { axiosTemplateThumb } from "@/utils/axios"
import { useEffect, useState } from "react"

const Card = (props) => {
  const {
    id,
    title,
    click,
    thumb,
    cube
  } = props



  return (
    <div onClick={click} className="overflow-hidden rounded-xl relative cursor-pointer">
      <div className="bg-black/40 absolute w-full h-full flex justify-center items-center">
        <p className="text-center text-white px-5">{title}</p>
      </div>
      <div key={id} id={id} className={`${cube ? 'w-[15rem] h-[15rem]' : 'w-[15rem] h-[7rem]'} flex justify-center items-center`} style={{ 
        backgroundImage: `${thumb ? `url(${thumb})` : `url(${process.env.NEXT_PUBLIC_API_URL_THUMB}/${title?.split(' ')?.join('%20')}.png)`}`,
        backgroundRepeat: "no-repeat", 
        backgroundSize: "contain", 
        backgroundPosition : 'center', 
        backgroundSize : `${thumb ? '100%' : '60%'}` }}>
      </div>
    </div>
  )
}

export default Card