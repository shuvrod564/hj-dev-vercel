 
import React from 'react'
import PopularPost from './PopularPost'
import Link from 'next/link'

const Posts =[ 
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

const Categories = [
    { key:'1', name:"Teamwork", posts: "21" },
    { key:'2', name:"Ideas", posts: "13" },
    { key:'3', name:"Workspace", posts: "22" },
    { key:'4', name:"Coding", posts: "33" },
    { key:'5', name:"Meeting", posts: "08" },
    { key:'16', name:"Business Tips", posts: "19" },
]

const Tags = [
    { key:'1', name:"Still Life" },
    { key:'2', name:"Fun" },
    { key:'3', name:"Electronics" },
    { key:'4', name:"Nature" },
    { key:'5', name:"Urban" }, 
]

const Archives = [
    { key:'1', name:"February 2019" },
    { key:'2', name:"January 2019" },
    { key:'3', name:"December 2018" },
    { key:'4', name:"November 2018" },
    { key:'5', name:"October 2018" }, 
]

const BlogSideBar = () => {
  return (
    <>
      <div className="mb-6">
            <input 
                type="text" 
                className="h-14 w-full border border-[rgba(107,107,107,0.3)] rounded-full rounded-tr-none bg-[url('/images/icons/search.svg')] bg-no-repeat bg-[20px_20px] text-[#454545] pl-5 pr-10"
                style={{backgroundPosition:"center right 1rem", backgroundColor:"#FDFDFF"}}
                placeholder="Search..."
            />

        </div>

        <div className="border border-[rgba(107,107,107,0.3)] rounded-3xl rounded-tr-none hover:rounded-3xl transition-all mt-5 p-3 sm:p-4 lg:p-5 bg-[#FDFDFF]">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-dark font-bold pb-3 border-b border-border_color mb-5 uppercase !mt-0">About Us</h3>
            <p className="text-sm md:text-base text-[#454545]">Welcome to Housejourney, where we turn dreams into homes. We are a passionate team of architects, designers, builders and service providers dedicated to crafting exceptional living spaces that reflect the unique vision and lifestyle of our clients. </p>
        </div>
        {/* <div className="mt-4">
            <SocialLinks type="colored" />
        </div> */}

        <div className="border border-[rgba(107,107,107,0.3)] rounded-3xl rounded-tr-none hover:rounded-3xl transition-all mt-5 p-3 sm:p-4 lg:p-5 bg-[#FDFDFF]">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-dark font-bold pb-3 border-b border-border_color mb-5 uppercase !mt-0">Popular Posts</h3>
            <ul className="">
                {
                    Posts.map((item)=> {
                        return <PopularPost key={item.key} item={item} />
                    })
                }
                
            </ul>
        </div>

        <div className="border border-[rgba(107,107,107,0.3)] rounded-3xl rounded-tr-none hover:rounded-3xl transition-all mt-5 p-3 sm:p-4 lg:p-5 bg-[#FDFDFF] hidden">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-dark font-bold pb-3 border-b border-border_color mb-5 uppercase">CATEGORIES</h3>
            <ul className="">
                {
                    Categories.map((item)=> {
                        return <li key={item.key} className="mb-2">
                            <Link href={"/blog"} className="text-[#454545] hover:text-primary hover:underline">{item.name} <span>({item.posts})</span></Link> 
                        </li>
                    })
                } 
            </ul>
        </div>

        <div className="border border-[rgba(107,107,107,0.3)] rounded-3xl rounded-tr-none hover:rounded-3xl transition-all mt-5 p-3 sm:p-4 lg:p-5 bg-[#FDFDFF] hidden">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-dark font-bold pb-3 border-b border-border_color mb-5 uppercase">Tags</h3>
            <ul className="flex flex-wrap">
                {
                    Tags.map((item)=> {
                        return <li key={item.key} className="mb-3 mr-3">
                            <Link href={"/blog"} className="text-[#454545] bg-[#E6E6E6] px-4 py-2.5 rounded-full inline-block hover:text-white hover:bg-primary"># {item.name}</Link> 
                        </li>
                    })
                } 
            </ul>
        </div>

        <div className="border border-[rgba(107,107,107,0.3)] rounded-3xl rounded-tr-none hover:rounded-3xl transition-all mt-5 p-3 sm:p-4 lg:p-5 bg-[#FDFDFF] hidden">
            <h3 className="text-lg sm:text-xl lg:text-2xl text-dark font-bold pb-3 border-b border-border_color mb-5 uppercase">Archive</h3>
            <ul className="">
                {
                    Archives.map((item)=> {
                        return <li key={item.key} className="mb-2">
                            <Link href={"/blog"} className="text-[#454545] inline-block hover:text-primary hover:underline"># {item.name}</Link> 
                        </li>
                    })
                } 
            </ul>
        </div>
    </>
  )
}

export default BlogSideBar
