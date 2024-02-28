import React from "react"; 
 
import Link from "next/link";
import Image from "next/image";
import ConstructionLayout from "./ConstructionLayout";

export const metadata = {
  title: "Construction Management",
};

const Page = () => {
  return (
    <ConstructionLayout>
         
         <div className="max-w-[600px] mx-auto min-h-[320px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                
                
            </div> 
          
        </div>
        {/* max */}
       
    </ConstructionLayout>
  );
};

export default Page;

