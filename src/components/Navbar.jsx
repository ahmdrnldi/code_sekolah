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
                        <div className='w-full flex justify-end bg'>
                            <label
                                htmlFor='signin'
                                className='btn btn-primary text-xl'>
                                Sign In
                            </label>

                            <input
                                type='checkbox'
                                id='signin'
                                className='modal-toggle'
                            />
                            <div className='modal modal-bottom sm:modal-middle'>
                                <div className='modal-box'>
                                    <h3 className='font-bold text-lg text-gray-400'>
                                       Log In
                                    </h3>
                                    <h4 className='text-gray-400'>silahkan masukan NIS & password Anda</h4>
                             <form action="" method='post' role={'alert'}>
                                <div className='mb-4'>
                                <label className='input-group'>
                                    <input className='w-full py-2 px-3 ' type="NIS" placeholder="NIS" name="email" required/>
                                </label>
                                </div>
                                <div>
                                <label className='input-group'>
                                    <input className='w-full py-2 px-3' type="Password" placeholder="Pasword" name="Password" required/>
                                </label>
                                <a href="#">
                                <p className='modal-action text-blue-400 underline'>Lupa Kata sandi?</p>
                                </a>
                                </div>
  
                            </form>
                                    <div className='modal-action'>
                                        <label htmlFor='signin' className='btn bg-blue-500'>
                                            Submit
                                        </label>
                                        <label htmlFor='signin' className='btn bg-red-400'>
                                            batal
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
