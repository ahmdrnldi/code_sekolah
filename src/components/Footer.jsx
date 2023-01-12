import React from 'react';

import { AiFillCopyrightCircle } from 'react-icons/ai';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube, BsWhatsapp, BsTag, BsAlignBottom, BsAt, BsVr, BsAspectRatio, BsController, BsArrow90DegDown, BsArchive, BsFileLock, BsArrowsAngleContract, BsPinMap, BsMailbox, BsMapFill, BsMailbox2, BsVoicemail, BsUiRadios, BsTelephoneFill, BsTelephone, BsPiggyBankFill, BsReverseLayoutSidebarInsetReverse, BsEnvelope, BsGoogle, BsPin, BsSafe, BsApp } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-gray-800 flex items-center w-full p-10'>
            <p className='flex text-white font-fontFooter items-center w-full text-lg gap-2'>
                Copyright
                <AiFillCopyrightCircle size={15} className='fill-white ' />
                | 2023 I_Sekolah.
            </p>
            <div className='text-white text-1xl font-fontFooter'>
             <h1 className='text-white text-2xl font-fontFooter'>Alamat</h1>
            <div className='flex items-center'>
            <BsPinMap size={50} className='cursor-pointer fill-blue-500'/>
            <h2 className='text-white font-fontFooter'>Sumatera Utara Medan Jl. A.H Nasution Simpang Pos</h2>
            </div>

            <div className='flex items-center'>
            <BsTelephone size={20} className='cursor-pointer fill-blue-500'/>
            <h2 className='text-white font-fontFooter'>(0321)3453236</h2>
            </div>

            <div className='flex items-center'>
            <BsEnvelope size={20} className='cursor-pointer fill-blue-500'/>
            <h2 className='text-white font-fontFooter'>I_Sekolah.app12@gmail.com</h2>
            </div>

            <div className='flex items-center'>
            <BsWhatsapp size={20} className='cursor-pointer fill-blue-500'/>
            <h2 className='text-white font-fontFooter'>0833452165</h2>
            </div>
            </div>

            <div className='text-white text-1xl font-fontFooter'>
            <h1 className='text-white text-2xl font-fontFooter'>Program Keahlian</h1>          
            <h2 className='text-white font-fontFooter'>Rekayasa Perangkat Lunak</h2> 
            <h2 className='text-white font-fontFooter'>Teknik Jaringan Komputer</h2>
            <h2 className='text-white font-fontFooter'>MultiMedia</h2>
            <h2 className='text-white font-fontFooter'>REKAYASA PERANGKAT LUNAK</h2>
            </div>

            <div className='text-white text-1xl font-fontFooter'>
            <h1 className='text-white text-2xl font-fontFooter'>Tentang I_Sekolah</h1>          
            <h2 className='text-white font-fontFooter'>Panduan</h2>
            <h2 className='text-white font-fontFooter'>identitas I_sekolah</h2>
            <h2 className='text-white font-fontFooter'>Struktur Organisasi</h2>
            <h2 className='text-white font-fontFooter'>Rating</h2>
           
            </div>

            <div className='flex w-full gap-8 justify-end'>
                <BsFacebook
                    size={20}
                    className='cursor-pointer fill-blue-500'
                />
                <BsTwitter size={20} className='cursor-pointer fill-blue-500' />
                <BsInstagram
                    size={20}
                    className='cursor-pointer fill-orange-500'
                />
                <BsYoutube 
                    size={20} 
                    className='cursor-pointer fill-red-500' />
            </div>
        </div>
    );
};

export default Footer;
