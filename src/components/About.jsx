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
                Estudante de Análise e Desenvolvimento de Sistema no IFRS. Conhecimento nas tecnologias NodeJS, TypeScript, JavaScript, SQL, React.
            </p>

            <br />

            <p
            className='text-xl'
            >
                Possuo certificados de:
                <ul className='list-disc ml-6 mt-2'>
                    <li>
                        <a href="https://www.credly.com/badges/296c25b1-9f7d-4bdf-9af5-9a35a0a52434/linked_in_profile" target='_blank' rel='noreferrer'>
                            AWS Certified Cloud Practitioner
                        </a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/certificate/UC-8e91abb6-d6e6-4f51-8c8a-33e0638fe737/" target='_blank' rel='noreferrer'>
                            AWS Serverless APIs & Apps 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/certificate/UC-0affece8-60a3-4937-b047-db2e1041806b/" target='_blank' rel='noreferrer'>
                            Git Complete
                        </a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/certificate/UC-e1bea50b-b1b0-493c-b657-e6360378ebf8/" target='_blank' rel='noreferrer'>
                            Introduction to Agile - Scrum and Kanban
                        </a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/certificate/UC-7f7affd2-d349-4461-8c87-a243b4af385b/" target='_blank' rel='noreferrer'>
                            JavaScript Basics for Beginners
                        </a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/certificate/UC-e4e8b911-07e5-4f85-a050-421c8bd5b2cb/" target='_blank' rel='noreferrer'>
                            NodeJS: Advanced Concepts
                        </a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/certificate/UC-bd18a4b5-ece7-4e3b-9600-7569593965dc/" target='_blank' rel='noreferrer'>
                            NodeJS Tutorial and Projects
                        </a>
                    </li>
                </ul>
            </p>
        </div>
    </div>
  )
}

export default About