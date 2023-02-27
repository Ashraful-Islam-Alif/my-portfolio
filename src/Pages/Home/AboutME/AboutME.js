import React from 'react';
import './AboutME.css'

const AboutME = () => {
    return (
        <div className='container mx-auto my-8'>
            <h2 className='text-3xl font-bold xs:mx-4'>About me</h2>
            <div id='gallery' className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center'>

                <div data-aos="fade-right"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-shine"
                    className="avatar">
                    <div className="w-72 rounded-full" >
                        <img className='object-none object-top' src="https://i.ibb.co/Zz8kFLN/IMG-20201121-225314-removebg-preview.png" />
                    </div>
                </div>
                <div data-aos="fade-left"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-shine"
                    className='grid items-center '>
                    <h2 className='bg-primary text-white rounded-3xl p-4'>I have completed CSE from Independent University of Bangladesh(IUB). When I started the web development journey I felt curious and adored, for which it brings me here, though many steps to go forward.</h2>
                </div>
            </div>
        </div>
    );
};

export default AboutME;