import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsChatRightDots } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineCalendar } from 'react-icons/hi'

const Data = [
    {
        key: 3,
        title: "Embracing the Future: The Encouraging Shift Towards Home Automation",
        thumbnail: "/images/blog/home-automation.webp",
        desc: "The construction industry is undergoing a significant transformation with the emergence of innovative building materials that prioritize sustainability and efficiency. Among these groundbreaking materials, fly ash bricks have taken centre stage, revolutionizing the way we build.",
        date: "October 20, 2023",
        author: "Shuuvro",
        like: '44',
        comment: "3",
        slug: "/blogs/home-automation"
    },
    {
        key: 2,
        title: "Constructing Green homes",
        thumbnail: "/images/blog/constructing-green-homes.webp",
        desc: "The construction industry is undergoing a significant transformation with the emergence of innovative building materials that prioritize sustainability and efficiency. Among these groundbreaking materials, fly ash bricks have taken centre stage, revolutionizing the way we build.",
        date: "October 15, 2023",
        author: "Shuuvro",
        like: '44',
        comment: "3",
        slug: "/blogs/constructing-green-homes"
    },
    {
        key: 1,
        title: "The Power of Fly Ash Material Bricks",
        thumbnail: "/images/blog/fly-ash-material-bricks.webp",
        desc: "The construction industry is undergoing a significant transformation with the emergence of innovative building materials that prioritize sustainability and efficiency. Among these groundbreaking materials, fly ash bricks have taken centre stage, revolutionizing the way we build.",
        date: "October 01, 2023",
        author: "Shuuvro",
        like: '44',
        comment: "3",
        slug: "/blogs/fly-ash-material-bricks"
    }, 
    
]

const BlogCard = () => {
  return (
    <>
        { 
            Data.map((item)=>{
                return <div key={item.key} className="border border-border-color rounded-lg mb-4 lg:mb-6 overflow-hidden">
                <Link href={item.slug} className="block">
                    <Image src={item.thumbnail} width={880} height={404} alt={"alt text"} className="w-full h-[180px] lg:h-[360px] object-cover object-center" />
                </Link>
                <div className="p-4">
                    <div className="inline-flex items-center mr-4 sm:mr-4 md:mr-6 sm:mt-2 mb-3 text-[#808080]">
                        <HiOutlineCalendar />
                        <span className="pl-2 ">{item.date}</span>
                    </div>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
                        <Link href={item.slug} className="text-dark hover:text-primary hover:underline">
                            {item.title}
                        </Link>
                    </h2>
                    <p className="text-sm lg:text-base text-[#3C3C3C]">{item.desc}</p>
                    {/* <div className="flex flex-wrap mt-4">
                        
                    
                        <div className="inline-flex items-center mr-4 sm:mr-4 md:mr-6 mb-3">
                            <BiUser />
                            <span className="pl-2 text-[#474646]">By {item.author}</span>
                        </div>
                        <div className="inline-flex items-center mr-4 sm:mr-4 md:mr-6 mb-3">
                            <BsChatRightDots />
                            <span className="pl-2 text-[#474646]">{item.comment} Comments</span>
                        </div>
                        <div className="inline-flex items-center mr-4 sm:mr-4 md:mr-6 mb-3">
                            <AiOutlineHeart />
                            <span className="pl-2 text-[#474646]">{item.like}</span>
                        </div>
                    </div> */}
                </div>
            </div>
            })
            
        }
    </>
  )
}

export default BlogCard
