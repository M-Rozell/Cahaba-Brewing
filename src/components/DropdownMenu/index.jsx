import React from 'react'
import './dropdownMenu.css'


const DropdownMenu = ({ handleSidebar }) => {
  return (
    <>
    <button className='dropdownCloseBtn' onClick={handleSidebar}>X</button>
    <ul className='dropdownBg'>
        
        <li className='listLinks'><a aria-label='home' href='/' >Home</a></li>
        <li className='listLinks'><a aria-label='beer' href='/beer' >Beer</a></li>
        <li className='listLinks'><a aria-label='about' href='/about' >About</a></li>
        <li className='listLinks'><a aria-label='spirits' href='/spirits' >Spirits</a></li>
        <li className='listLinks'><a aria-label='taproom' href='/taproom' >Taproom</a></li>
        <li className='listLinks'><a aria-label='giving' href='/giving' >Giving</a></li>
        <li className='listLinks'><a aria-label='rent' href='/rent' >Rent</a></li>


      </ul>
      </>
  )
}

export default DropdownMenu