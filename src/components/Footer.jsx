import React from 'react';

import { AiFillCopyrightCircle } from 'react-icons/ai';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-gray-800 flex items-center w-full p-10'>
            <p className='flex text-white items-center w-full text-lg gap-2'>
                Copyright
                <AiFillCopyrightCircle size={15} className='fill-white' />
                2023 I_Sekolah.
            </p>
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
                <BsYoutube size={20} className='cursor-pointer fill-red-500' />
            </div>
        </div>
    );
};

export default Footer;
