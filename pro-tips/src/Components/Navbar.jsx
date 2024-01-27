import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const textStyle = {
        color:"white",
        fontSize:"20px",
        padding:'25px',
        textDecoration:"None"
    }
  return (
    <div className='Navbar'>
        <Link to={'/'} style={textStyle}>Kalvium❤️</Link>
        <div>
            <Link to={'/Contact'} style={textStyle}>Contact Us</Link>
            <Link to={'/Register'} style={textStyle}>Register Form</Link>
        </div>
    </div>
  )
}

export default Navbar
