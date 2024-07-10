import { useState } from 'react';
import cv from '../cv/CV-CcerhuayoRaqui,Yhon.pdf';
import perfil from '../images/perfil2.jpg';
import avatar from '../images/avatar01.png';
import react from '../images/react.svg';
import node from '../images/nodejs.svg';
import bootstrap from '../images/bootstrap.svg';
import git from '../images/git.svg';
import javascrip from '../images/javascript.svg';
import python from '../images/python.svg';
import tailwind from '../images/tailwind.svg';
import typescript from '../images/typescript.svg';
import express from '../images/express-js.png';
import mssql from '../images/ms-sql.svg';
import mysql from '../images/mysql.svg';
import php from '../images/php.svg';
import postgresql from '../images/postgresql.png';
import powerbi from '../images/PowerBI.png';
import scrum from '../images/scrum.png';

import Feed from './Feed';
import FeedEdu from './FeedEdu';
import FlipCard from './FlipCard';

function Body() {
  const [copiedMessage, setCopiedMessage] = useState('');

  const celular = '+51 929209456';
  const email = 'yhonccerhuayo@gmail.com';


  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedMessage(`Copied: ${text}`);
    setTimeout(() => setCopiedMessage(''), 3000);
  };

  return (
    <div className='md:container md:mx-auto'>
      {/* home */}
      <section className="md:container md:px-20 mt-16">
        <div className='flex flex-col md:flex-row items-center justify-between mt-20'>

          <div className="text-center md:text-left md:mr-8">
            <h1 className='text-red-500 text-6xl md:text-6xl lg:text-7xl xl:text-9xl font-bold'>Full Stack</h1>
            <h2 className='text-violet-600 text-6xl md:text-6xl lg:text-7xl xl:text-9xl font-bold'>Developer</h2>
            <p className='text-white text-xl text-center md:text-2xl lg:text-3xl mt-8'>"High expectations are the key <br /> to everything".</p>
          </div>

          <img className='w-64 h-44 md:w-96 md:h-64 lg:w-2/5 lg:h-2/5 mt-8 md:mt-0' src={avatar} alt="Avatar" />
        </div>

        <div className="overflow-x-auto mt-4 md:mt-0">
          <div className='flex md:flex-row items-center justify-center mt-9 gap-4'>
            <img src={react} className='size-12' />
            <img src={node} className='size-12' />
            <img src={bootstrap} className='size-12' />
            <img src={javascrip} className='size-12' />
            <img src={git} className='size-12' />
            <img src={python} className='size-12' />
            <img src={tailwind} className='size-12' />
            <img src={typescript} className='size-12' />
            <img src={express} className='size-12' />
            <img src={mssql} className='size-12' />
            <img src={mysql} className='size-12' />
            <img src={php} className='size-12' />
            <img src={postgresql} className='size-12' />
            <img src={powerbi} className='size-12' />
            <img src={scrum} className='size-12' />
          </div>
        </div>

        <hr className='border-2 mt-7 w-0 md:w-auto mb-8' />
      </section>

      <section className="md:container md:px-20 pt-16 -mt-16" id='about'>
        <h2 className="px-5 md:pl-0 text-white text-3xl md:text-3xl lg:text-4xl font-bold">About me</h2>
        <hr className='border-2 mt-2  ms-5 md:ms-0 w-16 md:w-16 border-green-700' />
        <div className="flex flex-col lg:flex-row items-center  mt-5">

          <div className="flex-shrink-0">
            <img className="w-52 h-52 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full" src={perfil} alt="Perfil" />

            <div className='flex flex-col items-center py-5'>
              <div
                className="flex items-center justify-between w-72 px-4 py-2 text-sm text-white bg-transparent rounded cursor-pointer hover:bg-gray-600 transition-colors"
                onClick={() => copyToClipboard(celular)}
              >
                <span>
                  <i className='bx bx-phone mr-4'></i>
                  {celular}
                </span>
                <button className="ml-2 text-blue-500 hover:underline">
                  <i className='bx bx-copy' ></i>
                </button>
              </div>

              <div
                className="flex items-center justify-between w-72 px-4 py-2 text-sm text-white rounded cursor-pointer hover:bg-gray-600 transition-colors"
                onClick={() => copyToClipboard(email)}
              >
                <span>
                  <i className='bx bx-mail-send mr-4' ></i>
                  {email}
                </span>
                <button className="ml-2 text-blue-500 hover:underline">
                  <i className='bx bx-copy' ></i>
                </button>
              </div>

            </div>
            {copiedMessage && (
              <div className="mt-2 text-green-500 text-center">
                {copiedMessage}
              </div>
            )}
          </div>


          <div className="md:ml-7 mt-5 md:mt-0 flex-1 items-center pb-10">
            <h2 className="text-white text-2xl text-center md:text-3xl xl:text-4xl px-5">Hi, I'm Yhon Ccerhuayo! 👋</h2>
            <br />
            <p className="text-white text-xl lg:text-2xl px-5">
              Bachelor in Systems Engineering with over 2 years of experience in Full Stack development, database modeling
              and administration, IT systems support, and data analysis. <br /> Demonstrated ability to work in agile development
              environments, effectively collaborating with multidisciplinary teams to deliver high-quality projects within
              established deadlines. <br /> Strong focus on problem-solving for continuous improvement, with a constant commitment
              to learning and adopting new technologies and methodologies. Highly motivated to contribute to organizational
              goals and continuous professional growth.
            </p>

            <div className='flex justify-center pt-4'>
              <a
                className='mt-4 px-4 py-2 bg-green-900 text-white rounded-lg hover:bg-violet-900 transition-colors duration-300'
                href={cv}
                target='_blank'
              >
                Download CV
              </a>
            </div>

          </div>

        </div>


        <hr className='border-2 mt-7 w-0 md:w-auto mb-7' />
      </section>

      <section className='md:container md:px-20 pt-16 -mt-16 mx-5 mb-7' id='resume'>
        <h2 className=' md:pl-0 text-white text-3xl md:text-3xl lg:text-4xl font-bold'>Resume</h2>
        <hr className='border-2 mt-2  w-16 md:w-16 border-green-700 mb-7' />
        <div className='flex max-w-7xl '>
          <div className='flex-col'>
            <i className='bx bxs-business text-white text-3xl'></i>
          </div>
          <div className='flex-1 space-y-4 pl-8'>
            <h3 className='text-white text-xl md:text-3xl lg:text-3xl font-bold'>Experience</h3>
          </div>
        </div>

        <Feed />

        <div className='flex max-w-7xl mt-7'>
          <div className='flex-col'>
            <i className='bx bxs-graduation text-white text-3xl'></i>
          </div>
          <div className='flex-1 space-y-4 pl-8'>
            <h3 className='text-white text-xl md:text-3xl lg:text-3xl font-bold'>Education</h3>
          </div>
        </div>

        <FeedEdu />

      </section>

      <section className='md:container md:px-20 pt-16 -mt-16 mx-5' id='projects'>
        <h2 className='md:pl-0 text-white text-3xl md:text-3xl lg:text-4xl font-bold'>Projects</h2>
        <hr className='border-2 mt-2  w-16 md:w-16 border-green-700 mb-7' />

        <FlipCard />
      </section>

      <footer className='bg-gray-800 mt-20 py-7'>
        <p className="text-white text-center">&copy; 2024 Yhon Ccerhuayo. Todos los derechos reservados.</p>
      </footer>


    </div>
  );
}

export default Body;