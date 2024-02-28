import React from "react";
import { FiSave } from "react-icons/fi";
 
import IBHLayout from "../IBHLayout"; 
import { Button } from "@components/components/shared/Button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Loans and Insurance",
};

const Page = () => {
  return (
    <IBHLayout>
        <h1 className="h3">Are you interested in :</h1>
         <div className="max-w-[600px] mx-auto min-h-[320px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="flex">
                    <Link href={"#"} className="w-full border-2 border-primary text-base md:text-lg font-medium text-dark bg-primary px-6 py-10 text-center block rounded-lg hover:bg-white">
                      {/* <Image src={"/images/icons/online-chat.svg"} width={48} height={48} alt="plan" className="mb-3 mx-auto" /> */}
                      Loans 
                    </Link>
                </div>
                <div className="flex">
                    <Link href={"#"} className="w-full border-2 border-primary text-base md:text-lg font-medium text-dark bg-primary px-6 py-10 text-center block rounded-lg hover:bg-white">
                      {/* <Image src={"/images/icons/offline-chat.svg"} width={48} height={48} alt="plan" className="mb-3 mx-auto" /> */}
                      Insurance
                    </Link>
                </div> 
                
            </div> 
          
        </div>
        {/* max */}
       
    </IBHLayout>
  );
};

export default Page;

