import React from 'react'
import imgs3 from '../assets/NigusLogo.png'
import './css/header.css'

function Header() {
  return (
    <>
        <div className='RightHeaderContainer'>
            <div className="rightHeader">
                <h1>Registrar Dashboard</h1>
                <img src={imgs3} alt="" />
            </div>

        </div>
   </>
  )
}

export default Header
