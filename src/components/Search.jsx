import React, { useEffect, useState } from 'react'
import {IoSearch} from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

const Search = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSearchPage,setIsSearchPage] = useState (false)
  useEffect(()=>{
    const isSearch = location.pathname === "/search"
    setIsSearchPage(isSearch)
  })
  const redirectTosearchPage = ()=>{
    navigate ("/search")
  }


  return (
    <div className='w-full min-w-[300px] lg:min-w-[420] h-12 lg:h-12 rounded-lg border p-1 flex items-center overflow-hidden  text-slate-500 bg-slate-50 group : focus-within:border-primary-200'>
        <button className='flex justify-center items-center h-full p-3 group-focus-within:text-primary-200'>
            <IoSearch size={22}/>
        </button>
        <div>
          {
            !isSearchPage ?(
              <div onClick={redirectTosearchPage} className='w-full h-full flex justify-center'>
              <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Search "Bibit Cabai"',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Search "Bibit Pakcoi"',
              1000,
              'Search "Bibit Melon"',
              1000,
              'Search "Bibit Timun"',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
              </div>
            ) :(
              <div className='w-full h-full'>
                <input 
                type="text"
                placeholder='Cari Keperluan Bibit '
                autoFocus={true}
                className='bg-transparent w-full h-full outline-none'
                />
              </div>
            )
          }
        </div>
       
    </div>
  )
}

export default Search