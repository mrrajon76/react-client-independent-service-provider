import { InboxIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import fb from '../../images/facebook.png';
import ln from '../../images/linkedin.png';
import tw from '../../images/twitter.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const handleContactForm = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;

        if (name && email && subject && message) {
            toast('Thank you! We will get back to you soon....')
        }
    }
    return (
        <div className='min-h-[67vh] py-16 px-5 md:px-14 lg:px-32'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='text-center md:text-left'>
                    <h3 className='text-4xl lg:text-5xl text-indigo-900 font-extrabold'>Get in Touch</h3>
                    <p className='mt-4 text-xl'>I aim to provide an outstanding service to my clients based on a set of underlying values that guide my everyday work</p>

                    <ul className='space-y-1 mt-7 text-lg text-indigo-900 font-medium'>
                        <li><PhoneIcon className='w-6 inline-block text-amber-500 hover:text-indigo-900'></PhoneIcon><span> +880 1762811511</span></li>
                        <li><InboxIcon className='w-6 inline-block text-amber-500 hover:text-indigo-900'></InboxIcon><span> mrrajon76@gmail.com</span></li>
                        <li><LocationMarkerIcon className='w-6 inline-block text-amber-500 hover:text-indigo-900'></LocationMarkerIcon><span> Dhaka, Bangladesh</span></li>
                    </ul>

                    <div className='flex items-center justify-center md:justify-start space-x-3 mt-7'>
                        <a href="https://facebook.com" rel="noreferrer" target="_blank"><img src={fb} alt="" className='w-8 h-8 border-2 border-slate-300 rounded-full' /></a>
                        <a href="https://linkedin.com" rel="noreferrer" target="_blank"><img src={ln} alt="" className='w-8 h-8 border-2 border-slate-300 rounded-full' /></a>
                        <a href="https://twitter.com" rel="noreferrer" target="_blank"><img src={tw} alt="" className='w-8 h-8 border-2 border-slate-300 rounded-full' /></a>
                    </div>
                </div>
                <div className='flex justify-center md:justify-end'>
                    <iframe title='location'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299.264100009696!2d90.41279297425426!3d23.831679838197456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c65e78f46ee1%3A0x3e009fd37c89634f!2sNikunja%202%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1650289901853!5m2!1sen!2sbd"
                        width="90%"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" />
                </div>
            </div>
            <div className='mt-16'>
                <h3 className='text-4xl lg:text-5xl text-indigo-900 font-extrabold text-center mb-6'>Have a Query?</h3>

                <form onSubmit={handleContactForm}>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16">
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="text" name="name" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                            <label for="name" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input type="email" name="email" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                            <label for="email" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="text" name="subject" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                        <label for="subject" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <textarea rows={4} name="message" className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-slate-400 appearance-none focus:outline-none focus:ring-0 focus:border-indigo-900 peer" placeholder=" " required />
                        <label for="message" className="absolute  text-gray-900 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-900 peer-focus:dark:text-indigo-900ss peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                    </div>
                    <button type="submit" className="text-white bg-indigo-900 hover:bg-amber-500 focus:outline-none uppercase rounded px-16 py-2 text-center">Send</button>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Contact;