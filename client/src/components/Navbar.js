import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [showNav, setShowNav] = useState(false)

  const showNavHandler = () => {
    setShowNav(!showNav)
  }

  return (
    <div>
      <nav className="rounded-t-xl border-b-2 bg-white py-6 px-6 border-gray-300 flex justify-end md:justify-start items-center mx-7 md:mx-12 pb-4 mt-6 z-50">
        {/* <div>
          <p className="text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none">
            Rectolab
          </p>
        </div> */}
        <div>
          <ul className="hidden md:flex justify-around items-center">
            <li className="mx-4"><Link to="/" className="text-md font-medium text-gray-800 hover:text-gray-500 transition-all duration-300">Todo</Link></li>
            <li className="mx-4"><Link to="/development" className="text-md font-medium text-gray-800 hover:text-gray-500 transition-all duration-300">Development</Link></li>
            <li className="mx-4"><Link to="/testing" className="text-md font-medium text-gray-800 hover:text-gray-500 transition-all duration-300">Testing</Link></li>
            <li className="mx-4"><Link to="/done" className="text-md font-medium text-gray-800 hover:text-gray-500 transition-all duration-300">Done</Link></li>
          </ul>
        </div>
        <div className="md:hidden burgers cursor-pointer" onClick={showNavHandler}>
          <div className="burger w-7 h-1 pt-1 bg-gray-900 rounded-sm"></div>
          <div className="burger w-7 h-1 pt-1 bg-gray-900 mt-1 rounded-sm"></div>
        </div>
      </nav>

      <div className={`respo-nav fixed w-full md:hidden z-10 ${showNav ? '' : 'show'}`}>
        <div className="mx-auto w-11/12 bg-white border-b-8 border-blue-600 rounded-b-md p-2">
          <ul className="flex-col">
            <li className="mx-2 my-1 py-2 px-4 hover:bg-gray-200 cursor-pointer text-gray-900 hover:font-bold rounded-md"><Link to="/" className="text-md font-medium transition-all duration-300">Todo</Link></li>
            <li className="mx-2 my-1 py-2 px-4 hover:bg-gray-200 cursor-pointer text-gray-900 hover:font-bold rounded-md"><Link to="/development" className="text-md font-medium transition-all duration-300">Development</Link></li>
            <li className="mx-2 my-1 py-2 px-4 hover:bg-gray-200 cursor-pointer text-gray-900 hover:font-bold rounded-md"><Link to="/testing" className="text-md font-medium transition-all duration-300">Testing</Link></li>
            <li className="mx-2 my-1 py-2 px-4 hover:bg-gray-200 cursor-pointer text-gray-900 hover:font-bold rounded-md"><Link to="/done" className="text-md font-medium transition-all duration-300">Done</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
