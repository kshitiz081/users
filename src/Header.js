import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
        <div>
            <ul>
               
                <li>
                    <NavLink to='/Login'> Login</NavLink>
                </li>
                <li>
                    <NavLink to='/Signup'> SignUp </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header