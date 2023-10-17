import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

function NavBar() {
    return (
        <nav id="topBar">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ""
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ""
                }
            >
                Login
            </NavLink>
            <NavLink
                to="/mytasks"
                className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'active' : ""
                }
            >
                Tasks
            </NavLink>
        </nav>
    )
}

export default NavBar