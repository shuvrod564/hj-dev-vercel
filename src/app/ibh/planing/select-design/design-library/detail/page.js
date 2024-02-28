import React from 'react'
import { Gallery } from './Gallery'
import { Button } from '@components/components/shared/Button'
import { HiOutlinePrinter } from 'react-icons/hi'
import { IoChevronBackCircleSharp, IoShareSocialOutline } from 'react-icons/io5'
import { RxDownload } from "react-icons/rx";
import { BiPhoneCall } from 'react-icons/bi'
import { FaEye } from 'react-icons/fa'
import { Back } from '@components/components/shared/Back'

const Page = () => {
    

    return (
        <main>
            <div className="py-8 md:py-12 lg:py-16">
                <div className="container"> 
                    <Back />
                    <div className="shadow-box rounded-xl p-4 md:p-5 lg:p-6">
                        <h1 className="text-xl md:text-2xl font-semibold text-dark">Plan Name</h1>
                        <p className="text-sm md:text-base text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, fugit? Velit rem repellendus nesciunt dolorem quia earum amet quam incidunt maxime quibusdam, unde eum ratione. Debitis labore commodi molestiae quis aperiam accusamus vero odit libero.</p>

                        <Gallery />

                        <div className="flex flex-wrap mt-4 lg:mt-5 justify-between items-center gap-3">
                            <div className="lg:w-[200px] md:w-[160px] w-full flex flex-wrap justify-center sm:flex-col gap-2.5">
                                <Button 
                                    type="button"
                                    text={"Print"} 
                                    icon={<HiOutlinePrinter className="text-xl md:text-2xl"/>}
                                    className={"w-full bg-[#086AD9] text-white py-2.5 justify-center"} 
                                />
                                <Button 
                                    type="button"
                                    text={"Share"} 
                                    icon={<IoShareSocialOutline className="text-xl md:text-2xl"/>}
                                    className={"w-full bg-[#11B3BA] text-white py-2.5 justify-center"} 
                                />
                                <Button 
                                    type="button"
                                    text={"Download"} 
                                    icon={<RxDownload className="text-xl md:text-2xl"/>}
                                    className={"w-full bg-[#087E82] text-white py-2.5 justify-center"} 
                                />
                            </div>
                            <div className="col md:px-5 lg:px-16">
                                <Button 
                                    type="button"
                                    text={"2D View Generator"} 
                                    icon={<FaEye className="text-xl md:text-2xl"/>}
                                    className={"w-full bg-[#FCB530] text-dark py-4 justify-center mb-3"} 
                                />
                                <Button 
                                    type="button"
                                    text={"3D View Generator"} 
                                    icon={<FaEye className="text-xl md:text-2xl"/>}
                                    className={"w-full bg-[#FCB530] text-dark py-4 justify-center"} 
                                />
                            </div>
                            <div className="sm:w-[250px] w-full flex sm:flex-col gap-3">
                                <button className="bg-[#1a1a1a] text-white p-5 lg:p-6 rounded-lg w-full">
                                    <BiPhoneCall className="text-4xl mx-auto mb-3" />
                                    <span className="text-base block leading-[1]">Talk to an</span>
                                    <span className="text-lg md:text-xl lg:text-2xl leading-[1]">Architect</span>
                                </button>
                            </div>
                        </div>
                        {/* flex */}

                    </div>
                </div>
                {/* container */}
            </div>



        </main>
    )
}

export default Page