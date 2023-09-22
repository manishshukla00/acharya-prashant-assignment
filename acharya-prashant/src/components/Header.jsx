import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import { IoCallOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Header = () => {
  const [search, setSearch] = useState(false);
  return (
    <>
    {/* header menu part one */}
      <div className='w-full h-auto flex justify-between bg-orange-600 p-2 px-4'>
        <div className='w-[60%] h-auto flex items-center gap-4'>
          <img className='w-[31px]' src="https://acharyaprashant.org/images/ic_favicon.png" alt="Acharya prashant" />
            <ul className='hidden md:flex justify-center items-center text-white gap-4'>
                <li>Home</li>
                <li>Live Sessions</li>
                <li>Video Series</li>
                <li>AP Books</li>
                <li>AP Articles</li>
                <li>Invite</li>
                <li>In Media</li>
                <li>Donate</li>
            </ul>
        </div>
        <div className='flex gap-4 justify-center items-center text-white'>
           <span className='block md:hidden text-sm border border-white font-medium px-2 rounded-md'>Donate</span>
           <div className='flex'>
           <span className='text-sm border border-white flex justify-center items-center font-medium px-1 rounded-md'>EN</span>
           <MdArrowDropDown size={20} />
           </div>
           <span className='hidden md:block'><IoCallOutline className='text-2xl' /></span>
           <span className='flex items-center justify-center'><RxHamburgerMenu className='text-2xl' /></span>
           <span className='hidden md:block'>Menu</span>
        </div>
      </div> 
         {/* header menu part two */}
         <div className='w-full h-auto bg-black/80 flex justify-between md:justify-center items-center p-2'>
            <div className='flex justify-center items-center'>
           <div className='w-4 h-4 bg-red-600 border border-white rounded-full' />
           <p className='text-white px-2'>Get access to all 350+ video series at once!</p>
           </div>
           <div>
            <button className='text-white border border-white px-2 rounded-md'>Click Here</button>
           </div>
        </div>
        {/* header menu part three */}
        {search ? (
          <div className='flex justify-center items-center p-2'>
            <AiOutlineArrowLeft className='ml-2' onClick={() => setSearch(!search)} size={20} />
            <input className='text-orange-400 w-full focus:border-none p-2' type="text" />
          </div>
        ) : (
          <div className='w-full h-auto flex justify-between border-b items-center py-2'>
          <div className='flex justify-center items-center px-4'>
              <h2>Video Series</h2>
              <span className='text-sm p-3 border flex justify-center items-center font-medium ml-4 px-1 rounded-md'>ALL<MdArrowDropDown size={20} /></span>
              <input className='text-orange-400 w-[20rem] hidden md:block p-2 focus:border-none border' type="text" placeholder='Search for video series' />
              <span className='border-t border-r border-b bg-orange-200 p-3'><AiOutlineSearch onClick={() => setSearch(!search)} size={20} /></span>
          </div>
          <div className='mx-4'>
              <button className='bg-orange-400 px-2 text-white rounded-md'>Login</button>
          </div>
          </div>   
        )
        }
    </>
  )
}

export default Header