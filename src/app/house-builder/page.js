import { PageHeader } from '@components/components/common/PageHeader'
import { HouseBuilderProcessData } from '@components/components/data/HouseBuilderProcessData'
import { ProcessDiagram } from '@components/components/widgets/ProcessDiagram'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react' 
import { TbClipboardCheck } from 'react-icons/tb' 

export const metadata = {
    title: "House Builder"
}

const page = () => {
  return (
    <main>
        {/* header wrapper start */} 
        <PageHeader
            title='House Builder'
            description="Entrust us to partner you on this journey and experience the convenience and joy – as we enable professionals to deliver your dream home via the House Journey platform !"
            image="/images/banners/house-builder.webp"
        />
        {/* header wrapper end */}

        {/* info wrapper start */}
        <div className="py-10 sm:py-12 md:py-16 lg:py-20 scroller">
            <div className="container">
                <h2 className="h3 text-center !mb-12 lg:!mb-16">Steps to Building <br /> your <span className="text-primary">Dream House</span></h2>

                <ProcessDiagram data={HouseBuilderProcessData} />
                   
             
                <div className="text-center mt-16">
                    <Link href={"/contact"} className="text-lg md:text-xl lg:text-2xl font-bold bg-primary text-dark uppercase px-7 lg:px-9 py-4 lg:py-5 rounded-xl inline-flex items-center hover:bg-secondary hover:text-primary">
                        <TbClipboardCheck className="text-2xl lg:text-3xl" />
                        <span className="pl-3 tracking-wider">Get Started</span>
                    </Link>
                </div>
            </div>
            {/* container */}
        </div>
        {/* info wrapper end */}
 
    </main>
  )
}

export default page
