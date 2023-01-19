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
                                <div className='modal-box bg-white'>
                                    <h3 className='font-bold text-lg text-gray-600'>
                                        Login
                                    </h3>
                                    <h4 className='text-gray-600 mt-4 mb-3'>
                                        Silahkan Masukan NIS & Password Anda
                                    </h4>
                                    <form
                                        action=''
                                        method='post'
                                        role={'alert'}
                                    >
                                        <div className='mb-5'>
                                            <label className='input-group'>
                                                <input
                                                    className='w-full py-2 px-3 bg-white border border-gray-300 text-gray-500 text-sm'
                                                    type='text'
                                                    placeholder='NIS'
                                                    name='email'
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div>
                                            <label className='input-group'>
                                                <input
                                                    className='w-full py-2 px-3 bg-white border border-gray-300 text-gray-500 text-sm'
                                                    type='password'
                                                    placeholder='Pasword'
                                                    name='Password'
                                                    required
                                                />
                                            </label>
                                            <a href='#'>
                                                <p className='modal-action text-blue-500 underline'>
                                                    Lupa Kata sandi?
                                                </p>
                                            </a>
                                        </div>
                                    </form>
                                    <div className='modal-action'>
                                        <label
                                            htmlFor='signin'
                                            className='btn bg-blue-700 hover:bg-blue-600 text-white border-none'
                                        >
                                            Submit
                                        </label>
                                        <label
                                            htmlFor='signin'
                                            className='btn bg-red-700 hover:bg-red-600 border-none text-white'
                                        >
                                            Batal
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
                                <div className='modal-box bg-white'>
                                    <h3 className='text-gray-700 font-bold text-xl'>
                                        Register Online For I_Sekolah
                                    </h3>
                                    <p className='py-4 text-ellipsis text-gray-600'>
                                        Silahkan Lengakpi Form Di bawah ini
                                        Untuk Melengkapi Identitas Persyaratan
                                        Pendaftarann
                                    </p>

                                    <form
                                        action=''
                                        method='post'
                                        role={'alert'}
                                    >
                                        <div className='mb-4'>
                                            <h3 className='mb-2 font-semibold text-gray-600 text-sm'>
                                                No. UN SMP/MTs/Sederajat
                                            </h3>
                                            <label className='input-group'>
                                                <input
                                                    className='w-full py-2 px-3 text-sm bg-[#c0c5ce]  '
                                                    type='No'
                                                    placeholder='No. UN'
                                                    name='No'
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <div className='mb-4'>
                                            <h3 className='mb-2 font-semibold text-gray-600 text-sm'>
                                                Nama Lengkap
                                            </h3>
                                            <label className='input-group'>
                                                <input
                                                    className='w-full py-2 px-3 text-sm bg-[#c0c5ce] '
                                                    type='Nama'
                                                    placeholder='Nama Lengkap'
                                                    name='Nama'
                                                    required
                                                />
                                            </label>
                                        </div>
                                        <h3 className='mb-4 font-semibold text-gray-600 text-sm'>
                                            Jenis Kelamin
                                        </h3>
                                        <div className='flex mb-3 gap-4 items-center border rounded'>
                                            <label className='label cursor-pointer'>
                                                <span className='label-text flex items-center gap-3 text-gray-600'>
                                                    Laki-laki
                                                    <input
                                                        type='radio'
                                                        name='radio-10'
                                                        className='radio w-4 h-4 border border-gray-300 checked:bg-red-500'
                                                    />
                                                </span>
                                            </label>
                                            <label className='label cursor-pointer'>
                                                <span className='label-text flex items-center gap-3 text-gray-600'>
                                                    Perempuan
                                                    <input
                                                        type='radio'
                                                        name='radio-10'
                                                        className='radio w-4 h-4 border border-gray-300 checked:bg-blue-500'
                                                    />
                                                </span>
                                            </label>
                                        </div>

                                        <div className='mb-4'>
                                            <h3 className='mb-4 font-semibold text-gray-600 text-sm'>
                                                Tempat Tgl/Lahir
                                            </h3>
                                            <label className='input-group'>
                                                <input
                                                    className='w-full py-2 px-3 text-sm bg-[#c0c5ce] '
                                                    type='TTL'
                                                    placeholder='Tempat Lahir'
                                                    name='TTL'
                                                    required
                                                />
                                                <div class='relative'>
                                                    <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                                                        <svg
                                                            aria-hidden='true'
                                                            class='w-5 h-5 text-gray-500 dark:text-gray-400'
                                                            fill='currentColor'
                                                            viewBox='0 0 20 20'
                                                            xmlns='http://www.w3.org/2000/svg'
                                                        >
                                                            <path
                                                                fill-rule='evenodd'
                                                                d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                                                                clip-rule='evenodd'
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <input
                                                        datepicker
                                                        type='date'
                                                        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                                        placeholder='Pilih Tanggal'
                                                    />
                                                </div>
                                            </label>
                                        </div>

                                        <div className='mb-4'>
                                            <h3 className='mb-4 font-semibold text-gray-600 text-sm'>
                                                Nama Orangtua/Wali
                                            </h3>
                                            <label className='input-group'>
                                                <input
                                                    className='w-full py-2 px-3 text-sm bg-[#c0c5ce]  '
                                                    type='Nama'
                                                    placeholder='Nama Orang Tua'
                                                    name='Nama'
                                                    required
                                                />
                                            </label>
                                        </div>

                                        <div className='mb-4'>
                                            <h3 className='mb-2 font-semibold text-gray-600 text-sm'>
                                                Alamat
                                            </h3>
                                            <p className='text-gray-400 text-xs mb-2'>
                                                Sesuai KK / KTP / Surat
                                                Ket.Domisil min. 6 bln Ortu/Wali
                                                murid calon siswa
                                            </p>
                                            <label className='input-group'>
                                                <input
                                                    className='w-full py-2 px-3 bg-[#c0c5ce]  '
                                                    type='Alamat'
                                                    placeholder='Alamat'
                                                    name='Alamat'
                                                    required
                                                />
                                            </label>
                                        </div>

                                        <div className='mb-6'>
                                            <h3 className='mb-4 font-semibold text-gray-600 text-sm'>
                                                Asal Sekolah
                                            </h3>
                                            <label className='input-group'>
                                                <input
                                                    className='w-full py-2 px-3 text-sm bg-[#c0c5ce]  '
                                                    type='Alamat'
                                                    placeholder='Alamat'
                                                    name='Alamat'
                                                    required
                                                />
                                            </label>
                                        </div>

                                        <select className='select w-full max-w-xs text-gray-600 text-sm bg-gray-300'>
                                            <option disabled>Agama</option>
                                            <option>Islam</option>
                                            <option>Kristen</option>
                                            <option>Atheis</option>
                                            <option>Satanic</option>
                                            <option>Ga punya</option>
                                        </select>
                                    </form>

                                    <div className='modal-action'>
                                        <label
                                            htmlFor='register'
                                            className='btn'
                                        >
                                            Daftar
                                        </label>
                                        <label
                                            htmlFor='register'
                                            className='btn'
                                        >
                                            Batal
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
