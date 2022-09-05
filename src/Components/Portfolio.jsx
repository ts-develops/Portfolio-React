import React from 'react'
import RickandMorty from '../assets/rickandmorty.jpg'
import LandingPage from '../assets/landing page.png'
import CryptoTracker from '../assets/crypto-tracker.png'
import Qrcode from '../assets/QR-code generator.png'


const Portfolio = () => {
  return (
            <div id='portfolio' className='md:h-screen w-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 '>
                <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline'>Portfolio</p>
                    <p className='py-6'>Projects I have created</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md rounded-lg'>
                        <img className='rounded h-48 w-96' src={CryptoTracker} alt="crypto-portfolio" />
                        <div className='flex items-center justify-center'>
                            <a href='https://ts-cryptocurrency-tracker.netlify.app/' target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4'>Live</a>
                            <a href='https://github.com/ts-develops/crypto-tracker' target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4'>Code</a>
                        </div>
                    </div>
                    <div className='shadow-md rounded-lg'>
                        <img className='rounded h-48 w-96 object-cover' src={Qrcode} alt="qrcodegenerator" />
                        <div className='flex items-center justify-center'>
                            <a href='https://ts-qrcodegenerator.netlify.app/' target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4'>Live</a>
                            <a href='https://github.com/ts-develops/QRcode-generator' target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4'>Code</a>
                        </div>
                    </div>
                    <div className='shadow-md rounded-lg'>
                        <img className='rounded h-48 w-96 object-cover' src={LandingPage} alt="landingpage" />
                        <div className='flex items-center justify-center'>
                            <a href='https://dynamic-landing-site.netlify.app/' target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4'>Live</a>
                            <a href='https://github.com/ts-develops/Dynamic-Landing-Page' target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4'>Code</a>
                        </div>
                    </div>
                    <div className='shadow-md rounded-lg'>
                        <img className='rounded h-48 w-96 ' src={RickandMorty} alt="rickandmorty" />
                        <div className='flex items-center justify-center'>
                            <a href='https://rickandmortyapi-ts.netlify.app/' target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4'>Live</a>
                            <a href='https://github.com/ts-develops/Rick-and-Morty-API' target='_blank' rel="noreferrer" className='w-1/2 px-6 py-3 m-4'>Code</a>
                        </div>
                    </div> 
                  
                    
                        
                </div>

                </div>
            </div>  
  )
}

export default Portfolio