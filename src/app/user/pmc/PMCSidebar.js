'use client' 
import { Menu } from 'antd'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BiSolidDashboard } from 'react-icons/bi';
import { BsXDiamondFill } from 'react-icons/bs';
import { FiCreditCard } from 'react-icons/fi'; 
import { LiaCubesSolid } from 'react-icons/lia';
import { PiCube } from 'react-icons/pi';
import { RiListCheck3 } from 'react-icons/ri';

 

export function PMCSidebar(props) {

    const router = useRouter();
    

    return (
        <>
             <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline" 
                className=" !font-sans"
            >
                <Menu.Item key={0} icon={<BiSolidDashboard className="text-lg text-[#333]" />}><Link href="/user/pmc">Dashboard</Link>  </Menu.Item>
                 
                <Menu.SubMenu key={1} icon={<PiCube className="text-lg text-[#333]" />} title="Portfolio">
                    <Menu.Item><Link href="/user/pmc/projects">KYC Information</Link></Menu.Item>
                    <Menu.Item><Link href="/user/pmc/projects">Address Information</Link></Menu.Item>
                    <Menu.Item><Link href="/user/pmc/portfolio">Choose Your Services</Link></Menu.Item>
                    <Menu.Item><Link href="/user/pmc/projects">Contractor Agreemnet</Link></Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={3} icon={<RiListCheck3 className="text-lg text-[#333]" />} title="My Projects">
                    <Menu.Item><Link href="/user/pmc/projects">All Projects</Link></Menu.Item>
                    <Menu.Item>Meeting Scheduled</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={4} icon={<LiaCubesSolid className="text-lg text-[#333]" />} title="Project Management">
                    <Menu.Item key={'p1'}>Project Planning Gantt Chart</Menu.Item>
                    <Menu.Item key={'p2'}>Milestone achieved versus time elapsed</Menu.Item>
                    <Menu.Item key={'p3'}>Milestone based cash flow planner</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={5} icon={<BsXDiamondFill className="text-lg text-[#333]" />} title="Quality management">
                    <Menu.Item key={'q1'}>Material Management</Menu.Item>
                    <Menu.Item key={'q2'}>Worksmanship management</Menu.Item>
                    <Menu.Item key={'q3'}>Warrenty Management</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key={6} icon={<FiCreditCard className="text-lg text-[#333]" />} title="BOQ">
                    <Menu.Item key={'b2'}>Configuration</Menu.Item> 
                    <Menu.Item key={'b1'}>All BOQ&apos;s</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key={7} icon={<FiCreditCard className="text-lg text-[#333]" />}>Payment Tracker</Menu.Item>
            </Menu>
        </>
    )
}
