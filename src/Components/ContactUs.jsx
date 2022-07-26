import React from 'react'

export const ContactUs = () => {
  return (
    <div id='contactus' className='h-screen w-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full px-4 '>
    <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline'>Contact Me</p>
                    <p className='py-6'>Contact for questions</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/cb275e83-3a83-48ff-8242-a36e0071eaac" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter Name' className='border-2 p-2 bg-transparent rounded-md focus:outline-none' />
                    <input type="text" name='email' placeholder='Enter Email' className='my-4 border-2 p-2 bg-transparent rounded-md focus:outline-none' />
                    <textarea name="message" placeholder='Enter Message' className='border-2 p-2 bg-transparent rounded-md focus:outline-none' id="" cols="30" rows="10"></textarea>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 mx-auto rounded'> Send Message </button>
                    </form>
                </div>
        <div>
        </div>
    </div>
    </div>
  )
}

export default ContactUs