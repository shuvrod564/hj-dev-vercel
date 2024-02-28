import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuUserPlus2 } from 'react-icons/lu'

export function PageHeader({title, description, image, page='', description_class=''}) {
    

    return (
        <>
            <header className="bg-[#F4EFE9] relative lg:h-[460px] sm:h-[450px] h-[400px] flex items-center">
                <div className="container">
                    <div className="w-full lg:w-[60%] py-10 relative z-10 text-center lg:text-start">
                        <h1 className="h2 !text-white lg:!text-dark !leading-[1.15]">{title}</h1>
                        <p className={`text-sm sm:text-base lg:text-lg text-justify text-white lg:text-dark ${description_class}`}>
                            {description}
                        </p> 
                        {
                            page=='service-provider' && (
                                <Link href={"/service-provider-type"} className="text-base xl:text-lg font-semibold bg-primary text-dark uppercase px-6 py-3 rounded-md inline-flex items-center mt-4 hover:bg-secondary hover:text-primary">
                                    <LuUserPlus2 className="text-2xl lg:text-3xl" />
                                    <span className="pl-3 tracking-wider">Join Now</span>
                                </Link>
                            )
                        }
                    </div>
                    {/* lg:h-[400px] sm:h-[300px] h-[250px] */}
                    <div className="absolute top-0 right-0 w-full lg:w-[54%] h-full z-0" style={{boxShadow:"inset 0 0 0 15000px rgba(0,0,0,0.5)"}}> 
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.55)] lg:bg-gradient-to-r from-[#f4efe9] to-[#0000003d]"></div>
                        <Image
                            src={image}
                            width={1200} height={400}
                            alt="Image"
                            className="w-full h-full object-cover object-right"
                        />
                    </div>
                </div>
            </header>
        </>
    )
}
