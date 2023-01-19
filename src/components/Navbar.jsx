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
                                className='btn btn-success text-xl'>
                                Register
                            </label>

                            <input
                                type='checkbox'
                                id='register'
                                className='modal-toggle'
                            />
                            <div className='modal modal-bottom sm:modal-middle'>
                                <div className='w-[20%] modal-box'>
                                    <h3 className='text-gray-400 font-bold text-xl'>
                                        Register Online For I_Sekolah
                                    </h3>
                                    <p className='py-4 text-ellipsis text-gray-400'>
                                       Silahkan Lengakpi Form Di bawah ini Untuk Melengkapi Identitas Persyaratan 
                                      Pendaftarann
                                    </p>

                                    <form action="" method='post' role={'alert'}>
                             <div className='mb-4'>
                             <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">No. UN SMP/MTs/Sederajat</h3>
                                    <label className='input-group'>
                                         <input className='w-full py-2 px-3 bg-[#c0c5ce]  ' type="No" placeholder="No. UN" name="No" required/>
                                    </label>
                                </div>
                                <div className='mb-4'>
                                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Nama Lengkap</h3>
                                    <label className='input-group'>
                                         <input className='w-full py-2 px-3 bg-[#c0c5ce] ' type="Nama" placeholder="Nama Lengkap" name="Nama" required/>
                                    </label>
                                </div>
                                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Jenis Kelamin</h3>
    <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-radio-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laki-Laki</label>
    </div>
    <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
    <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label for="bordered-radio-2" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">PeremPuan</label>
    </div>
                   
                    <div className='mb-4'>
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Tempat Tgl/Lahir</h3>
                                    <label className='input-group'>
                                         <input className='w-full py-2 px-3 bg-[#c0c5ce] ' type="TTL" placeholder="Tempat Lahir" name="TTL" required/>
                                         <div class="relative">
  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
  <input datepicker type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"/>
</div>
                                    </label>
                                </div>
                        
                                <div className='mb-4'>
                                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Nama Orangtua/Wali</h3>
                                    <label className='input-group'>
                                         <input className='w-full py-2 px-3 bg-[#c0c5ce]  ' type="Nama" placeholder="Nama OrangTua" name="Nama" required/>
                                    </label>
                                </div>

                                <div className='mb-4'>
                                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Alamat</h3>
                                <p className='text-gray-400 text-xs'>sesuai KK / KTP / Surat Ket.Domisil min. 6 bln Ortu/Wali murid calon siswa</p>
                                    <label className='input-group'>
                                         <input className='w-full py-2 px-3 bg-[#c0c5ce]  ' type="Alamat" placeholder="Alamat" name="Alamat" required/>
                                    </label>
                                </div>

                                <div className='mb-4'>
                                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Asal Sekolah</h3>
                                    <label className='input-group'>
                                         <input className='w-full py-2 px-3 bg-[#c0c5ce]  ' type="Alamat" placeholder="Alamat" name="Alamat" required/>
                                    </label>
                                </div>

                                <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Agama</h3>
<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Islam</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-id" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kristen</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-millitary" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-millitary" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Protestan</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Khatolik</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="list-radio-passport" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Khatolik</label>
        </div>
    </li>
</ul>


                            </form>

                                    <div className='modal-action'>
                                        <label
                                            htmlFor='register'
                                            className='btn'>
                                            Next
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
