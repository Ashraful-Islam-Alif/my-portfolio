import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        // emailjs.sendForm('', '', form.current, '')
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
        e.target.reset();
        toast('Email Send Successfully')
    };
    return (
        <div id="contact" className="container mx-auto my-12">
            <h2 className='text-3xl font-bold my-12 xs:mx-4'>Contact Me</h2>
            <div data-aos="fade-up"
                data-aos-duration="2000"
                className="border-4 p-4 rounded-3xl">
                <div className="grid justify-items-center lg:grid-cols-2">
                    <div className="">

                        <img className='w-3/4 grid justify-items-center' src="https://i.ibb.co/CHPmvDW/hires.png" alt="" srcset="" />
                    </div>
                    <div className='card  w-full max-w-sm '>
                        <div className="card-body  grid justify-items-center bg-slate-100 rounded-2xl">
                            <form className='grid grid-rows-4 gap-2  text-black' ref={form} onSubmit={sendEmail}>
                                {/* <label className='my-2'>Name</label> */}
                                <input placeholder='Full name' className='form-control input input-bordered' type="text" name="name" required />
                                {/* <label className='my-2'>Email</label> */}
                                <input placeholder='Email' className='form-control input input-bordered' type="email" name="email" required />
                                <input placeholder='Phone Number' className='form-control input input-bordered text-black' type="number" name="phone-number" required />
                                <textarea className='form-control input input-bordered text-black' placeholder='Address' name="address" required />
                                {/* <label className='my-2'>Message</label> */}
                                <input className='border cursor-pointer btn btn-primary font-bold rounded-xl text-xl px-5 py-2.5 text-center text-white' type="submit" value="Contact Me" />
                            </form>

                        </div>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;