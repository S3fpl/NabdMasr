import React from 'react'
import Hero from './Hero/Hero'
import Stats from './Stats/Stats'
import Feature from './Feature/Feature'
import Advantages from './About/About'
import Download from './Download/Download'
import Devices from './Devices/Devices'

const Home = () => {
    return (
        <main>
            <Hero />
            <Stats />
            <hr className=' mb-14' />
            <Feature />
            <hr className=' mb-16 mt-24' />
            <Advantages />
            <hr className='my-24' />
            <Download />
            <hr className='my-24' />
            <Devices />
            <hr className='my-24' />
        </main>
    )
}

export default Home