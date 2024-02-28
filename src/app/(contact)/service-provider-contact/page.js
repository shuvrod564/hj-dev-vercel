import { PageHeader } from '@components/components/common/PageHeader'
import { ServiceProviderContactForm } from '@components/components/forms/serviceProviderContactForm'
import { Select } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react' 

export const metadata = {
    title: "Contact us | House Journey"
}

const page = () => {
  return (
    <main>
        {/* header wrapper start */} 
        <PageHeader 
            title='Service Provider Contact Form'
            description="Questions? We&apos;re here to help."
            description_class="!text-center lg:!text-left"
            image="/images/banners/contact-bg.webp"
        />
        {/* header wrapper end */}

        {/* info wrapper start */}
        <div className="pb-10 md:pb-16 lg:-mt-80 sm:-mt-20 -mt-10 relative z-20">
            <div className="container"> 
                <div className="shadow-md border border-[#eee] p-2 rounded-xl bg-white  xl:max-w-[600px] lg:max-w-[500px] ml-auto"> 
                    <div className="flex flex-wrap flex-row">
                        {/* <div className="w-full lg:w-[50%] lg:pr-2 flex">
                            <div className="bg-primary bg-[url('/images/contact/service-provider.webp')] bg-no-repeat bg-cover bg-top p-8 rounded-xl w-full relative overflow-hidden min-h-[22rem]"> 
                            </div>
                        </div>  */}
                        <div className="w-full mt-6 lg:mt-0">
                            <div className="p-4 sm:p-5 md:p-6">
                                <ServiceProviderContactForm />
                                {/* <h2 className="text-xl md:text-2xl text-dark font-semibold mb-5">Service Provider <span className="text-primary block">Contact Form</span></h2> */}
                                
                            </div>
                        </div>
                    </div>
                    {/* flex */}
                </div>
            </div>
        </div>
        {/* info wrapper end */}
    </main>
  )
}

export default page
