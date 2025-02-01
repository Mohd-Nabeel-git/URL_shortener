import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex bg-slate-500 justify-between items-center h-[10vh] px-3'>
        <div className="logo font-bold text-lg"><Link href='/shorten'>ZapLink</Link></div>
        <ul className='flex gap-5'>
            <Link href='/home'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact Us</li></Link>
            <Link href='/shorten'><li><button>Shorten</button></li></Link>
            <li className='flex gap-3'>
                <Link href='/shorten'><button  className= 'border-slate-300 border-2 rounded-lg bg-slate-300 px-2'>Try now</button></Link>
                <Link href='/github'><button  className='border-slate-300 border-2 rounded-lg bg-slate-300 px-2'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
