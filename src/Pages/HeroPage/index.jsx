
import React, { useState } from 'react';
import './hero.css'
import Navbar from '../../components/Navbar';


const Landing = () => {

  const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <>
      <header>
        <nav>
          <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}/>
        </nav>
      </header>
      
      <main className={openSidebar ? 'hidePage' : 'showPage'}>

        <section className='mainSection'>
          <h1 className='cahabaTitleLanding'>Cahaba Brewing</h1>
        </section>

      </main>
    </>
  )
}

export default Landing
