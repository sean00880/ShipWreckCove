import React from 'react'
import Button from './Button';
import NavLinks from './NavLinks';

const NavBar = () => {
  return (
    <nav className="navigation">
    <div className="logo">
        <h2>ShipWreck Cove</h2>
    </div>
    <NavLinks/>
    <div className="nav-btns-con">
      <a href="https://t.me/Shipwreckc0ve">
        <Button className="nav-quote"
            name={'Telegram'}
            icon={'fas fa-chevron-right'}
            arrow={'arrow'}
            blob={'blob'}
        /></a>
    </div>
</nav>
  )
}

export default NavBar