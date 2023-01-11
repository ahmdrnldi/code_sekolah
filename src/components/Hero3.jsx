import React from 'react';

import { GoVerified } from 'react-icons/go';

import Hero2 from '../assets/img/hero2.png';

function Hero3() {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12'>
            <div className='flex items-center justify-center gap-12'>
                <img
                    src={Hero2}
                    className='w-[32%] rounded-2xl  shadow-2xl shadow-black'
                />
                <div className='w-[60%]'>
                    <h1 className='text-5xl font-fontHeading'>
                        Kenapa Harus I_Sekolah ?
                    </h1>
                    <p className='text-base mt-6 leading-7'>
                        Kenapa harus I_Sekolah Di karnakan kami memberikan fitur
                        dan kegunaan kusus Untuk kebutuhan yang di butuhkan oleh
                        para guru untuk menyampaikan atau mengalokasikan sebagai
                        guru ke pelajar sebagai mana mestinya
                    </p>
                    <div className='flex flex-col w-full text-justify'>
                        <div className='flex items-center gap-1 mt-6'>
                            <GoVerified size={15} />
                            <h3 className='font-bold text-lg'>VISI & MISI</h3>
                        </div>
                        <p className='text-base mt-4'>
                            Berprestasi dilandasi Iman, Taqwa dan Berbudaya
                            Lingkungan serta berwawasan Global tentang
                            Teknologi.
                        </p>
                    </div>
                    <div className='flex w-full gap-6'>
                        <div className='flex flex-col w-[60%] gap-4'>
                            <div className='flex items-center gap-1 mt-6'>
                                <GoVerified size={15} />
                                <h3 className='font-bold text-lg'>VISI</h3>
                            </div>
                            <ol className='text-base text-left space-y-6 leading-7'>
                                <li>
                                    1. Tercapainya pendidikan untuk mencapai
                                    Prestasi dan lulusan berkualitas tinggi
                                    dalam teknolgi.
                                </li>
                                <li>
                                    2. Tercapainya sumber daya manusia yang
                                    beriman,produktif,kreatifinovatif dan
                                    efektif.
                                </li>
                                <li>
                                    3. Tercapainya pengembangan inovasi
                                    pembelajaran sesuai tuntutan yang di berikan
                                    oleh pihak sekolah.
                                </li>
                            </ol>
                        </div>
                        <div className='flex flex-col w-[60%] gap-4'>
                            <div className='flex items-center gap-1 mt-6'>
                                <GoVerified size={15} />
                                <h3 className='font-bold text-lg'>MISI</h3>
                            </div>
                            <ol className='text-base text-left space-y-6 leading-7'>
                                <li>
                                    1. Mewujudkan pendidikan untuk menghasilkan
                                    prestasi dan lulusan berkualitas tinggi yang
                                    peduli dengan lingkungan hidup.
                                </li>
                                <li>
                                    2. Mewujudkan sumber daya manusia yang
                                    beriman, produktif, kreatif, inofatif dan
                                    efektif.
                                </li>
                                <li>
                                    3. Mewujudkan pengembangan inovasi
                                    pembelajaran sesuai tuntutan.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero3;
