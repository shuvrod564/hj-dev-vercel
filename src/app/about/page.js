import { PageHeader } from '@components/components/common/PageHeader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiLogoLinkedin } from 'react-icons/bi'
import { TfiEmail } from 'react-icons/tfi'

export const metadata = {
    title: "About House Journey"
}

const teamdata = [
    {
        key: "1",
        name: "Mr. Nilanjan Bose",
        designation: "Director",
        description: "A Civil Engineer with a Master’s Degree in Management with more than 25 years of professional experience in the fields of construction, project management, building materials, and construction chemicals",
        linkedin_profile: "https://www.linkedin.com/in/nilanjan-bose-08073910/",
        email_address: "neilb0032@gmail.com",
        image: "/images/team/Nilanjan-Bose.jpg"
    },
    {
        key: "2",
        name: "Mr. Tapan Dash",
        designation: "Director",
        description: "A Real Estate professional with a degree in Civil Eng., a Master's in Construction Management from NICMAR & MBA in Finance. With over 25 years of rich experience in real estate & retail development, Project Management, Project Planning, Investment Management & Asset Management",
        linkedin_profile: "https://www.linkedin.com/in/tapan-dash-540654b/",
        email_address: "tapand1970@gmail.com",
        image: "/images/team/Tapan-Dash.jpg"
    },
    {
        key: "3",
        name: "Mr. Kamal Kishore Das",
        designation: "Director",
        description: "Serial Entrepreneur - addressing market opportunities at the intersection of financial services and data.",
        linkedin_profile: "https://www.linkedin.com/in/kamalkishoredas/",
        email_address: "kamalkdas@openfin.in",
        image: "/images/team/Kamal-K-Das.jpg"
    },
]

