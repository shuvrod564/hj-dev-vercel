import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const data = [
  {
    key: "1",
    title: "Knowledge Centre",
    desc: "All you need to know for building your House",
    slug: "/knowledge-center",
    thumbnail: "/images/services/Knowledge-Centre.webp"
  },
  {
    key: "2",
    title: "Design Ideas",
    desc: "Variety of designs for House building",
    slug: "/design-library",
    thumbnail: "/images/services/Design-Ideas.webp"
  },
  {
    key: "3",
    title: "Tools for Building your House",
    desc: "Understanding Tools for Building your House",
    slug: "/login",
    thumbnail: "/images/services/Construction-Management.webp"
  },
  {
    key: "4",
    title: "Service Providers Nearby",
    desc: "Local Service Professionals at your Fingertips",
    slug: "/contact",
    thumbnail: "/images/services/Service-Provider.webp"
  },
  {
    key: "5",
    title: "Home Financing & Insurance",
    desc: "Secure your home, finance worry-free",
    slug: "/contact",
    thumbnail: "/images/services/Home-Financing.webp"
  }, 
]

const Whatwedo = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-[#f9f9f9]">
        <div className="container">
            <h2 className="h2 text-center capitalize">what we do</h2> 

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-4 mt-8 md:mt-10 lg:mt-12">
              {
                data.map((item)=>{
                  return (
                    <div key={item.key} className="shadow p-1 rounded-lg bg-white">
                      <Link href={item.slug} className="block">
                        <Image src={item.thumbnail} width={307} height={192} alt="Knowledge Centre" className="w-full h-auto rounded-lg" />
                      </Link>
                      <div className="pt-3 sm:pt-4 px-2">
                        <h3 className="text-base font-semibold capitalize mb-2 !leading-[1.2] md:min-h-[2.5rem]">
                          <Link href={item.slug} className="text-dark hover:text-primary">{item.title}</Link>
                        </h3>
                        <p className="text-sm text-muted">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
              
               
              

            </div>
            {/* grid */}
        </div>
        {/* container */}
    </section>
  )
}

export default Whatwedo
