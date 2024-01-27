"use client"
import { Icon } from '@iconify/react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between items-center lg:px-24 px-10 py-5 fixed w-full bg-white z-30 '>
      <Link href={{ pathname: '/' }} className='text-2xl font-semibold'>mealapp</Link>
      <div className='text-sm items-center gap-6 lg:flex hidden'>
        <Link href={{ pathname: '/' }}>Home</Link>
        <Link href={{ pathname: '/' }}>Food</Link>
        <Link href={{ pathname: '/' }}>Ingredients</Link>
        <Link href={{ pathname: '/' }}>Local Culinary</Link>
      </div>
      <Icon className='lg:hidden cursor-pointer' width={26} icon="fe:bar"/>
    </header>
  )
}

export default Header