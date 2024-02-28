import Image from 'next/image'
import React from 'react'

const Blogauthore = ({posted}) => {
  return (
    <div className="p-4 md:px-7 flex items-center bg-[#fff5d8] mt-14 rounded-lg">
      <figure className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
        <Image src={"/images/fav.png"} width={48} height={48} alt="logo" />
      </figure>
      <div className="w-[calc(100%-80px)] pl-3">
        <p className="mb-0 text-dark font-medium">House Journey Team</p>
        <p className="mb-0 text-sm text-[#777]">Posted: {posted}</p>
      </div>
    </div>
  )
}

export default Blogauthore
