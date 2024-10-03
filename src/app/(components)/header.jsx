"use client"
import React from 'react'

const Header = () => {
  return (
    <header className='w-full top-[500px] left-0 z-[100] sticky'>
      <nav className='max-w-[95%] px-2 mx-auto py-6 border-b border-white flex items-center justify-between text-white font-medium relative'>
        <ul className='space-x-3 flex flex-row uppercase text-xs'>
          {
            [
              [ "articles"], ["shop"], ["submit"]
            ].map(([item])=>(
              <li key={item} className='hover:underline cursor-pointer'>
                { item }
              </li>
            ))
          }
        </ul>
          <h1 className='text1 text-[25px] font-bold tracking-tighter absolute left-[40%]'>MinimalGoods</h1>
        <div className='text-xs'>
          (2021),ALL RIGHTS RESERVED
        </div>
      </nav>
    </header>
  )
}

export default Header
