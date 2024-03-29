'use client'
import { Button } from '@/components/Button'
import Team from '@/components/Team'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import dataTeam from '../../data/dataTeam.json';
import CTA from '@/components/CTA';
import shuffleArray from '@/utils/shuffleFunction'
import { TeamDataType } from '@/models/interface'


const About = () => {
    const [shuffledTeamData, setShuffledTeamData] = useState<Array<TeamDataType>>([]);

    useEffect(() => {
        // Shuffle the initial team data when the component mounts
        const shuffledData = shuffleArray(dataTeam);
        setShuffledTeamData(shuffledData);
    }, []);
    return (
        <main className='container min-w-full'>
            {/* HERO */}
            <section className='grid gap-12 px-6 pt-32 pb-16 text-center md:px-12 md:py-20 lg:px-32 lg:py-28 mx-auto max-w-screen-xl'>
                <div className='grid gap-4 lg:gap-6 text-center lg:justify-items-center w-full'>
                    <h1>Siapa Kami?</h1>
                    <p className='max-w-3xl'>Kami adalah 4 sahabat yang juga anggota Orbit, sebuah ekskul yang memiliki misi istimewa. Orbit adalah singkatan dari &quot;Organization of Basic Informatics Technology&quot;.
                    </p>
                    <Button title='join us' link='https://orbit.smkn4bdg.sch.id/' />
                </div>

                <div className='grid gap-4 grid-rows-2 grid-flow-col max-h-96 lg:gap-6 lg:grid-rows-1 lg:grid-cols-3 lg:grid-flow-dense'>
                    <div className='bg-about1 bg-cover bg-left row-span-2 rounded-lg h-80 lg:mt-16'>
                    </div>
                    <div className='bg-about2 bg-cover bg-center rounded-lg lg:h-80'>
                    </div>
                    <div className='bg-about3 bg-cover bg-center rounded-lg lg:h-64'>
                    </div>
                </div>
            </section>

            {/* STORY */}
            <section className='grid gap-6 py-12 px-6 md:px-12 md:py-20 lg:px-32 lg:py-28 lg:grid-cols-2 lg:items-center mx-auto max-w-screen-xl'>
                <div className='grid gap-4 md:gap-6'>
                    <h2><span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>Cerita </span>dibalik OrbitDebt</h2>

                    <p>
                        Suatu hari, ketika kami berkumpul untuk proyek lomba mereka di sekolah, salah seorang anggota kami membayangkan sebuah alat yang dapat melakukan pengecekan kelayakan peminjaman dengan bantuan AI. Dengan data keuangan yang dianalisis secara cermat, OrbitDebt dapat memberikan rekomendasi yang berguna kepada pengguna.
                        <br /><br />
                        Gagasan tentang OrbitDebt bukan hanya sekadar proyek lomba, tetapi visi yang kuat untuk membantu orang-orang dalam mengelola dan mengatasi hutang mereka dengan lebih baik.
                    </p>
                </div>

                <Image
                    src="/assets/images/orbitdebt_team.webp"
                    alt="OrbitDebt Banner"
                    className="w-full h-auto rounded-lg saturate-0 contrast-125"
                    width={3073}
                    height={1729}
                />
            </section>

            {/* MISSION */}
            <section className='grid gap-4 py-12 px-6 md:gap-6 md:px-12 md:py-20 lg:px-32 lg:py-28 lg:text-center mx-auto max-w-screen-xl'>
                <h2><span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>Misi</span> Kami</h2>
                <p>
                    Misi kami adalah memberdayakan individu dengan alat yang mereka butuhkan untuk merencanakan masa depan finansial yang lebih cerah dan mencapai kebebasan dari beban hutang. Kami ingin menjadi mitra yang terpercaya dalam perjalanan mereka menuju kebebasan finansial dan memberikan dampak positif dalam komunitas kami dan di seluruh dunia.
                </p>
            </section>

            {/* TEAM */}
            <section className='grid gap-6 py-12 px-6 md:px-12 md:py-20 lg:px-32 lg:py-28 mx-auto max-w-screen-xl'>
                <div className='grid gap-16'>
                    <h2>Wajah dibalik <span style={{ backgroundImage: 'linear-gradient(313deg, #6843EC 17.53%, #00FF68  94.64%)' }} className='bg-clip-text text-transparent'>OrbitDebt</span></h2>

                    <div className='flex items-center gap-3.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="5.3" viewBox="0 0 10 9" fill="none">
                            <path
                                d="M9.5 4.5L0.5 8.39711V0.602886L9.5 4.5Z"
                                fill={"#efefe599"}
                            />
                        </svg>
                        <h4 className='uppercase'>anggota tim</h4>
                        <span className='text-xs text-tertiary flex items-center mb-0.5'>[4]</span>
                    </div>
                </div>


                <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                    {shuffledTeamData.map((data, key) => {
                        return (
                            <Team image={data.image} name={data.name} about={data.about} role={data.role} key={key} social={data.social} size={data.size} />
                        )
                    })}

                </div>
            </section>

            <section className='grid py-12 px-6 md:px-12 md:py-20 lg:px-32 mx-auto max-w-screen-xl'>
                <CTA />
            </section>
        </main>
    )
}

export default About