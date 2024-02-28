
import { ComingSoon } from '@components/components/ComingSoon'
import { PageHeader } from '@components/components/common/PageHeader'
import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "Design Library"
}


const Page =()=> {
    return(
        <main>
            
            {/* header wrapper start */} 
            <PageHeader
                title='Design Library'
                description="Welcome to our Design Library, your one-stop destination for exquisite design layouts tailored for house-building projects. Whether you&apos;re embarking on a new construction journey or seeking inspiration for a renovation, our curated collection of design layouts promises to elevate your vision and bring your dream home to life."
                image="/images/banners/design-library.webp"
            />
            {/* header wrapper end */}

            <div className="py-10 md:py-16 text-justify">
                <div className="container">
                    <p>
                        Explore our diverse range of design layouts, meticulously crafted by seasoned architects and designers, each offering a unique blend of functionality, aesthetics, and innovation. From contemporary chic to timeless classics, our library showcases a variety of styles to suit every taste and preference.
                    </p>
                    <p>
                        With our intuitive interface, browsing through our design library is a breeze. Simply navigate through the tabs to discover floor plans, elevation drawings, interior concepts, and more. Each design layout is accompanied by detailed descriptions, high-resolution images, and 3D renderings, providing you with a comprehensive understanding of the space.
                    </p>
                    <p>
                        But why stop there? Take advantage of our &quot;Talk to an Architect&quot; feature to unlock a world of customization possibilities. Our team of experienced architects and designers is here to collaborate with you, turning your ideas and preferences into bespoke design solutions. Whether you have specific requirements or unique challenges to overcome, we&apos;re here to listen, advise, and create a tailored design that exceeds your expectations.
                    </p>
                    <p>
                        At our Design Library, we understand that your home is more than just a structure – it&apos;s a reflection of your lifestyle, personality, and aspirations. That&apos;s why we&apos;re dedicated to providing you with the tools, resources, and expertise you need to embark on your building journey with confidence and excitement.
                    </p>
                    <p>
                        Ready to transform your house-building dreams into reality? Explore our Design Library today and let&apos;s embark on this creative journey together.
                    </p>
                
 

                </div>
            </div>
        </main>
    )
}

export default Page