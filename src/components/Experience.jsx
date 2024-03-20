import React from 'react'

const Experience = () => {

    const trabalhos = [
        {
            id: 1,
            title: "Hospital Tacchini",
            funcao: "Assistente de Suporte de TI",
            src: "https://www.hospitaltacchini.com.br",
            data_ini: "Março de 2022",
            data_fin: "Presente",
        },
        {
            id: 2,
            title: "Compass UOL",
            funcao: "Estágio de Desenvolvimento",
            src: "https://compass.uol/pt/home",
            data_ini: "Maio de 2023",
            data_fin: "Outubro de 2023"
        }
    ]

  return (
    <div
    name="experiência"
    className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'
    >
        <div
        className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'
        >

            <div>
                <p
                className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'
                >
                    Experiência
                </p>
                <div className='border-l-4 border-solid border-white'>
                    {trabalhos.map(({id, title, funcao, src, data_ini, data_fin}) =>
                        <div key={id} className='my-8 pl-2'>
                            <a href={src} target='_blank' rel='noreferrer'>
                                <h1 className='font-bold text-xl'>{title}</h1>
                            </a>
                            <p>{funcao}</p>
                            <p>{data_ini} - {data_fin}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience