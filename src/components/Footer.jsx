import React from 'react';

// Import icon
import { AiFillCopyrightCircle } from 'react-icons/ai';
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { BiSend } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';
import { IoLocationSharp, IoCall, IoLogoWhatsapp } from 'react-icons/io5';

const TextIsi = (props) => {
    return (
        <div className='flex items-center gap-2'>
            <BiSend size={8} className='fill-white' />
            <a className='text-gray-400 hover:text-gray-500' href={props.path}>
                {props.text}
            </a>
        </div>
    );
};

const Footer = () => {
    return (
        <div className='w-full bg-[2E1A35]'>
            <div className='flex justify-between px-16 py-14'>
                {/* Kotak */}
                <div className='flex flex-col'>
                    <div className='space-y-5'>
                        <h1 className='text-white text-xl '>PENDAFTARAN</h1>
                        <hr />
                        <TextIsi path={'#'} text={'Keunggulan Kampus'} />
                        <TextIsi path={'#'} text={'Brosur 2023'} />
                        <TextIsi
                            path={'#'}
                            text={'Fasilitas Gratis Untuk Siswa/i'}
                        />
                        <TextIsi path={'#'} text={'Biaya Pendidikan'} />
                        <TextIsi path={'#'} text={'Informasi Pendaftaran'} />
                        <TextIsi
                            path={'#'}
                            text={'Potongan Biaya Pendidikan'}
                        />
                        <TextIsi path={'#'} text={'Nilai Plus I_Sekolah'} />
                    </div>
                </div>
                {/* Kotak */}
                <div className='flex flex-col'>
                    <div className='space-y-5'>
                        <h1 className='text-white text-xl'>BERITA AKADEMIK</h1>
                        <hr />
                        <TextIsi path={'#'} text={'Berita Umum'} />
                        <TextIsi path={'#'} text={'Brosur Sekolah'} />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='space-y-5'>
                        <h1 className='text-white text-xl'>KEMAHASISWAAN</h1>
                        <hr />
                        <TextIsi
                            path={'#'}
                            text={'Profil Bidang Kemahasiswaan & Riset'}
                        />
                        <TextIsi path={'#'} text={'Kegiatan OMS / Club'} />
                        <TextIsi path={'#'} text={'Kegiatan OSIS'} />
                        <TextIsi path={'#'} text={'Kegiatan UKM'} />\
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='space-y-5'>
                        <h1 className='text-white text-xl'>CONTACT US</h1>
                        <hr />
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-4'>
                                <IoLocationSharp
                                    size={25}
                                    className='fill-purple-500'
                                />
                                <div className='flex flex-col gap-1 items-start'>
                                    <h2 className='text-gray-300 text-base'>
                                        Alamat
                                    </h2>
                                    <p className='cursor-pointer text-sm text-gray-400 hover:text-gray-500'>
                                        Jl. Pintu Air I/Jend. AH Nasution No.
                                        73, Medan Johor Sumatera Utara -
                                        Indonesia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-4'>
                                <IoCall size={25} className='fill-sky-500' />
                                <div className='flex flex-col gap-1 items-start'>
                                    <h2 className='text-gray-300 text-base'>
                                        Phone
                                    </h2>
                                    <p className='cursor-pointer text-sm text-gray-400 hover:text-gray-500'>
                                        Isi Nomor 1
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-4'>
                                <IoLogoWhatsapp
                                    size={25}
                                    className='fill-green-500'
                                />
                                <div className='flex flex-col gap-1 items-start'>
                                    <h2 className='text-gray-300 text-base'>
                                        Whatsapp
                                    </h2>
                                    <p className='cursor-pointer text-sm text-gray-400 hover:text-gray-500'>
                                        Isi Nomor 2
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-4'>
                                <MdEmail size={25} className='fill-red-500' />
                                <div className='flex flex-col gap-1 items-start'>
                                    <h2 className='text-gray-300 text-base'>
                                        Email
                                    </h2>
                                    <p className='cursor-pointer text-sm text-gray-400 hover:text-gray-500'>
                                        blabla@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-4' />
            <div className='flex items-center justify-between w-full h-auto p-6'>
                <p className='text-gray-400 text-lg flex items-center gap-2 '>
                    Copyright
                    <AiFillCopyrightCircle
                        size={12}
                        className={'fill-gray-400'}
                    />
                    2023 I_Sekolah
                </p>
                <div className='flex gap-6 items-center justify-end'>
                    <a href='#'>
                        <BsFacebook size={20} className='fill-sky-500' />
                    </a>
                    <a href='#'>
                        <BsInstagram size={20} className='fill-orange-400' />
                    </a>
                    <a href='#'>
                        <BsTwitter size={20} className='fill-blue-600' />
                    </a>
                    <a href='#'>
                        <BsYoutube size={20} className='fill-red-600' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
