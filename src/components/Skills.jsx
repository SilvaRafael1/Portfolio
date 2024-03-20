import React from 'react'
import php from "../assets/php.png";
import github from "../assets/github.png";
import nodejs from "../assets/nodejs.png";
import javascript from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";


const Skills = () => {

    const techs = [
        {
            id: 1,
            src: nodejs,
            title: 'NodeJS',
            style: 'shadow-green-500'
        },
        {
            id: 2,
            src: php,
            title: 'PHP',
            style: 'shadow-purple-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: typescript,
            title: 'TypeScript',
            style: 'shadow-blue-700'
        },
        {
            id: 5,
            src: ReactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 6,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
        {
            id: 7,
            src: tailwind,
            title: 'TailwindCSS',
            style: 'shadow-sky-400'
        }
    ]

  return (
    <div
    name="habilidades"
    className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'
    >
        <div
        className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'
        >

            <div>
                <p
                className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'
                >
                    Habilidades
                </p>
                <p
                className='py-6'
                >
                    Tecnologias com as quais trabalhei em projetos
                </p>
            </div>

            <div
            className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'
            >
                
                {techs.map(({ id, src, title, style }) => (
                    <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                    >
                        <img
                        src={src} 
                        alt="" 
                        className='w-20 mx-auto'
                        />
                        <p
                        className='mt-4'
                        >{title}</p>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Skills