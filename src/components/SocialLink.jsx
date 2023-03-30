import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/rafael-augusto-da-silva-a06774206/',
            style: 'rounded-tr-md hover:bg-sky-400'
        },
        {
            id: 2,
            child: (
                <>
                    GitHub <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/SilvaRafael1/',
            style: 'hover:bg-gray-400'
        },
        {
            id: 3,
            child: (
                <>
                    E-mail <HiOutlineMail size={30}/>
                </>
            ),
            href: 'mailto:rafaelaugustodasilva2@gmail.com',
            style: 'hover:bg-red-400'
        },
        {
            id: 4,
            child: (
                <>
                    Currículo <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/Profile.pdf',
            style: 'rounded-br-md hover:bg-[#8C9150]',
            download: true,
        }
    ]

  return (
    <div
    className='hidden lg:flex flex-col top-[35%] left-0 fixed'
    >
        <ul>

            {links.map(({ id, child, href, style, download }) =>
                <li
                key={id}
                className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500' + " " + style}
                >
                    <a 
                    href={href}
                    className='flex justify-between items-center w-full text-white'
                    download={download}
                    target='_blank'
                    rel='noreferrer'
                    >
                        {child}
                    </a>
                </li>
            )}

        </ul>
    </div>
  )
}

export default SocialLink