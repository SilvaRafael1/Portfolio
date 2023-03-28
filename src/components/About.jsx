import React from 'react'

const About = () => {
  return (
    <div 
    name="sobre" 
    className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'
    >
        <div
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
        >
            <div
            className='pb-8'
            >
                <p
                className='text-4xl font-bold inline border-b-4 border-gray-500'
                >
                    Sobre
                </p>
            </div>

            <p
            className='text-xl mt-20'
            >
                Estudante de Análise e Desenvolvimento de Sistema no IFRS. Conhecimento nas tecnologias TypeScript, JavaScript, SQL, React.
            </p>

            <br />

            <p
            className='text-xl'
            >
                Possuo curso de HTML5, CSS, inglês incompleto - realizado entre os 2015-2019 -, curso inicial de informática (Word, Power Point, Excel) e curso completo de iniciação em design gráfico (Photoshop, Corel Draw, Adobe Flash, 3D Studio Max).
            </p>
        </div>
    </div>
  )
}

export default About