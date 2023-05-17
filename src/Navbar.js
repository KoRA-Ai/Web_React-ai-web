import React from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useRef} from 'react'
import './Navbar.css'

export default function Navbar() {
    const navRef = useRef();

    const showNavbar = ()=>{
        navRef.current.classList.toggle('responsive_nav');
    }
    const hideNavbar =()=>{
        navRef.current.classList.remove("responsive_nav")
    }


    return (
        <header>
        <h3>Ai</h3>
            <nav ref = {navRef}>
                <Link to="/">Home</Link>
                <Link to="/mcd-menu">McDonald Menu</Link>
                <button className='nav-btn nav-close-btn' onClick={hideNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    )
}
