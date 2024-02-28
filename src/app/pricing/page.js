import { PageHeader } from '@components/components/common/PageHeader'
import { MonthlyPricingData, QuarterlyPricingData, YearlyPricingData } from '@components/components/data/PricingData'
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
                description="Explore Our Flexible Pricing Options for Every Plan"
                image="/images/banners/pricing-bg.webp"
            /> 
            
            <Pricing 
                monthlyData={MonthlyPricingData}
                quarterlyData={QuarterlyPricingData}
                yearlyData={YearlyPricingData}
            />
        </main>
    )
}

export default Page