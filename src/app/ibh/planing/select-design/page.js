import React from "react";  
import { Button } from "@components/components/shared/Button";
import { PlanLayout } from "../PlanLayout";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Catalogue Management",
};

const page = () => {
  return (
    <PlanLayout>
        
        
        <div className="max-w-[800px] mx-auto min-h-[320px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-10 w-full">
                <div>
                    <Link href={"/ibh/planing/select-design/design-library"} className="border-2 border-primary text-base md:text-lg lg:text-xl font-medium text-dark bg-primary px-6 py-10 text-center block rounded-lg hover:bg-white">
                      <Image src={"/images/icons/floor-plan.svg"} width={48} height={48} alt="plan" className="mb-3 mx-auto" />
                      Design Library
                    </Link>
                </div>
                <div>
                    <Link href={"/ibh/planing/select-design/customized-design"} className="border-2 border-primary text-base md:text-lg lg:text-xl font-medium text-dark bg-primary px-6 py-10 text-center block rounded-lg hover:bg-white">
                      <Image src={"/images/icons/blueprint-edit.svg"} width={48} height={48} alt="plan" className="mb-3 mx-auto" />
                      Customized Design
                    </Link>
                </div>
                
            </div> 
          
        </div>
        {/* max */}
        
       
    </PlanLayout>
  );
};

export default page;
