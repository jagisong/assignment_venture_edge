import React from 'react'
import NavbarPage from '../pages/NavbarPage'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem("authToken");
        navigate('/login')
    }

    const handleClick1 = () => {
      navigate("/dashboard");
    };
  return (
    <div>
        <NavbarPage handleClick={handleClick} handleClick1={handleClick1}/>
    </div>
  )
}

export default Navbar