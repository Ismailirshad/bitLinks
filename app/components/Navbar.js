"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function Navbar() {
  const [isOpen , setIsOpen] = useState(false);
  return (
    <nav className='h-16 bg-purple-600 justify-between flex items-center text-white'>
      <div className='logo font-bold text-lg mx-2'>
        <Link href="/shorten">BitLinks</Link>
        
      </div>
      <ul className='hidden md:flex   items-center justify-center gap-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/shorten'>shorten</Link>
        <Link href='/contact'>contact us</Link>
        <li className='gap-2 flex'>
            <Link href='generate'><button className='bg-purple-500 font-bold rounded-xl p-2'>Try Now</button></Link>
            <Link href='.github'><button  className='bg-purple-500 font-bold rounded-xl p-2'>GitHub</button></Link>
        </li>
      </ul>
       <button
          className="md:hidden bg-purple-800 px-3 py-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

         {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-purple-700 text-center flex flex-col gap-4 p-4 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/shorten">Shorten</Link>
          <Link href="/contact">Contact Us</Link>
          <li className="gap-2 flex">
            <Link href="/generate">
              <button className="bg-purple-500 font-bold rounded-xl p-2 ">Try Now</button>
            </Link>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-purple-500 font-bold rounded-xl p-2">GitHub</button>
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar
