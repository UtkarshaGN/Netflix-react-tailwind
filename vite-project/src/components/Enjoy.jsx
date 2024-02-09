import React from 'react'
function Enjoy() {
  return (
    <>
      <div className='container flex  flex-wrap justify-evenly items-center lg:py-20 md:py-20 py-10 px-5'>

        <div className='left mb-10 lg:mb-0 md:mb-0 sm:mb-0'>
          <h1 className='lg:text-5xl  md:text-5xl text-3xl text-center lg:text-start md:text-start sm:text-start font-bold text-white mb-5'>Enjoy on your TV</h1>
          <p className=' text-lg lg:text-2xl md:text-2xl text-center lg:text-start md:text-start sm:text-start  text-white'>Watch on smart TVs, PlayStation, Xbox,
            <br className='hidden lg:block md:block sm:block' />
            Chromecast, Apple TV, Blu-ray players and more.</p>
        </div>


        <div className="right">
          <div className="">
            <video className='lg:w-[35em] md:[w-35em] w-[30em] ' autoPlay={true} muted >
              <source src="/video/video1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>


      </div>

      <div className='hrline'></div>
    </>
  )
}

export default Enjoy
