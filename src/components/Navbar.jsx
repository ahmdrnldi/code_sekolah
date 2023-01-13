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
                    <div className='w-full flex justify-end gap-4'>
                        <div className='w-full flex justify-end'>
                            <label
                                htmlFor='signin'
                                className='btn btn-primary text-xl'
                            >
                                Sign In
                            </label>

                            <input
                                type='checkbox'
                                id='signin'
                                className='modal-toggle'
                            />
                            <div className='modal modal-bottom sm:modal-middle'>
                                <div className='modal-box'>
                                    <h3 className='font-bold text-lg'>
                                        Congratulations random Internet user!
                                    </h3>
                                    <p className='py-4'>
                                        You've been selected for a chance to get
                                        one year of subscription to use
                                        Wikipedia for free!
                                    </p>
                                    <div className='modal-action'>
                                        <label htmlFor='signin' className='btn'>
                                            Yay!
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor='register'
                                className='btn btn-success text-xl'
                            >
                                Register
                            </label>

                            <input
                                type='checkbox'
                                id='register'
                                className='modal-toggle'
                            />
                            <div className='modal modal-bottom sm:modal-middle'>
                                <div className='modal-box'>
                                    <h3 className='font-bold text-lg'>
                                        Congratulations random Internet user!
                                    </h3>
                                    <p className='py-4'>
                                        You've been selected for a chance to get
                                        one year of subscription to use
                                        Wikipedia for free!
                                    </p>
                                    <div className='modal-action'>
                                        <label
                                            htmlFor='register'
                                            className='btn'
                                        >
                                            Yay!
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
