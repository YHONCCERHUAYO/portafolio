import { useState } from 'react';
import logo from '../images/logo.png';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState();
  const botonMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0  bg-gray-800 z-40">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 ">
          <div className="relative flex h-16 items-center justify-between">

            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={menuOpen}
                onClick={botonMenu}
              >

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>

              </button>
            </div>

            <div className="lg:-ml-7">
              <a 
                className="flex flex-shrink-0 items-center"
                href='#'
              >
                <img className="h-8 w-auto hidden sm:block" src={logo} alt="logo" />
                <p className='text-white ps-3 ms-12 sm:ms-0'>Yhon Ccerhuayo</p>
              </a>
            </div>

            <div className="hidden sm:ml-6 sm:block justify-center">
              <div className="flex space-x-4">

                <a href='#' type='button' className="rounded-md  px-3 py-2  hover:bg-gray-700 text-sm font-medium text-white" aria-current="page" >Home</a>
                <a href="#about" type='button' className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                <a href="#resume" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Resume</a>
                <a href="#projects" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"></a>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <a
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                href='https://www.linkedin.com/in/yhon-ccerhuayo-raqui/'
                target='_blank'
              >
                <i className='bx bxl-linkedin text-blue-900 text-3xl'></i>
              </a>

              <div className="relative ml-3">
                <div>
                  <a
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                    href='https://github.com/YHONCCERHUAYO'
                    target='_blank'
                  >
                    <i className='bx bxl-github text-white text-3xl'></i>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className={`${menuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</a>
            <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
            <a href="#resume" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Resume</a>
            <a href="#projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;