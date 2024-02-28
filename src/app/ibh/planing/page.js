import React from "react";
import { FiPlus, FiSave } from "react-icons/fi";

import { RiUploadCloud2Fill } from "react-icons/ri"; 
import IBHLayout from "../IBHLayout";
import Link from "next/link";
import { PlanLayout } from "./PlanLayout";
import UserInfo from "@components/components/common/UserInfo";
// import { Button } from "@components/components/shared/Button";

export const metadata = {
  title: "Catalogue Management",
};

const page = () => {
  return (
    <PlanLayout>
        
        <UserInfo />
        {/* max */}
       
    </PlanLayout>
  );
};

export default page;
