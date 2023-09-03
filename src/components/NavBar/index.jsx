import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <h1>Ski Blog</h1>
                <div className="links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/create">New Blog</NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default NavBar;
