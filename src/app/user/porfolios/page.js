import { Button } from '@components/components/shared/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCheck, FaUsers } from 'react-icons/fa'
import { IoChevronBackCircle } from 'react-icons/io5'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'

const data = [
    {
      key: "1",
      image: "/images/global/plan-01.webp",
      title: "Plan Name",
      desc: "Plan details will be here, in a short description."
    },
    {
      key: "2",
      image: "/images/global/plan-02.webp",
      title: "Plan Name",
      desc: "Plan details will be here, in a short description."
    },
    {
      key: "3",
      image: "/images/global/plan-03.webp",
      title: "Plan Name",
      desc: "Plan details will be here, in a short description."
    },
    {
      key: "4",
      image: "/images/global/plan-04.webp",
      title: "Plan Name",
      desc: "Plan details will be here, in a short description."
    },
    {
      key: "5",
      image: "/images/global/plan-05.webp",
      title: "Plan Name",
      desc: "Plan details will be here, in a short description."
    },
    {
      key: "6",
      image: "/images/global/plan-06.webp",
      title: "Plan Name",
      desc: "Plan details will be here, in a short description."
    },
  ]

export const metadata = {
    title: "My Workspace - Portfolios"
}

const Page = () => {
  return (
    <div className="py-10">
      <div className="container">
        <Link href={"/user"} className="inline-flex gap-2 items-center mb-2 text-muted">
            <IoChevronBackCircle className="text-dark text-lg" />
            <span>Back</span>
        </Link>
        <div className="shadow-box rounded-xl p-5 lg:p-8">
            <div className="border-b border-border-color pb-2 mb-10 flex items-center justify-between">
                <h1 className="h3 !mb-0">Portfolios</h1>
                <Button text={"Add Portfolio"} />
            </div>
 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-8">
              {
                data.map((item)=>{
                  return(
                    <div key={item.key}>
                      <div className="custom-shadow rounded-lg overflow-hidden">
                        <Image src={item.image} width={300} height={300} alt="Plan" className="object-cover object-center rounded-lg w-full h-64" />
                        <div className="py-2 px-3">
                          <h2 className="text-base md:text-lg font-semibold text-dark">{item.title}</h2>
                          <p className="mb-2 text-[13px] lg:text-sm text-muted text-ellipsis">{item.desc}</p>
                          <Link href={"/ibh/planing/select-design/design-library/detail"} className="text-primary font-semibold text-sm lg:text-[15px]">
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>

                  )
                })
              }
                
            </div> 

        </div>
        {/* shadow box */}

      </div>
      {/* container */}
    </div>
  )
}

export default Page
