import { PageHeader } from '@components/components/common/PageHeader'
import { ContactForm } from '@components/components/forms/contactForm' 
import Link from 'next/link'
import React from 'react' 
import { MdEmail } from 'react-icons/md'
import { TiLocation } from 'react-icons/ti'

export const metadata = {
    title: "Contact us | House Journey"
}

const page = () => { 


  return (
    <main>
        {/* header wrapper start */} 
        <PageHeader
            title='Contact Us'
            description="Questions? We&apos;re here to help."
            image="/images/banners/contact-bg.webp"
        />
        {/* header wrapper end */}

        {/* info wrapper start */}
        <div className="py-10 md:py-16 lg:py-20 bg-[#f9f9f9]">
            <div className="container">
                <div className="shadow-md border border-[#eee] p-2 rounded-xl bg-white"> 
                    <div className="flex flex-wrap flex-row">
                        <div className="w-full lg:w-[40%] lg:pr-8 flex">
                            <div className="bg-primary p-8 rounded-xl w-100 relative overflow-hidden">
                                <h2 className="text-white h3 lg:mt-7">Talk to Us</h2>
                                <p className="text-base">
                                    If you have any questions, comments, feedback or would like to know more about Housejourney, please feel free to contact us.
                                </p>

                                <ul className="mt-12 relative z-10">
                                    {/* <li className="flex mb-3 sm:mb-4 md:mb-5">
                                        <figure className="w-8 pt-2">
                                            <FaPhoneAlt className="text-base" />
                                        </figure>
                                        <div className="w-[calc(100%-32px)]">
                                            <Link href={"tel:+91xxxxxxx"} className="text-lg">+91 xxxxxxx</Link>
                                        </div>
                                    </li> */}
                                    <li className="flex mb-3 sm:mb-4 md:mb-5">
                                        <figure className="w-8 pt-2">
                                            <MdEmail />
                                        </figure>
                                        <div className="w-[calc(100%-32px)]">
                                            <Link href={"mailto:contact@housejourney.in"} className="text-lg">contact@housejourney.in</Link>
                                        </div>
                                    </li>
                                    <li className="flex mb-3 sm:mb-4 md:mb-5">
                                        <figure className="w-8 pt-2">
                                            <TiLocation className="text-xl" />
                                        </figure>
                                        <div className="w-[calc(100%-32px)] text-base">
                                            STPI, 4, Samruddhi Venture Park, MIDC Central Road, Andheri (East), Mumbai-400093.
                                        </div>
                                    </li>
                                </ul>

                                <div className="w-40 h-40 rounded-full bg-[#fd9a36] absolute -bottom-5 -right-5 z-0"></div>
                            </div>
                        </div>


                        <div className="w-full lg:w-[60%]">
                            <div className="p-4 sm:p-5 md:p-6">
                                <ContactForm />
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
