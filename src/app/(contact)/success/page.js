import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "Thank You"
}

const Page =()=> {
    return(
        <main>
            <div className="container py-12 md:py-20 lg:py-24 text-center">
                <Image src={"/images/icons/check-gif.gif"} width={300} height={300} alt="thumb" className="mx-auto" />

                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 mt-10">Thank You</h1>
                <h2 className="mx-auto max-w-[700px]">Thank you for reaching out to us. Your message has been successfully submitted. Our team will review it and get back to you as soon as possible.</h2>
                     
            </div>
        </main>
    )
}

export default Page