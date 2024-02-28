import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function ComingSoon(props) {
    

    return (
        <>
            <div className="py-20 lg:py-32 text-center">
                <div className="container">
                    <Image src={"/images/banners/coming-soon-thumb.jpg"} width={400} height={400} 
                        alt="Coming Soon"
                        className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full object-cover object-center mx-auto"
                    />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 mt-10">Coming Soon</h1>
                    <h2>We&apos;re working hard to bring you someting awsome. Stay tuned!</h2>
                    <div className="flex flex-wrap flex-row gap-3 justify-center mt-5">
                        <Link href={"/"} className="btn-primary">Back to Home</Link>
                        <Link href={"/contact"} className="btn-dark">Contact Us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
