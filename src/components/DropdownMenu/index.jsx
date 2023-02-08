import React from 'react'
import './dropdownMenu.css'


const DropdownMenu = ({ handleSidebar }) => {
  return (
    <>
    {/* <button className='dropdownCloseBtn' onClick={handleSidebar} aria-label='close menu'>X</button> */}
    <ul className='dropdownBg'>
        
        <li className='listLinks'><a className='pageLinks' aria-label='home button' href='/' >Home</a></li>
        <li className='listLinks'><a className='pageLinks' aria-label='beer button' href='/beer' >Beer</a></li>
        <li className='listLinks'><a className='pageLinks' aria-label='about button' href='/about' >About</a></li>
        <li className='listLinks'><a className='pageLinks' aria-label='spirits button' href='/spirits' >Spirits</a></li>
        <li className='listLinks'><a className='pageLinks' aria-label='taproom button' href='/taproom' >Taproom</a></li>
        <li className='listLinks'><a className='pageLinks' aria-label='giving button' href='https://www.facebook.com/cahababrewingco/events/?ref=page_internal' target="_blank">Events</a></li>
        <li className='listLinks'><a className='pageLinks' aria-label='rent button' href='/rent' >Rent</a></li>


      </ul>
      </>
  )
}

export default DropdownMenu