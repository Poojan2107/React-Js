import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-dark p-2 d-flex justify-content-between list-unstyled '>
        <Link to={'/'}>Home</Link>
        <Link to={'/Services'}>Services </Link>
        <Link to={'/About'}> About US.</Link>
        <Link to={'/Contact'}> Contact.</Link>
    </nav>
  )
}

export default Navbar
