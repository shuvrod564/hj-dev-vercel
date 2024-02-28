import { Select } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { TiLocation } from 'react-icons/ti'

export const metadata = {
    title: "Contact us | House Journey"
}

const page = () => {
  return (
    <main>
        {/* header wrapper start */}
        <header className="bg-[#F4EFE9] relative lg:h-[340px] sm:h-[300px] h-[200px] flex items-center">
            <div className="container">
                <div className="w-full lg:w-[40%] py-10 relative z-10 text-center lg:text-start">
                    <h1 className="h2 !text-white lg:!text-dark">Contact <span className="text-white lg:text-primary"> Us</span></h1>
                    <p className="lg:text-[#333] text-white text-sm sm:text-base lg:text-lg">Questions? We&apos;re here to help.</p>
                </div>
                <div className="absolute top-0 right-0 w-full lg:w-[54%] lg:h-[340px] sm:h-[300px] h-[200px] z-0" style={{boxShadow:"inset 0 0 0 15000px rgba(0,0,0,0.5)"}}> 
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#f4efe9] to-[#0000003d]"></div>
                    <Image
                        src={"/images/banners/contact-bg.webp"}
                        width={1200} height={400}
                        alt="Image"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>
        </header>
        {/* header wrapper end */}

        {/* info wrapper start */}
        <div className="py-10 md:py-16 lg:py-20 bg-[#f9f9f9]">
            <div className="container">
                <div className="shadow-md border border-[#eee] p-2 rounded-xl bg-white"> 
                    <div className="flex flex-wrap flex-row">
                        <div className="w-full lg:w-[40%] lg:pr-8 flex">
                            <div className="bg-primary bg-[url('/images/contact/contact-thumbnail.webp')] bg-no-repeat bg-cover bg-top p-8 rounded-xl w-full relative overflow-hidden min-h-[22rem]">
                                {/* <h2 className="text-white h3 lg:mt-7">Talk to Us</h2>
                                <p className="text-base">
                                    If you have any questions, comments, feedback or would like to know more about Housejourney, please feel free to contact us.
                                </p>

                                <ul className="mt-12 relative z-10">
                                    <li className="flex mb-3 sm:mb-4 md:mb-5">
                                        <figure className="w-8 pt-2">
                                            <FaPhoneAlt className="text-base" />
                                        </figure>
                                        <div className="w-[calc(100%-32px)]">
                                            <Link href={"tel:+91xxxxxxx"} className="text-lg">+91 xxxxxxx</Link>
                                        </div>
                                    </li>
                                    <li className="flex mb-3 sm:mb-4 md:mb-5">
                                        <figure className="w-8 pt-2">
                                            <MdEmail />
                                        </figure>
                                        <div className="w-[calc(100%-32px)]">
                                            <Link href={"mailto:info@housejourney.in"} className="text-lg">info@housejourney.in</Link>
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
                                </ul> */}

                                <div className="w-40 h-40 rounded-full bg-[#fd99369b] absolute -bottom-5 -right-5 z-0"></div>
                            </div>
                        </div>


                        <div className="w-full lg:w-[60%]">
                            <div className="p-4 sm:p-5 md:p-6">
                                <form action="#" className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-y-5">
                                    <div>
                                        <label htmlFor="first_name" className="block text-sm mb-2 text-[#393838]">First Name</label>
                                        <input 
                                            type="text" 
                                            id="first_name" 
                                            className="form-control" 
                                            placeholder="Enter your first name" 
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone_num" className="block text-sm mb-2 text-[#393838]">Phone Number</label>
                                        <input 
                                            type="text" 
                                            id="phone_num" 
                                            className="form-control" 
                                            placeholder="Enter your mobile number" 
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email_address" className="block text-sm mb-2 text-[#393838]">Email Address</label>
                                        <input 
                                            type="text" 
                                            id="email_address" 
                                            className="form-control" 
                                            placeholder="Enter your email address" 
                                            required 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="location" className="block text-sm mb-2 text-[#393838]">Location</label>
                                        <input 
                                            type="text" 
                                            id="location" 
                                            className="form-control" 
                                            placeholder="Enter your location " 
                                            required 
                                        />
                                    </div> 
                                    <div>
                                        <label htmlFor="location" className="block text-sm mb-2 text-[#393838]">Services</label>
                                        <Select
                                            defaultValue="Designs"
                                            style={{
                                                width: '100%',
                                            }}
                                            size='large'
                                            // onChange={handleChange}
                                            options={[
                                                {
                                                    label: 'Designs',
                                                    value: 'Designs',
                                                },
                                                {
                                                    label: 'Architect',
                                                    value: 'Architect',
                                                }, 
                                                {
                                                    label: 'Supplier',
                                                    value: 'Supplier',
                                                }, 
                                                {
                                                    label: 'LRC',
                                                    value: 'LRC',
                                                }, 
                                                {
                                                    label: 'Project management',
                                                    value: 'Project management',
                                                },  
                                                {
                                                    label: 'Financial Service',
                                                    value: 'Financial Service',
                                                },  
                                            ]}
                                        />
                                    </div> 
                                    <div className="md:col-span-2">
                                        <label htmlFor="message" className="block text-sm mb-2 text-[#393838]">Message</label>
                                        <textarea name="message" id="message" cols="30" rows="4" className="form-control" placeholder="Write your message here"></textarea>
                                    </div>
                                    <div className="md:col-span-2 text-right">
                                        <button className="btn-primary tracking-wider md:!px-10 md:!py-4 md:!text-lg">Submit</button>
                                    </div>
                                </form> 
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
