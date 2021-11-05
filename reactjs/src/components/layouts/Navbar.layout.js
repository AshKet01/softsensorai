import React from 'react'

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo"><h1>SoftSensorAI</h1></div>
            <div className="nav-list">
                <ul>
                    <li className="nav-list-item"><a href="#">Home</a></li>
                    <li className="nav-list-item"><a href="#">Shop</a></li>
                    <li className="nav-list-item"><a href="#">About</a></li>
                    <li className="nav-list-item"><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
