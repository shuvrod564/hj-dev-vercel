 
import Image from 'next/image'
import React from 'react' 
import { PageHeader } from '@components/components/common/PageHeader'
import { ProcessDiagram } from '@components/components/widgets/ProcessDiagram'
import { KnowedgeCenterProcessData } from '@components/components/data/KnowedgeCenterProcessData'


export const metadata = {
    title: "Knowledge Center"
}

const Page =()=> {
    return(
        <main> 
            {/* header wrapper start */}
            <PageHeader 
                title='Knowledge Center'
                description="Welcome to our Knowledge Center, your one-stop destination for all things related to house building. Whether you&apos;re a seasoned contractor, a DIY enthusiast, or a homeowner embarking on a new project, our comprehensive resources are designed to equip you with the knowledge and insights you need to build your dream home with confidence."
                image="/images/banners/knowledge-center.webp"
            /> 
            {/* header wrapper end */}


            <div className="py-10 md:py-14 lg:py-20">
                <div className="container">
                    <p className="text-center font-medium">
                        Explore our curated collection of articles, guides, and tutorials covering every aspect of the house-building process, from planning and design to construction and beyond. Here&apos;s a glimpse of what you&apos;ll find in our Knowledge Center:
                    </p>

                    <ProcessDiagram data={KnowedgeCenterProcessData} />

                    
                    <p className="text-center mt-14">
                        Bookmark our Knowledge Center and check back regularly for new articles, tips, and resources to support your house-building journey. Whether you&apos;re a novice or a seasoned pro, we&apos;re here to empower you every step of the way. Let&apos;s build something incredible together!
                    </p>
                </div>
                {/* container */}
            </div>
        </main>
    )
}

export default Page