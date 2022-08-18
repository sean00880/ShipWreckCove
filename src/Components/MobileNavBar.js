import React from 'react'
import Button from './Button';
import NavLinks from './NavLinks';
import {CgMenuRound} from 'react-icons/cg';
import {CgCloseO} from 'react-icons/cg'
import { useState } from 'react';

const MobileNavBar = () => {

  const [open, setOpen] = useState(false);

  const hamburgerIcon = <CgMenuRound className='hamburger' onClick={()=> setOpen(!open)}/>
  const closeIcon = <CgCloseO className='hamburger' onClick={()=> setOpen(!open)}/>

  return (
    <nav className="mobileNavigation">
    
    <div className="logo">
        <h2>ShipWreck Cove</h2>
    </div>
    
    {open ? closeIcon: hamburgerIcon}
    {open && <NavLinks/>}
    <div className="nav-btns-con">
        <Button className="nav-quote"
            name={'Telegram'}
            icon={'fas fa-chevron-right'}
            arrow={'arrow'}
            blob={'blob'}
        />
    </div>
</nav>
  )
}

export default MobileNavBar