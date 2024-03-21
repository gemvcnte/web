'use client'
import React from "react"
import Image from 'next/image'
import Link from "next/link"


const Navbar = () => {
  return (
    <header className="flex justify-between py-5 px-10">
      <div className="pl-10 ">
        <Image src="../../public/next.svg" width={30} height={30} alt="Sample" />
      </div>
      <div>
        <ul className="flex">
          <li className="px-3"><Link href={'/'}>News</Link></li>
          <li className="pr-3"><Link href={'/about'}>About</Link></li>
          <li className="pr-3"><Link href={'/Contact'}>Contact</Link></li>
          <li><Link href={'/auth/login'}>Login</Link></li>
        </ul>
      </div>
    </header>
  )
}


export default Navbar
