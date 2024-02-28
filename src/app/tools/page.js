import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "Tools"
}

const page = () => {
  return (
    <main>
        {/* header wrapper start */}
        <header className="bg-[#F4EFE9] relative lg:h-[340px] sm:h-[300px] h-[200px] flex items-center">
            <div className="container">
                <div className="w-full lg:w-[40%] py-10 relative z-10 text-center lg:text-start">
                    <h1 className="h2 !text-white lg:!text-dark">Tools</h1>
                    {/* <p className="lg:text-[#333] text-white text-sm sm:text-base lg:text-lg">
                        Fueling your business with our cutting-edge lead generation tools, connecting you to motivated buyers.
                    </p> */}
                </div>
                <div className="absolute top-0 right-0 w-full lg:w-[64%] lg:h-[340px] sm:h-[300px] h-[200px] z-0" style={{boxShadow:"inset 0 0 0 15000px rgba(0,0,0,0.5)"}}> 
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#F4EFE9] to-[#0000003d]"></div>
                    <Image
                        src={"/images/banners/service-provider-bg.webp"}
                        width={1200} height={400}
                        alt="Image"
                        className="w-full h-full object-cover object-right"
                    />
                </div>
            </div>
        </header>
        {/* header wrapper end */}


        {/* Tools wrapper start */}
        <section className="py-10 sm:py-14 md:py-16 lg:py-20 ">
          <div className="container">
            <div className="flex flex-row flex-wrap">
              <div className="w-full lg:w-[40%] lg:pr-8"> 
                <h2 className="h2">Home Building Tools</h2>
                <p className="text-sm lg:text-base text-[#4F4C4C]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non enim, libero modi dignissimos deserunt ducimus, consequuntur tempore animi nihil voluptas ipsam nisi blanditiis placeat labore?
                </p>
                <Image src={"/images/tools/house-building-tools.webp"} width={483} height={322} alt="Architecture design" className="w-full h-auto rounded-lg" />

              </div>
              <div className="w-full lg:w-[60%] lg:pl-8 mt-7 lg:mt-0"> 
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 md:gap-5">
                  <div className="p-3 md:p-4 shadow-md rounded-md text-center bg-[url('/images/tools/cost.webp')] bg-no-repeat bg-center bg-cover min-h-[300px] flex items-end relative overflow-hidden"> 
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#000000c5] to-[#ffffff4a]"></div>
                    <div className="w-full relative z-10">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-white">Cost Calculator</h3>
                      <p className="text-[13px] sm:text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, adipisci!</p>
                    </div>
                  </div> 
                  <div className="p-3 md:p-4 shadow-md rounded-md text-center bg-[url('/images/tools/emi.webp')] bg-no-repeat bg-center bg-cover min-h-[300px] flex items-end relative overflow-hidden"> 
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#000000c5] to-[#ffffff4a]"></div>
                    <div className="w-full relative z-10">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-white">EMI Calculator</h3>
                      <p className="text-[13px] sm:text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, adipisci!</p>
                    </div>
                  </div> 
                  <div className="p-3 md:p-4 shadow-md rounded-md text-center bg-[url('/images/tools/far.webp')] bg-no-repeat bg-center bg-cover min-h-[300px] flex items-end relative overflow-hidden"> 
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#000000c5] to-[#ffffff4a]"></div>
                    <div className="w-full relative z-10">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-white">Product Predictor</h3>
                      <p className="text-[13px] sm:text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, adipisci!</p>
                    </div>
                  </div> 
                  <div className="p-3 md:p-4 shadow-md rounded-md text-center bg-[url('/images/tools/cost.webp')] bg-no-repeat bg-center bg-cover min-h-[300px] flex items-end relative overflow-hidden"> 
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#000000c5] to-[#ffffff4a]"></div>
                    <div className="w-full relative z-10">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 text-white">FAR Calculator</h3>
                      <p className="text-[13px] sm:text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, adipisci!</p>
                    </div>
                  </div> 

                </div>
                {/* grid */}
              </div>
            </div>


          </div>
          {/* container */}
        </section>
        {/* Tools wrapper end */}
    </main>
  )
}

export default page
