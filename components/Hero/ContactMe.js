import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube, FaLink } from 'react-icons/fa'

const ContactMe = () => {
    return (
        <div className='mx-8 px-8 relative border-orange border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>                    
            <h3 className='absolute bg-orange text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contact Me</h3>
            <p className='text-center md:text-left'>
                <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6'/>
                <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6'/>
                <FaYoutube className='text-5xl md:text-6xl inline-block md:mr-6'/>
                <FaLink className='text-5xl md:text-6xl inline-block md:mr-6'/>
                <br/>
                <span className='mt-4 inline-block'>or drop a line: gigoregis@gmail.com</span>
            </p>
        </div>
    )
}
export default ContactMe
