import React from 'react'    
import Link from 'next/link'
import { TbClipboardCheck } from 'react-icons/tb'
import { PageHeader } from '@components/components/common/PageHeader';
import { ProcessDiagram } from '@components/components/widgets/ProcessDiagram';
import { ServiceProviderStepsData } from '@components/components/data/ServiceProviderStepsData';
export const metadata = {
    title: "Service Provider"
}

const page = () => {
  return (
    <main>
        {/* header wrapper start */} 
        <PageHeader
            page="service-provider"
            title='Service Provider'
            description="Fueling your business with our cutting-edge lead generation tools, connecting you to motivated buyers."
            image="/images/banners/service-provider-bg.webp"
        />
        {/* header wrapper end */}

        

        {/* info wrapper start */}
        <div className="py-10 sm:py-12 md:py-16">
            <div className="container">
                <h2 className="h3 text-center !mb-12">Steps to Building your <br /> Business with <span className="text-primary">Housejourney</span></h2>
                <ProcessDiagram data={ServiceProviderStepsData} />

                <div className="text-center mt-16">
                    <Link href={"/service-provider-contact"} className="text-lg md:text-xl lg:text-2xl font-bold bg-primary text-dark uppercase px-7 lg:px-9 py-4 lg:py-5 rounded-xl inline-flex items-center hover:bg-secondary hover:text-primary">
                        <TbClipboardCheck className="text-2xl lg:text-3xl" />
                        <span className="pl-3 tracking-wider">Get Started</span>
                    </Link>
                </div>
            </div> 
        </div>
        {/* info wrapper end */}  

        
    </main>
  )
}

export default page
