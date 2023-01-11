import React from 'react';

import { GoVerified } from 'react-icons/go';

import Hero2 from '../assets/img/hero2.png';

function Hero3() {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-85 p-12'>
            <div>
                <div className='flex items-center justify-center gap-24'>
                    <img
                        src={Hero2}
                        className='w-[32%] rounded-2xl shadow-2xl shadow-black'
                    />
                    <div className='w-1/3'>
                        <h1 className='text-5xl font-fontHeading'>
                            Kenapa Harus I_Sekolah ?
                        </h1>
                        <p className='text-base mt-6'>
                            Kenapa harus I_Sekolah Di karnakan kami memberikan fitur dan kegunaan kusus
                            Untuk kebutuhan yang di butuhkan oleh para guru untuk menyampaikan atau mengalokasikan
                            sebagai guru ke pelajar sebagai mana mestinya
                        </p>
                        <div className='flex flex-col w-[60%] text-justify'>
                            <div className='flex items-center gap-1 mt-6'>
                                <GoVerified size={15} />
                                <h3 className='font-bold text-lg'>
                                    VISI & MISI
                                </h3>
                            </div>
                            <p className='text-base mt-4'>
                                Berprestasi dilandasi Iman, Taqwa dan Berbudaya Lingkungan
                                serta Berwawasan Global tentang tecnology
                            </p>
                        </div>
                        <div className='flex flex-col w-[60%] text-justify'>
                            <div className='flex items-center gap-1 mt-6'>
                                <GoVerified size={15} />
                                <h3 className='font-bold text-lg'>
                                    VISI
                                </h3>
                            </div>
                            <p className='text-base mt-4'>
                            1.Tercapainya pendidikan untuk mencapai Prestasi dan lulusan berkualitas tinggi dalam teknolgy <br />
                            2.tercapainya sumber daya manusia yang beriman,produktif,kreatifinovatif dan efektif <br />
                            3.Tercapainya pengembangan inovasipembelajaran sesuai tuntutan yang di berikan oleh pihak sekolah
                            </p>
                        </div>
                        <div className='flex flex-col w-[60%] text-justify'>
                            <div className='flex items-center gap-1 mt-6'>
                                <GoVerified size={15} />
                                <h3 className='font-bold text-lg'>
                                    MISI
                                </h3>
                            </div>
                            <p className='text-base mt-4'>
                            1.Mewujudkan pendidikan untuk menghasilkan prestasi dan lulusa berkwalitas tinggi yang peduli dengan lingkungan hidup <br />

2.   Mewujudkan sumber daya manusia yang beriman, produktif, kreatif, inofatif dan efektif <br />

3.   Mewujudkan pengembangan inovasi pembelajaran sesuai tuntutan <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero3;
