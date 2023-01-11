import React from 'react';

import LogoIcons from '../assets/icons/IsIcon.png';

function Navbar() {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12 '>
            <div className='flex items-center'>
                <a className='mr-[20%] flex items-center' href='#'>
                    <img src={LogoIcons} width={'80px'} height={'80px'} />
                    <h1 className='font-logoSekolah text-transparent bg-clip-text bg-gradient-to-r from-[#EECDA3] to-[#Ef629F] text-2xl'>
                        i_Sekolah
                    </h1>
                </a>
                <div className='flex items-center w-full'>
                    <ul className='flex justify-center gap-20'>
                        <li>
                            <a
                                href='#'
                                className='text-xl text-[#2E1A35] font-fontHeading hover:text-white'
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='text-xl text-[#2E1A35] font-fontHeading hover:text-white'
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='text-xl text-[#2E1A35] font-fontHeading hover:text-white'
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='text-xl text-[#2E1A35] font-fontHeading hover:text-white'
                            >
                                Products
                            </a>
                        </li>
                        <li>
                            <a
                                href='#'
                                className='text-xl text-[#2E1A35] font-fontHeading hover:text-white'
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className='bg-transparent border-2 border-[#2E1A35] hover:bg-blue-700 hover:border-white ml-auto mr-5 text-base rounded-lg p-4 px-6 font-fontHeading text-[#2E1A35] hover:text-white cursor-pointer'>
                        Sign In
                    </div>
                    <div className='bg-transparent border-2 border-[#2E1A35] hover:bg-green-700 hover:border-white text-base rounded-lg p-4 px-6 font-fontHeading text-[#2E1A35] hover:text-white cursor-pointer'>
                        Register
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
