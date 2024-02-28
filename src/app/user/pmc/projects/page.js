'use client'
import React from 'react'
import { PMCLayout } from '../PMCLayout'
import Link from 'next/link'
import Image from 'next/image'

import { Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Projects Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Service Offered',
    dataIndex: 'service',
    key: 'service',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, 
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <div className="flex gap-2">
        <button className="border border-secondary text-dark px-2 pt-0.5 pb-1 rounded-lg h-7 !leading-[1] items-center inline-flex">Accept</button>
        <button className="border border-red text-red px-2 pt-0.5 pb-1 rounded-lg h-7 !leading-[1] items-center inline-flex">Reject</button>
        <button className="border border-primary text-primary px-2 pt-0.5 pb-1 rounded-lg h-7 !leading-[1] items-center inline-flex">View Project</button>
      </div>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'Test Project Name 1',
    service: 'Civil',
    address: 'New York No. 1 Lake Park', 
  },
  {
    key: '2',
    name: 'Test Project Name 2',
    service: 'Plumbing & sanitary',
    address: 'London No. 1 Lake Park', 
  },
  {
    key: '3',
    name: 'Test Project Name 3',
    service: 'Tiling',
    address: 'Sydney No. 1 Lake Park', 
  },
];
 

export default function Page(props) {
    

    return (
        <PMCLayout>
            <div>
                <h1 className="mb-4 text-xl md:text-2xl font-bold text-dark">All Projects</h1>
                <div className="border border-[#eee] shadow-sm bg-white rounded-lg"> 
                    <Table columns={columns} dataSource={data} className="font-sans" />
                </div>
            </div>
             
        </PMCLayout>
    )
}
