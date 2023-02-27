import React from 'react';
import chargeSample from './mern stack.pdf';

const Navbar = () => {
    return (
        <div>
            <div className="navbar fixed z-50 bottom-0 bg-slate-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 w-52 rounded-lg font-medium">
                            <li><a href='#home'>Home</a></li>
                            <li><a href='#gallery'>Aboutme</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://i.ibb.co/yYqVwQP/pp.jpg" />
                        </div>
                    </label>
                    <a className="btn btn-ghost normal-case text-base text-sm md:text-xl">Ashraful Islam Alif</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 rounded-3xl font-medium">
                        <li><a href='#home' className='hover:text-primary'>Home</a></li>
                        <li><a href='#gallery' className='hover:text-primary '>Aboutme</a></li>
                        <li><a href='#skills' className='hover:text-primary '>Skills</a></li>
                        <li><a href="#Projects" className='hover:text-primary '>Projects</a></li>
                        <li><a href='#contact' className='hover:text-primary '>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <button className="btn btn-xs sm:btn-sm md:btn-md btn-primary text-white"><a href={chargeSample} download="Alif Resume">CV Download</a></button> */}
                    <button class="btn btn-xs sm:btn-sm md:btn-md btn-primary text-white rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <a href={chargeSample} download="Alif Resume" className=''>CV Download</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;