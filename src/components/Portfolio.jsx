import React from 'react'

import Bookstore from "../assets/portfolio/Bookstore.png"
import petsVeterinary from "../assets/portfolio/pets-veterinary.png"
import phpAudioRecord from "../assets/portfolio/PHP-audio-record-system.png"
import phpFileStorage from "../assets/portfolio/PHP-file-storage-system.png"
import urlShortener from "../assets/portfolio/url-shortener.png"
import portfolio from "../assets/portfolio/portfolio.png"

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            title: 'Bookstore',
            src: Bookstore,
            code: 'https://github.com/SilvaRafael1/Bookstore-Own-API'
        },
        {
            id: 2,
            title: 'Pet Veterinary',
            src: petsVeterinary,
            code: 'https://github.com/SilvaRafael1/veterinary-petcare'
        },
        {
            id: 3,
            title: 'Portfolio',
            src: portfolio,
            code: 'https://github.com/SilvaRafael1/portfolio'
        },
        {
            id: 4,
            title: 'URL Shortener',
            src: urlShortener,
            code: 'https://github.com/SilvaRafael1/URL-Shortener'
        },
        {
            id: 5,
            title: 'PHP Audio Record',
            src: phpAudioRecord,
            code: '#'
        },
        {
            id: 6,
            title: 'PHP File Storage',
            src: phpFileStorage,
            code: 'https://github.com/SilvaRafael1/engenharia-clinica'
        }
    ]

  return (
    <div
    name="portfolio"
    className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
        <div
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
        >
            <div
            className='pb-8'
            >
                <p
                className='text-4xl font-bold inline border-b-4 border-gray-500'
                >Portfolio</p>
                <p
                className='py-6'
                >Confira alguns dos meus projetos</p>
            </div>

            <div
            className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'
            >
            {portfolios.map(({ id, title, src, code }) => 
            
                <div
                key={id}
                className='shadow-md shadow-gray-600 rounded-lg flex flex-col items-center'
                >
                    <span className='text-2xl font-bold py-3'>{title}</span>
                    <img 
                    src={src} 
                    alt="" 
                    className='rounded-md duration-200 hover:scale-105'
                    />
                    <div
                    className='flex items-center justify-center'
                    >
                        <form 
                        action={code}
                        target='_black'
                        >
                            <button
                            className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                            >
                                Code
                            </button>
                        </form>
                    </div>
                    
                </div>
                )}
            </div>
            
        </div>

    </div>
  )
}

export default Portfolio