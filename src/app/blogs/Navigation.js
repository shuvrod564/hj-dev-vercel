import React from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link';
const Navigation = () => (
  <div className="container pt-4"> 
    <Breadcrumb
      items={[
        {
          title: 'Home',
        },
        {
          title: <Link href="/blogs">Blog</Link>,
        }, 
        {
          title: 'Wholesale Delivered, Success Achieved',
        },
      ]}
    />                     
  </div>
);
export default Navigation;
