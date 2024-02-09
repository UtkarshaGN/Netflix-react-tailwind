import React from 'react'

function Download() {
  return (
    <>
      <div className='container flex  flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5'>
 {/*left*/}
      <div className="left order-last lg:order-first md:order-first">
          <div className="">
            <video className='lg:w-[20em] md:[w-20em] w-[20em] ' autoPlay={true} muted >
              <source src="/video/video2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
       
       {/*Right */}
        <div className='right mb-10 lg:mb-0 md:mb-0 sm:mb-0'>
          <h2 className='lg:text-5xl  md:text-5xl text-3xl text-center lg:text-start md:text-start sm:text-start font-bold text-white mb-5'> Download your shows <br className='' /> to watch offline</h2>
          <p className=' text-lg lg:text-2xl md:text-2xl text-center lg:text-start md:text-start sm:text-start  text-white'>Save your favourites easily and always have
            <br className='hidden lg:block md:block sm:block' />
            something to watch.
            </p>
        </div>
    </div>

      <div className='hrline'></div>
    </>
  )
}

export default Download