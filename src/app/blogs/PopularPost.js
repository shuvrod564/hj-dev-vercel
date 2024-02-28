import Image from "next/image";
import Link from "next/link";
import React from "react";

const PopularPost = ({item}) => {
  return (
    <li className="flex mb-3">
        <Link href={item.slug} className="block w-20">
            <Image src={item.thumbnail} width={80} height={80} alt="alt"
                className="w-20 h-[70px] object-cover object-center rounded-md"
            />
        </Link>
        <div className=" w-[calc(100%-80px)] pl-4">
            <h4 className="!text-base !font-medium !leading-[1.2] !mt-0 !mb-0">
                <Link href={item.slug} className="!text-[#454545] hover:text-primary ellipses-2">{item.title}</Link>
            </h4>
            <div className="flex flex-wrap text-[13px] font-medium">
                <div className="inline-flex items-center mr-4 sm:mr-4 md:mr-6 mb-3">
                    <span className="text-[#929292]">Posted:</span>
                    <span className="pl-2 text-[#474646]">{item.date}</span>
                </div>  
            </div>
        </div>
    </li>
  );
};

export default PopularPost;
