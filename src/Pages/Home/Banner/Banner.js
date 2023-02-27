import React from 'react';
import Typical from 'react-typical'
import './Banner.css'
const Banner = () => {
    return (
        <div id='home' className="hero min-h-screen" style={{
            backgroundImage: `url("https://i.ibb.co/WWsvq59/fotis-fotopoulos-6s-Al6a-Q4-OWI-unsplash.jpg?w=200&h=200")`,
            width: "100%"
        }} >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/LxqcSx0/1654756949069-removebg-preview.png?hash=55350" className="w-84 mask mask-hexagon" />
                <div className='p-8 text-white'>
                    <h2
                        className='font-medium md:text-3xl text-xl'>Hello, I am Ashraful Islam Alif</h2>

                    <div className=" lg:text-5xl md:text-3xl text-2xl font-semibold mt-2">
                        <Typical
                            steps={[
                                'Frontend Developer',
                                1000,
                                'MERN Stack Developer',
                                5000,
                                'Software Developer',
                                10000,
                            ]}
                            wrapper="p"
                            loop={Infinity}
                        />
                    </div>
                    <p
                        className='mt-8 md:text-3xl text-xl'>
                        Coding and Problem solving is passion, my love, not just profession.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;