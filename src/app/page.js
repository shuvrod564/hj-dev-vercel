 
import { PageHeader } from '@components/components/common/PageHeader'
import Whatwedo from '@components/components/widgets/Whatwedo'
import Image from 'next/image'
import Link from 'next/link'  
import { TbClipboardCheck } from 'react-icons/tb'

export default function Home() {
  return (
    <main>
        {/* header start pb-16 lg:py-20 xl:py-24 */}
        <header className=" relative pb-12 2xl:py-36 xl:py-28 lg:py-16 overflow-hidden hidden"> 
          <div className="container relative z-10">
            <div className="flex flex-row flex-wrap items-center">
              <div className="w-full lg:w-[40%] lg:h-[420px] relative lg:order-2 lg:hidden">
                <div className="lg:absolute top-0 left-0 z-0 lg:w-[calc(45vw-2rem)] h-full"> 
                  <Image
                    src={"/images/banners/hero-thumb.webp"} 
                    width={832} height={400}
                    alt="House Journey Hero Thumbnail"
                    className="w-full h-full object-cover object-center "
                  />
                </div>
              </div>
              <div className="w-full lg:w-[60%] pt-6 lg:pt-0 lg:pr-6 text-center lg:text-start lg:order-1"> 
                <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-5xl font-bold text-dark mb-4 lg:mb-6">
                  <span className="text-primary">Partner</span> on your personal mission to <span className="text-primary">build</span> a dream home
                  {/* for your <span className="text-primary">family</span>!  */}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg max-w-[700px]">
                  We understand that as you aspire to build a home for your family for the future. You have hundreds of things to take care in your daily life and as well worry about how to go about getting things done to reach the destination - a dream home!
                </p> 
              </div> 
            </div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full z-0 hidden lg:block">  
            <div className="absolute top-0 left-0 w-full h-full"></div>
            <Image
                src={"/images/banners/hero-bg-new.webp"}
                width={1920} height={600}
                alt="Image"
                className="w-full h-full object-cover object-center"
            />
          </div>
        </header>
        <PageHeader
              title='Partner on your personal mission to build a dream home'
              description="We understand that as you aspire to build a home for your family for the future. You have hundreds of things to take care in your daily life and as well worry about how to go about getting things done to reach the destination - a dream home!"
              image="/images/banners/house.webp"
          /> 
        {/* header end */}

        {/* about wrapper start */}
        <section className="py-10 sm:py-12 md:py-16 lg:py-20 hidden">
          <div className="container relative">
            <div className=" items-center">
              <div className="w-full lg:w-[50%] lg:pr-5 relative">
                <Image src={"/images/global/about-thumbnail.jpg"} width={500} height={500} alt="About House Journey" className="w-full rounded-xl rounded-bl-none relative z-10" />
                <div className="w-24 h-24 rounded-xl border-[2px] border-[#707070] block absolute -bottom-10 -left-10 z-0"></div>
              </div>
              <div className="w-full lg:w-[70%] lg:pl-5 border border-[#eee] p-4 lg:p-6 xl:p-10 rounded-xl rounded-tl-none shadow-md ml-auto -mt-[20%] relative z-10 bg-white">
                <h2 className="h3">About <span className="text-primary">Us</span></h2> 
                <p>
                  Welcome to Housejourney, where we turn dreams into homes. We are a passionate team of architects, designers, builders and service providers dedicated to crafting exceptional living spaces that reflect the unique vision and lifestyle of our clients. With a relentless commitment to quality, innovation, and customer satisfaction, we take pride in creating houses that stand the test of time.
                </p>
                <div className="mt-5"> 
                  <Link href={"/about"} className="btn-primary !rounded-full !px-8">Know More</Link>
                </div>
              </div>
            </div>
            {/* flex */}

            
          </div>
          {/* container */}
        </section>
        {/* about wrapper end */}

        {/* Services Wrapper Start */}
        <Whatwedo />
        {/* Services Wrapper End */}

        <div className="text-center py-6 mb-6"> 
          <Link href={"/contact"} className="text-lg md:text-xl lg:text-2xl font-bold bg-primary text-dark uppercase px-7 lg:px-9 py-4 lg:py-5 rounded-xl inline-flex items-center hover:bg-secondary hover:text-primary">
            <TbClipboardCheck className="text-2xl lg:text-3xl xl:text-4xl" />
            <span className="pl-3 tracking-wider">Get Started</span>
          </Link>
        </div>

      

        {/* Tools wrapper start */}
        <section className="py-10 sm:py-14 md:py-16 lg:py-20 hidden">
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

        {/* Blog wrapper start */}
        <section className="py-10 md:mb-10 hidden">
          <div className="container">
            <h2 className="h2 text-center">Blogs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="shadow p-1.5 rounded-md">
                <Link href={"/"} className="block">
                  <Image
                    src={"/images/blog/fly-ash-material-bricks.webp"}
                    width={500} height={300} alt="blog thumbnail"
                    className="w-full rounded-md" 
                  />
                </Link>
                <div className="pt-4 md:pt-5 px-3">
                  <h3 className="text-lg sm:text-xl font-medium mb-2">
                    <Link href={'/blog/fly-ash-material-bricks'} className="text-dark">The Power of Fly Ash Material Bricks</Link>
                  </h3>
                  <p className="text-sm text-[#707070] ellipses-3 font-light">The construction industry is undergoing a significant transformation with the emergence of innovative building materials that prioritize sustainability and efficiency. Among these groundbreaking materials, fly ash bricks have taken centre stage, revolutionizing the way we build. </p>
                </div>
              </div>
              <div className="shadow p-1.5 rounded-md">
                <Link href={"/blog/constructing-green-homes"} className="block">
                  <Image
                    src={"/images/blog/constructing-green-homes.webp"}
                    width={500} height={300} alt="blog thumbnail"
                    className="w-full rounded-md" 
                  />
                </Link>
                <div className="pt-4 md:pt-5 px-3">
                  <h3 className="text-lg sm:text-xl font-medium mb-2">
                    <Link href={'/blog/constructing-green-homes'} className="text-dark">Constructing Green homes</Link>
                  </h3>
                  <p className="text-sm text-[#707070] ellipses-3 font-light">The construction industry is undergoing a significant transformation with the emergence of innovative building materials that prioritize sustainability and efficiency. Among these groundbreaking materials, fly ash bricks have taken centre stage, revolutionizing the way we build. </p>
                </div>
              </div>
              <div className="shadow p-1.5 rounded-md">
                <Link href={"/blog/home-automation"} className="block">
                  <Image
                    src={"/images/blog/home-automation.webp"}
                    width={500} height={300} alt="blog thumbnail"
                    className="w-full rounded-md" 
                  />
                </Link>
                <div className="pt-4 md:pt-5 px-3">
                  <h3 className="text-lg sm:text-xl font-medium mb-2">
                    <Link href={'/blog/home-automation'} className="text-dark">Embracing the Future: The Encouraging Shift Towards Home Automation</Link>
                  </h3> 
                  <p className="text-sm text-[#707070] ellipses-3 font-light">The construction industry is undergoing a significant transformation with the emergence of innovative building materials that prioritize sustainability and efficiency. Among these groundbreaking materials, fly ash bricks have taken centre stage, revolutionizing the way we build. </p>
                </div>
              </div>
            </div>
          </div>
          {/* container */}
        </section>
        {/* Blog wrapper end */}
    </main>
  )
}
