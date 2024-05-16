import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <ul className='flex justify-center gap-9 p-2 bg-gray-500'>
            <Link href='/'><li className='hover:text-blue-300'>Home</li></Link>
            <Link href='/about'><li className='hover:text-blue-300'>About</li></Link>
            <Link  href='/contact'><li className='hover:text-blue-300'>Contact</li></Link>
        </ul>
    </>
  )
}

export default Navbar