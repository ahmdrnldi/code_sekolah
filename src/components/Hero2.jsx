import React from 'react';
import Card from './Card';

import RPL from '../assets/img/card-img/RPL.png';
import Multimedia from '../assets/img/card-img/Multimedia.png';
import Tkj from '../assets/img/card-img/Tkj.png';

function Hero2() {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full min-h-screen'>
            <div className='p-4 text-center'>
                <h1 className='text-[#2E1A35] text-4xl mt-4 font-fontHeading'>
                    Bidang Keahlian
                </h1>
                <div className='mx-auto p-2 w-1/3'>
                    <h4 className='text-base'>
                        Kami Menuntut Siswa/i Untuk mengusai bidang yang telah
                        kami Berikan
                    </h4>
                </div>
            </div>
            <div className='flex justify-between shadow-xl w-full p-12 transition: width 2s, height 4s'>
                <Card
                    image={RPL}
                    title={'Rekayasa Perangkat Lunak'}
                    body={
                        'Jurusan yang mempelajari dan mendalami semua cara-cara pengembangan perangkat lunak termasuk pembuatan, pemeliharaan, manajemen organisasi pengembangan perangkat lunak dan manajemen kualitas.'
                    }
                    hastag1={'Programming'}
                    hastag2={'IT'}
                />
                <Card
                    image={Tkj}
                    title={'Teknik Komputer Jaringan'}
                    body={
                        'Jurusan yang mempelajari tentang cara merakit komputer, mengenal dan mempelajari komponen hardware apa saja yang ada di dalam komputer, merakit komputer serta fokus mempelajari jaringan dasar.'
                    }
                    hastag1={'IT'}
                    hastag2={'Jaringan Network'}
                />
                <Card
                    image={Multimedia}
                    title={'Multimedia'}
                    body={
                        'Jurusan yang mempelajari tentang cara merakit komputer, mengenal dan mempelajari komponen hardware apa saja yang ada di dalam komputer, merakit komputer serta fokus mempelajari jaringan dasar.'
                    }
                    hastag1={'Design'}
                    hastag2={'Technology'}
                />
                <Card
                    image={RPL}
                    title={'Rekayasa Perangkat Lunak'}
                    body={'Ini adalah Jurusan RPL'}
                    hastag1={'IT'}
                    hastag2={'Jaringan'}
                />
            </div>
        </div>
    );
}

export default Hero2;
