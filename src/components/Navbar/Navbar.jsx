import React from 'react';
import "./Navbar.scss";
import { NavLink, Outlet } from 'react-router-dom';
import { useValue } from '../../Context';



export default function Navbar() {
    const { signIn,  handleSignin } = useValue();
    

    

    return (
        <>
            <div className="nav">
                <h3>BusyBusy[DIBYA]</h3>
                <div className="right">
                    <img src="https://cdn-icons-png.flaticon.com/128/1946/1946433.png" alt="home" className='icon-style' />
                    <NavLink to="/" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>
                        <span>Home</span>
                    </NavLink>

                    {signIn && (
                        <>
                            <img src="https://cdn-icons-png.flaticon.com/128/2435/2435281.png" alt="cart" className='icon-style' />
                            <NavLink to="/myorder" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>
                                <span>Myorders</span>
                            </NavLink>
                        </>
                    )}

                    {signIn && (
                        <>
                            <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart" className='icon-style' />
                            <NavLink to="/cart" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>
                                <span>Cart</span>
                            </NavLink>
                        </>
                    )}

                    <img src="https://cdn-icons-png.flaticon.com/128/1388/1388957.png" alt="signin" className='icon-style' />
                    <NavLink to="/signin" style={({ isActive }) => isActive ? { color: "blue" } : { color: "black" }}>
                        <span onClick={handleSignin}>{signIn ? "Log Out" : "Sign In"}</span>
                    </NavLink>
                </div>
            </div>
            <Outlet />
        </>
    );
}
