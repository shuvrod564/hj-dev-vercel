import { PageHeader } from '@components/components/common/PageHeader' 
import { MonthlyPricingData, QuarterlyPricingData, YearlyPricingData } from '@components/components/data/ServiceProviderPricingData'
import { Pricing } from '@components/components/widgets/Pricing'
import React from 'react' 

export const metadata = {
    title: "Pricing Details",
    description: "Pricing Details for House Builders and Service Providers"
}

const Page =()=>{
    return(
        <main>
            <PageHeader
                title='Pricing Details'
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magni omnis praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur magni omnis praesentium."
                image="/images/banners/pricing-bg.webp"
            /> 
            
            <Pricing 
                monthlyData={MonthlyPricingData}
                quarterlyData={QuarterlyPricingData}
                yearlyData={YearlyPricingData}
                page="service-provider"
            />
        </main>
    )
}

export default Page