const page = () => {
  return (
    <main>
        {/* header wrapper start */} 
        <PageHeader
            title='About House Journey'
            description=""
            image="/images/banners/about-thumbnail.webp"
        />
        {/* header wrapper end */}

        

        {/* info wrapper start */}
        <div className="py-10 md:py-14 lg:pb-20 text-base">
            <div className="container">
                <div className="grid gap-0 grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden">
                    <div className="bg-primary flex items-center">
                        <div className="w-full p-6 md:p-9 lg:p-12"> 
                            <h2 className="h2 mb-4">Our Goal</h2>
                            <p>Welcome to Housejourney, where we turn dreams into homes. We are a passionate team of architects, designers, builders and service providers dedicated to crafting exceptional living spaces that reflect the unique vision and lifestyle of our clients. With a relentless commitment to quality, innovation, and customer satisfaction, we take pride in creating houses that stand the test of time.</p>
                            <p>At Housejourney, we understand that a home is more than just a structure; it is a sanctuary where memories are made and cherished for generations. Whether it&apos;s a cozy cottage or a luxurious estate, we approach every project with meticulous attention to detail and a deep understanding of the emotional significance of creating a personalized living space.</p>
                        </div>
                    </div>
                    <div> 
                        <Image
                            src={"/images/banners/office.webp?v=1"}
                            width={700} height={500}
                            alt="Company Goal" className="w-full"
                        />
                    </div>
                </div>

                {/* <Image
                    src={"/images/banners/company-team.webp"}
                    width={1200} height={500}
                    alt="Company Goal" className="w-full"
                /> */}

                <p className="text-primary uppercase font-medium mt-16">OUR ADVANTAGES</p>
                <h2 className="text-dark h2 uppercase">WHY CHOOSE House Journey</h2>

                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-14 mt-14"> 
                    <div className=""> 
                        <div className="flex mb-3">
                            <figure className="w-16 h-16 border-2 border-primary rounded-full flex justify-center items-center">
                                <Image src={"/images/icons/diagram.png"} width={32} height={32} alt="User" />
                            </figure> 
                            <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 font-bold w-[calc(100%-64px)] pl-5">Our Philosophy</h2>
                        </div>
                        <p className="text-sm lg:text-base text-[#707070]">We believe that every home tells a story. With this philosophy at the heart of our work, we strive to build not just houses, but havens that encapsulate the essence of the individuals and families we serve. From the initial conceptualization to the final touches, we prioritize open communication, transparency, and collaboration, ensuring that every aspect of the building process reflects our clients&apos; desires and aspirations.</p>  
                    </div>
                    <div className=""> 
                        <div className="flex mb-3">
                            <figure className="w-16 h-16 border-2 border-primary rounded-full flex justify-center items-center">
                                <Image src={"/images/icons/man.png"} width={36} height={36} alt="User" />
                            </figure> 
                            <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 font-bold w-[calc(100%-64px)] pl-5">Our Expertise</h2>
                        </div>
                        <p className="text-sm lg:text-base text-[#707070]">With years of experience in the construction industry, our team boasts a wealth of knowledge and expertise in architectural design, structural engineering, and sustainable building practices. We leverage the latest technologies and sustainable materials to create homes that are not only visually stunning but also eco-friendly and energy-efficient.</p>  
                    </div>
                    <div className=""> 
                        <div className="flex mb-3">
                            <figure className="w-16 h-16 border-2 border-primary rounded-full flex justify-center items-center">
                                <Image src={"/images/icons/partnership.png"} width={38} height={38} alt="User" />
                            </figure> 
                            <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 font-bold w-[calc(100%-64px)] pl-5">Our Commitment</h2>
                        </div>
                        <p className="text-sm lg:text-base text-[#707070]">At Housejourney, our commitment goes beyond the completion of a project. We are dedicated to building lasting relationships with our clients, providing ongoing support and guidance even after the keys have been handed over. Our goal is to ensure that every homeowner feels not just satisfied, but truly delighted with their new living space.</p>  
                    </div>
                    <div className=""> 
                        <div className="flex mb-3">
                            <figure className="w-16 h-16 border-2 border-primary rounded-full flex justify-center items-center">
                                <Image src={"/images/icons/goal.png"} width={38} height={38} alt="User" />
                            </figure> 
                            <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 font-bold w-[calc(100%-64px)] pl-5">Our Vision</h2>
                        </div>
                        <p className="text-sm lg:text-base text-[#707070]">Join us on this exciting Housejourney, where we transform your vision into a tangible, timeless reality. Experience the joy of building a home that resonates with your unique story and lifestyle.</p>  
                    </div>
                </div>
     


            </div>
        </div>
        {/* info wrapper end */}

        {/* Team wrapper start */}
        <div className="py-10 md:py-14 lg:py-20 text-base bg-bg-light">
            <div className="container">
                <h2 className="h2 text-center uppercase mb-5 md:mb-8 lg:mb-12">Our Team</h2>

                <div className="max-w-[992px] mx-auto mt-5"> 
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-7 gap-y-9 justify-center">
                        {
                            teamdata.map((item)=>{
                                return (
                                    <div key={item.key} className="flex">
                                        <div className="text-center flex flex-col relative pb-16">  
                                            <Image
                                                src={item.image}
                                                width={312} height={308}
                                                alt={item.name}
                                                className="team__thumbnail w-full"
                                            />
                                            <h3 className="text-lg md:text-xl font-bold text-dark mt-4">{item.name}</h3>
                                            <p className="text-base font-medium text-[#707070]">{item.designation}</p>
                                            <p className="text-sm text-[#333] text-center">{item.description}</p>
                                            <div className="flex justify-center gap-3 mt-5 absolute bottom-0 left-0 w-full">
                                                <Link href={`mailto:${item.email_address}`} className="w-12 h-12 rounded-full inline-flex justify-center items-center border border-[#ddd] text-primary text-xl hover:bg-primary hover:text-white">
                                                    <TfiEmail />
                                                </Link>
                                                <Link href={item.linkedin_profile} target="_blank" className="w-12 h-12 rounded-full inline-flex justify-center items-center border border-[#ddd] text-primary text-2xl hover:bg-primary hover:text-white">
                                                    <BiLogoLinkedin />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
            {/* container */}
        </div>
        {/* Team wrapper end */}
        
    </main>
  )
}

export default page
