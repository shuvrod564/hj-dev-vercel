import React from 'react' 
import Image from 'next/image'
import Link from 'next/link'

export function ProcessDiagram({data}) {
    

    return (
        <> 
            <div className="max-w-[900px] mx-auto relative py-12 pl-4 sm:pl-0 bg mt-20">
                <div className="absolute top-0 left-4 sm:left-0 md:left-1/2 md:-translate-x-1/2 w-[5px] h-full bg-[#333]">
                    <span className=" absolute -top-6 -left-[18px] border-[20px] border-[#fff] border-b-primary border-r-red"></span>
                    <span className=" absolute -bottom-6 -left-[18px] border-[20px] border-[#fff] border-t-primary border-r-red"></span>
                </div>
                {
                    data.map((item, index)=> {
                        return(
                            <div key={index} className={`
                                w-full md:w-[50%]  relative md:-mt-8
                                ${item.align == 'right' ? 'md:ml-auto text-end' : 'md:text-left text-right'}
                            `}>
                                {
                                    item.align == 'right' && (
                                        <div className="absolute top-[110px] left-0 w-full h-8">
                                            <div className={`absolute top-0 right-20 w-8 h-8 rounded-full`} style={{ backgroundColor: item.color }}></div>
                                            <div className={`absolute -top-[2px] -left-5 z-10 w-10 h-10 rounded-full border bg-white flex justify-center items-center`} style={{ borderColor: item.color }}>
                                                <div className={`w-4 h-4 rounded-full `}style={{ backgroundColor: item.color }}></div>
                                            </div>
                                            <div className={`absolute top-1/2 left-0 w-[calc(100%-80px)] h-1 rounded-full`} style={{ backgroundColor: item.color }}></div> 
                                        </div> 
                                    )  
                                }
                                {
                                    item.align == 'left' && (
                                        <div className="absolute top-[110px] left-0 w-full h-8">
                                            <div className={`absolute top-0 md:left-20 right-20 w-8 h-8 rounded-full`} style={{ backgroundColor: item.color }}></div>
                                            <div className={`absolute -top-[2px] md:-right-5 -left-5 md:ml-auto z-10 w-10 h-10 rounded-full border bg-white flex justify-center items-center`} style={{ borderColor: item.color }}>
                                                <div className={`w-4 h-4 rounded-full`} style={{ backgroundColor: item.color }}></div>
                                            </div>
                                            <div className={`absolute top-1/2 md:left-20 md:right-0 right-20 w-[calc(100%-80px)] h-1 rounded-full`} style={{ backgroundColor: item.color }}></div>
                                        </div>
                                    )
                                }
                                {
                                    item.align == 'right' && ( 
                                        <figure className="w-24 ml-auto mb-5">
                                            <Image
                                                src={item.thumb}
                                                width={100} height={100} alt="Image"
                                                className="rounded-full shadow-xl mx-auto relative z-10"
                                            />
                                        </figure>
                                    )
                                }
                                <div className={`
                                    ${item.align == 'right' ? 'md:pl-[15%] pl-[10%]' : 'md:pr-[15%] pl-[10%] md:pl-0'}
                                `}> 
                                    {
                                        item.align == 'left' && ( 
                                            <figure className="w-24 mb-5 ml-auto md:ml-0">
                                                <Image
                                                    src={item.thumb}
                                                    width={100} height={100} alt="Image"
                                                    className="rounded-full shadow-xl mx-auto relative z-10"
                                                />
                                            </figure>
                                        )
                                    }
                                    <p className={`text-4xl md:text-5xl font-bold !leading-[.5] mb-4`} style={{ color: item.color }}>{item.count}</p>
                                    <h3 className={` text-lg md:text-xl lg:text-2xl font-semibold mb-2`}>
                                        <Link href={item.slug} style={{ color: item.color }}>{item.title}</Link>  
                                    </h3>
                                    <p className="text-[13px] sm:text-sm">{item.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
 
            </div>
            {/* diagramm */}

             
        </>
    )
}
