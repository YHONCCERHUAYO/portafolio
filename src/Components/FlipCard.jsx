import React from 'react';
import './Flip.css'
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import react from '../images/react.svg';
import node from '../images/nodejs.svg';
import bootstrap from '../images/bootstrap.svg';
import git from '../images/git.svg';
import tailwind from '../images/tailwind.svg';
import javascript from '../images/javascript.svg';
import php from '../images/php.svg';
import mysql from '../images/mysql.svg';
import express from '../images/express-js.png';
import postgresql from '../images/postgresql.png';
import typescript from '../images/typescript.svg';

const FlipCard = () => {
    
    return (
        <div className="flex flex-col xl:flex-row mx-4 mt-8  items-center gap-7 relative -z-40">

            <div className="card h-64 w-96">
                <div className="card-inner ">
                    <div className="card-front">
                        <img src={img1} className="w-full h-full object-cover" />
                        <h2 className="card-title">Administrative Management System</h2>
                    </div>
                    <div className="card-back flex flex-col bg-slate-800">
                        <p className='text-white'>This system has 3 roles for administrative management of the institute.</p>
                        <div className='flex md:flex-row items-center mt-5 gap-4'>
                            
                            <img src={bootstrap} className='size-8' />
                            <img src={javascript} className='size-8' />
                            <img src={git} className='size-14' />
                            <img src={php} className='size-8' />
                            <img src={mysql} className='size-14' />

                        </div>
                        <button className='flex flex-row mt-7 h-10 bg-emerald-900 px-4 items-center rounded-full' type='button' >
                            <i className='bx bx-log-in mr-2 text-white'></i>
                            <a href='https://iestpvilcabamba.sistema.edu.pe/docente/login/' target='_blank' className='text-white'>Visit</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="card h-64 w-96">
                <div className="card-inner ">
                    <div className="card-front">
                        <img src={img2} className="w-full h-full object-cover" />
                        <h2 className="card-title">Inventory Module</h2>
                    </div>
                    <div className="card-back flex flex-col bg-slate-800">
                        <p className='text-white'>This module was implemented to be able to automate entries, exits and stock.</p>
                        <div className='flex md:flex-row items-center justify-center mt-5 gap-4'>
                            
                            <img src={bootstrap} className='size-8' />
                            <img src={javascript} className='size-8' />
                            <img src={git} className='size-14' />
                            <img src={react} className='size-8' />
                            <img src={node} className='size-8' />
                            <img src={express} className='size-8' />
                            <img src={postgresql} className='size-8' />
                        </div>
                        <button className='flex flex-row mt-7 h-10 bg-emerald-900 px-4 items-center rounded-full' type='button' >
                            <i className='bx bx-log-in mr-2 text-white'></i>
                            <a href='#' target='_blank' className='text-white'>Visit</a>
                        </button>
                    </div>
                </div>
            </div>

            <div className="card h-64 w-96">
                <div className="card-inner">
                    <div className="card-front">
                        <img src={img3} className="w-full h-full object-cover" />
                        <h2 className="card-title">On-line shop</h2>
                    </div>
                    <div className="card-back flex flex-col bg-slate-800">
                        <p className='text-white'>Virtual store for selling products with its categories and payment gateway.</p>
                        <div className='flex md:flex-row items-center justify-center mt-5 gap-4'>
                            
                            <img src={typescript} className='size-8' />
                            <img src={git} className='size-14' />
                            <img src={react} className='size-8' />
                            <img src={tailwind} className='size-8' />
                            <img src={node} className='size-8' />
                            <img src={express} className='size-8' />
                            <img src={postgresql} className='size-8' />

                        </div>
                        <button className='flex flex-row mt-7 h-10 bg-emerald-900 px-4 items-center rounded-full' type='button' >
                            <i className='bx bx-log-in mr-2 text-white'></i>
                            <a href='#' target='_blank' className='text-white'>Visit</a>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FlipCard;
