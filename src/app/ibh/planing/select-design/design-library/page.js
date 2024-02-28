import React from "react";   
import Link from "next/link";
import Image from "next/image";
import { PlanLayout } from "../../PlanLayout"; 
import { HeaderPart } from "@components/components/HeaderPart";

export const metadata = {
  title: "Design Library",
};

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

const Page = () => {
  return (
    <PlanLayout>
        <HeaderPart title="Featured Architects" />
        
        <div className="min-h-[320px] flex">
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
        {/* max */}
        
       
    </PlanLayout>
  );
};

export default Page;
