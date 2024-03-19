import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    
    title: 'Customer',
    path: '/getCustomer',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    
    title: 'Medicine',
    path: '/medicine',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Upload',
    path: '/img-upload',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Admins',
    path: '/getAdmin',
    icon: <FaIcons.FaCcVisa />,
    cName: 'nav-text'
  },
  {
    title: 'CRUD',
    path: '/admincrud',
    icon: <FaIcons.FaCcVisa />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/getOrderData',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  },
];
