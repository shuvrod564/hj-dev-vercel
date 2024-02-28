 
import React from "react";
import { FiPlus, FiSave } from "react-icons/fi";

import { RiUploadCloud2Fill } from "react-icons/ri";
import UserLayout from "../UserLayout";
import { CustomSelect } from "@components/components/CustomSelect";



export const metadata = {
  title: "Architects",
};

const page = () => {
  return (
    <UserLayout>
        <div className="container">
            <div className="flex items-center justify-between !mb-6 border-b border-border-color pb-3"> 
                <h1 className="h3 mb-0">
                Architects
                </h1>
                <button className="w-9 h-10 inline-flex justify-center items-center rounded-md border border-primary">
                    <FiPlus />
                </button>
            </div>
          
            <div className="max-w-[800px]">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-10">
                    <div>
                        <label htmlFor="an" className="text-sm block font-medium mb-2">
                            Name <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="an"
                            className="form-control" 
                        /> 
                    </div>
                    <div>
                        <label htmlFor="ac_number" className="text-sm block font-medium mb-2">
                            Phone Number <span className="text-[red]">*</span>
                        </label>
                        <input
                            type="text"
                            id="ac_number"
                            className="form-control" 
                        /> 
                    </div>
                    <div>
                        <label htmlFor="ifsc_number" className="text-sm block font-medium mb-2">
                            Branch name <span className="text-[red]">*</span>
                        </label>
                        <CustomSelect 
                            options={[
                                { value: 'Branch head', label: 'Branch head' },
                                { value: 'Junior Architect', label: 'Junior Architect' } 
                            ]}
                        />
                    </div>
                    <div>
                        <label htmlFor="ifsc_number" className="text-sm block font-medium mb-2">
                            Specialization <span className="text-[red]">*</span>
                        </label>
                        <CustomSelect 
                            options={[
                                { value: 'Branch head', label: 'Branch head' },
                                { value: 'Junior Architect', label: 'Junior Architect' } 
                            ]}
                        />
                    </div>
                     
                    
                    <div className="md:col-span-2 text-right mt-7 lg:mt-9">
                        <button className="text-base font-mediem px-5 md:px-8 py-2 inline-flex items-center bg-primary text-dark rounded-md hover:bg-dark hover:text-white">
                            <FiSave className="mr-2" />
                            Save
                        </button>
                    </div>
                </div>
            </div>
            {/* max */}
        </div>
      
    </UserLayout>
  );
};

export default page;
