import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, MobileIcon} from './NavbarElements';

const Navbar = ({ toggle }) => {
    return (
        <>
             <Nav>
                
                     <MobileIcon onClick={toggle}>
                         <FaBars />
                     </MobileIcon>
                
             </Nav>
        </>
    )
}

export default Navbar;
