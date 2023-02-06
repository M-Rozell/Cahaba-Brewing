import React from 'react'
import { useState, useRef, useEffect } from 'react'
import DropdownMenu from '../DropdownMenu'
import Logo from '../LogoButton'
import './navbar.css'




const Navbar = () => {

    const ref = useRef()

    const [openSidebar, setOpenSidebar] = useState(false)

    const handleSidebar = e => {
        //toggle is Active State on click
        setOpenSidebar(current => !current)
    };

    useEffect(() => {
        const checkOutsideClick = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (openSidebar && ref.current && !ref.current.contains(e.target)) {
                setOpenSidebar(false)
            }
        }
        document.addEventListener("mousedown", checkOutsideClick)

        return () => {
            //cleanup the event listner
            document.removeEventListener("mousedown", checkOutsideClick)
        }
    }, [openSidebar])



    return (
        <nav className='navBody'>

            <div className='navLogo' aria-label="menu" onClick={handleSidebar}>
                <Logo />
            </div>

            <div className={openSidebar ? 'slideOutMenu-Open' : 'slideOutMenu'} ref={ref}>
                <DropdownMenu 
                handleSidebar={handleSidebar}
                />
            </div>

        </nav>
    )
}

export default Navbar;