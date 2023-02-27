import React from 'react';

const Skills = () => {
    return (
        <div className="container mx-auto my-8">
            <h2 className='text-3xl font-bold my-12 xs:mx-4'>Skills</h2>
            <div id='skills' className='grid grid-row-4 gap-4 '>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>
                    <div>
                        <div data-aos="zoom-in-left"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-shine" className=''>
                            <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                            <h2>HTML</h2>
                            <progress className="progress progress-primary w-3/4 h-3" value="100" max="100"></progress>
                        </div>
                        <div data-aos="zoom-in-left"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-shine" className=''>
                            <h2>CSS</h2>
                            <progress className="progress progress-primary w-3/4 h-3" value="100" max="100"></progress>
                        </div>
                        <div data-aos="zoom-in-left"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-shine" className=''>
                            <h2>JavaScript</h2>
                            <progress className="progress progress-primary w-3/4 h-3" value="90" max="100"></progress>
                        </div>
                        <div data-aos="zoom-in-left"
                            data-aos-duration="4000"
                            data-aos-easing="ease-in-shine" className=''>
                            <h2>React</h2>
                            <progress className="progress progress-primary w-3/4 h-3" value="80" max="100"></progress>
                        </div>
                    </div>
                    <div>
                        <div data-aos="zoom-in-left"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-shine" className=''>
                            <h3 className='text-xl font-bold mb-4'>UI / UX</h3>
                            <h2>Bootstrap</h2>
                            <progress className="progress progress-primary w-3/4 h-3" value="90" max="100"></progress>
                        </div>
                        <div data-aos="zoom-in-left"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-shine" className=''>
                            <h2>Tailwind</h2>
                            <progress className="progress progress-primary w-3/4 h-3" value="90" max="100"></progress>
                        </div>
                        <div data-aos="zoom-in-left"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-shine" className=''>
                            <h2>DaisyUI</h2>
                            <progress className="progress progress-primary w-3/4 h-3" value="90" max="100"></progress>
                        </div>
                    </div>
                    <div>
                        <div data-aos="zoom-in-left"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-shine" className=''>
                            <h3 className='text-xl font-bold mb-4'>Backend and Database</h3>
                            <h2>Node JS</h2>
                            <progress className="progress progress-primary w-3/4 h-3" value="70" max="100"></progress>
                        </div>
                        <div data-aos="zoom-in-left"
                            data-aos-duration="2000"
                            data-aos-easing="ease-in-shine" className=''>
                            <h2>Express JS</h2>
                            <progress className="progress progress-primary w-3/4 h-3" value="70" max="100"></progress>
                        </div>
                        <div data-aos="zoom-in-left"
                            data-aos-duration="3000"
                            data-aos-easing="ease-in-shine" className=''>
                            <h2>Mongo DB</h2>
                            <progress className="progress progress-primary w-3/4 h-3" value="60" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;