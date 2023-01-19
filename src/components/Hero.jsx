import React from 'react';

import HeroIcon from '../assets/icons/IsIcon.png';

function Hero() {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-12'>
            <div className='p-4 flex'>
                <div className='p-14 flex-col'>
                    <h1 className='text-white font-fontHeading text-6xl mt-12 leading-snug w-full'>
                        Wellcome to i_Sekolah Menerima Pendaftaran Siswa/i Baru
                    </h1>
                    <h4 className='w-1/2 text-white font-[Poppins] mt-2 leading-8 '>
                        I_Sekolah telah membuka pendaftaran baru bagi masyarakat
                        sekitar untuk mengembangkan talenta muda saat ini.
                    </h4>
                    <div className='mt-8'>
                        <input
                            type='text'
                            placeholder='Search NIS'
                            className='input input-bordered w-full max-w-xs bg-white'
                        />
                        <label htmlFor='my-modal-6' className='btn'>
                            Search
                        </label>

                        <input
                            type='checkbox'
                            id='my-modal-6'
                            className='modal-toggle'
                        />
                        <div className='modal modal-bottom sm:modal-middle'>
                            <div className='modal-box bg-[#dfe3ee]'>
                                <h3 className='font-bold text-lg'>
                                    Congratulations random Internet user!
                                </h3>
                                <p className='py-4'>
                                    You've been selected for a chance to get one
                                    year of subscription to use Wikipedia for
                                    free!
                                </p>
                                <div className='modal-action'>
                                    <label htmlFor='my-modal-6' className='btn'>
                                        Yay!
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src={HeroIcon}
                    className='rounded-full w-[840px] shadow-lg shadow-black mr-12'
                />
            </div>
        </div>
    );
}

export default Hero;
