import React from 'react'
import Lock from "../../assets/lock.svg"
import Arrow from "../../assets/arrowse.svg"

const Security = () => {
  return (
    <div>
       <div className='max-w-[1280px] h-full px-16 mx-auto flex '>
        <section className='flex'>
            <main>
                <img src={Lock} alt="" />
            </main>
              <main className=" ">
            <h1 className='text-2xl font-semibold mb-3 '>
             Your security is our priority
            </h1>
            <p className='text-[15px] text-gray-600'>
                PiggyVest uses the highest level of Internet Security
                 and it is secured by 256 bits SSL <br /> security encryption
                 to ensure that your information is comepletely protected from fraud.
                </p>
                <div className='flex gap-4 mt-3.5'>
                <img src={Arrow} alt="" />
                <h3 className='font-semibold'>More on our security measures</h3>
                </div>
            </main>
        </section>
       </div>
    </div>
  )
}

export default Security