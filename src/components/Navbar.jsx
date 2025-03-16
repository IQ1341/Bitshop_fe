import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link 
            to="/" 
            className="text-green-600 hover:text-green-800 transition-colors relative after:block after:h-0.5 after:bg-green-600 after:w-0 after:hover:w-full after:transition-all"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/product" 
            className="text-green-600 hover:text-green-800 transition-colors relative after:block after:h-0.5 after:bg-green-600 after:w-0 after:hover:w-full after:transition-all"
          >
            Product
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className="text-green-600 hover:text-green-800 transition-colors relative after:block after:h-0.5 after:bg-green-600 after:w-0 after:hover:w-full after:transition-all"
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            className="text-green-600 hover:text-green-800 transition-colors relative after:block after:h-0.5 after:bg-green-600 after:w-0 after:hover:w-full after:transition-all"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
