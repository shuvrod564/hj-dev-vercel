import React from 'react' 
import BlogSideBar from '../BlogSideBar'
import Image from 'next/image'

export const metadata = {
    title: "Blog Title",
    descript:"Blog meta description"
}

const page = () => {
  return (
    <main>
       

        {/* Cart Listing wrapper start */}
        <section className="py-10 lg:pt-16">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-[70%] lg:pr-5">
                        <div className="text-[#3C3C3C]">
                            
                            <Image src={"/images/blog/blog-01.jpg"} width={880} height={404} alt={"alt text"} />
                            <div className="pt-4">
                                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 mt-4">
                                 Wholesale Delivered, Success Achieved
                                </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minus officiis deleniti non molestias. Provident, necessitatibus odit vel rem veritatis, optio iure molestiae velit, officiis consequatur quae id? Vero consectetur corrupti unde deserunt voluptatem vel fugit, laborum et magnam odio voluptas omnis ipsam expedita sapiente odit, aliquam reiciendis nemo esse beatae rem! Sint, accusantium aperiam.</p> <br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minus officiis deleniti non molestias. Provident, necessitatibus odit vel rem veritatis, optio iure molestiae velit, officiis consequatur quae id? Vero consectetur corrupti unde deserunt voluptatem vel fugit, laborum et magnam odio voluptas omnis ipsam expedita sapiente odit, aliquam reiciendis nemo esse beatae rem! Sint, accusantium aperiam.</p><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minus officiis deleniti non molestias. Provident, necessitatibus odit vel rem veritatis, optio iure molestiae velit, officiis consequatur quae id? Vero consectetur corrupti unde deserunt voluptatem vel fugit, laborum et magnam odio voluptas omnis ipsam expedita sapiente odit, aliquam reiciendis nemo esse beatae rem! Sint, accusantium aperiam.</p><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minus officiis deleniti non molestias. Provident, necessitatibus odit vel rem veritatis, optio iure molestiae velit, officiis consequatur quae id? Vero consectetur corrupti unde deserunt voluptatem vel fugit, laborum et magnam odio voluptas omnis ipsam expedita sapiente odit, aliquam reiciendis nemo esse beatae rem! Sint, accusantium aperiam.</p><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minus officiis deleniti non molestias. Provident, necessitatibus odit vel rem veritatis, optio iure molestiae velit, officiis consequatur quae id? Vero consectetur corrupti unde deserunt voluptatem vel fugit, laborum et magnam odio voluptas omnis ipsam expedita sapiente odit, aliquam reiciendis nemo esse beatae rem! Sint, accusantium aperiam.</p><br />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minus officiis deleniti non molestias. Provident, necessitatibus odit vel rem veritatis, optio iure molestiae velit, officiis consequatur quae id? Vero consectetur corrupti unde deserunt voluptatem vel fugit, laborum et magnam odio voluptas omnis ipsam expedita sapiente odit, aliquam reiciendis nemo esse beatae rem! Sint, accusantium aperiam.</p>
                                 
                            </div>
                        </div>
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
