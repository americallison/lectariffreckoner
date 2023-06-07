import React, { useState } from 'react';
import LEC_logo from '../images/lec_logo.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuShow, setMenuShow] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        setMenuShow(!menuShow);
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-expanded="false"
                            onClick={toggleNavbar}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                // Icon when menu is open
                                <>
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                                
                                </>
                            )}
                        </button>
                        
                        
                    </div>
                    
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="block lg:hidden h-10 w-auto"
                                src={LEC_logo}
                                alt="Workflow"
                            />
                            
                        </div>
                        {/* Navigation links */}
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-3">
                            <img
                            className="h-11 w-auto"
                            src={LEC_logo}
                            alt="Workflow"
                        />
                                <Link to="/"
                                    className="text-gray-300 font-light hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
                                >
                                
                                    <FontAwesomeIcon icon="home" />&nbsp;
                                   Home
                                </Link>
                                <Link
                                    to="/transformerlist"
                                    className="text-gray-300 font-light hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
                                >
                                <FontAwesomeIcon icon="list" />&nbsp;Transformers List
                                </Link>
                                <Link
                                    to="/addtransformerstatus"
                                    className="text-gray-300 hover:bg-gray-700 font-light hover:text-white px-3 py-2 rounded-md"
                                >
                                <FontAwesomeIcon icon="database" />&nbsp;Input Data
                                </Link>
                                <Link
                                    to='/dashboard'
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-light"
                                > <FontAwesomeIcon icon="dashboard" />&nbsp;
                                   Dashboard
                                </Link>
                               </div>
                               </div>
</div>
</div>
<div>
                    {menuShow ? (
                        <div className="p-2"><hr className="md:hidden"/>
                        <div className="container p-1"> 
                        <ul>
                            <li className='md:hidden p-1 font-light text-stone-300'><Link to="/">
                            <FontAwesomeIcon icon="home" />&nbsp;Home</Link></li>
                            <li className='md:hidden p-1 font-light text-stone-300'><Link
                                    to="/transformerlist"
                                >
                                <FontAwesomeIcon icon="list" />&nbsp;Transformers List
                                </Link></li>
                            <li className="md:hidden p-1 text-stone-300"><Link to="/addtransformerstatus">
                            <FontAwesomeIcon icon="database" />&nbsp;Input Data</Link></li>
                            <li className="md:hidden p-1 text-stone-300"><Link to="/dashboard">
                            <FontAwesomeIcon icon="dashboard" />&nbsp;Dashboard</Link></li>
                        </ul>
                        </div>
                        </div>
                    ) : ("")}
                   
                    </div>
</div>
</nav>
    )
                            }
