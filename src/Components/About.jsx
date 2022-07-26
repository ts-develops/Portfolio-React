import React from 'react'
import PortfolioImage from '../assets/grad-image.jpeg'
import CV from '../assets/TawfiqCV.pdf'


const About = () => {
  return (
            <div className='h-screen w-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600'>
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center'>
                <h1 className='text-4xl sm:text-4xl font-bold'>About Me</h1>
                <p className='text-xl py-4'>Front End Developer based in London. Courteous and enthusiastic. Computer Science graduate with passion creating excellent user experiences.</p>
                <p className='text-xl'>I have a keen ability to understand and resolve issues and like challenging aspects to bring the best out of me. Having many skills and continuosly learning helps me perfect my craft as a developer to please users and clients.</p>
                <div className='py-5 text-center'>
                <a href={CV} target='_blank' rel="noreferrer" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Download CV</a>
                </div>
                </div>
                <div>
                <img src={PortfolioImage} alt="MyImg" className='rounded-3xl mx-auto w-2/3 h-400 w-400' />
                </div>
                </div>
            </div>  
  )
}

export default About