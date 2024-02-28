   
import React from 'react'
import BlogCard from './BlogCard' 
import BlogSideBar from './BlogSideBar'  
import { PageHeader } from '@components/components/common/PageHeader'

export const metadata = {
    title: "Blogs",
    description: "Blog meta description"
}
 

const page = () => {
  return (
    <main>
         
        {/* header wrapper start */} 
        <PageHeader
            title='Blogs'
            description="Embark on a seamless journey with us. Let professionals on the House Journey platform bring your dream home to life effortlessly and joyfully!"
            image="/images/banners/blog-header.webp"
        />
        {/* header wrapper end */}

         {/* Cart Listing wrapper start */}
         <section className="py-10 lg:pt-16">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-[70%] lg:pr-5">
                         <BlogCard />
                    </div>
                    {/* col */}
                    <div className="w-full lg:w-[30%] lg:pl-5">
                        <BlogSideBar />


                    </div>
                    {/* col */}
                </div>
                {/* flex */}
            </div>
            {/* container */}
        </section>
        {/* Cart Listing wrapper end */}
      
    </main>
  )
}

export default page
