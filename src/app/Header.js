import React from 'react'
import Image from 'next/image'

function Header() {
  return (
<div className="bg-teal-500 flex flex-col items-center justify-center px-4 py-2">
    <div className='flex flex-col items-center justify-center'>
    <h2 className=" text-white md:text-5xl mt-10 font-bold">
      Backed by the best
     </h2>
     <h3 className='text-white mt-5 md:text-xl'>Wealthup is backed and supported by</h3>
   <Image src="/13.png" width={700} height={130}/>

    </div>
  </div>
  )
}

export default Header
