import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icons from '../../assets/images/sprite.svg';

function Navbar() {
    const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);

    return (
        <div className="navigation">
            <div className="container">
                <nav className="nav">
                    <div
                        className="nav__hamburger"
                        onClick={(e) => setIsMobMenuOpen(true)}
                    >
                        <svg>
                            <use xlinkHref={`${icons}#icon-menu`}></use>
                        </svg>
                    </div>

                    <div className="nav__logo">
                        <Link to="/" className="scroll-link">
                            SoftSensorAI
                        </Link>
                    </div>

                    <div className={`nav__menu ${isMobMenuOpen ? 'open' : null}`}>
                        <div className="menu__top">
                            <span className="nav__category">SoftSensorAI</span>
                            <a
                                href="#"
                                className="close__toggle"
                                onClick={(e) => setIsMobMenuOpen(false)}
                            >
                                <svg>
                                    <use xlinkHref={`${icons}#icon-cross`}></use>
                                </svg>
                            </a>
                        </div>

                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link to="/" className="nav__link scroll-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav__item">
                                <a href="#category" className="nav__link scroll-link">
                                    Category
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#news" className="nav__link scroll-link">
                                    Blogs
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link scroll-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="nav__icons">
                        <a href="#" className="icon__item">
                            <svg>
                                {/* <use xlinkHref="../../assets/images/sprite.svg#icon-user"></use> */}
                                <use xlinkHref={`${icons}#icon-user`}></use>
                            </svg>
                        </a>

                        <a href="#" className="icon__item">
                            <svg>
                                <use xlinkHref={`${icons}#icon-search`}></use>
                            </svg>
                        </a>

                        <Link to="/cart" className="icon__item">
                            <svg>
                                <use xlinkHref={`${icons}#icon-shopping-basket`}></use>
                            </svg>
                            <span id="cart__total">0</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
