import React from 'react'
import './NavBar.css';
import { Cartwidget } from '../CartWidget/CartWidget';

function NavBar() {
    return (
    <div className="nav">
        <input type="checkbox" id="nav-check"></input>
        <div className="nav__header">
            <div className="nav__header__title">
            Flat Store
            </div>
        </div>
        
        <div className="nav__btn">
            <label className="nav__btn__label" htmlFor="nav-check">
            <span className="nav-check__line"></span>
            <span className="nav-check__line"></span>
            <span className="nav-check__line"></span>
            </label>
        </div>
        
        <div className="nav__links">
            <a className="nav__links__link" href="/#" target="_blank">Sale</a>
            <a className="nav__links__link" href="/#" target="_blank">Spring</a>
            <a className="nav__links__link" href="/#" target="_blank">New Arrivals</a>
            <a className="nav__links__link" href="/#" target="_blank">Kits</a>
            <a className="nav__links__link" href="/#" target="_blank">Features</a>
            <Cartwidget />
        </div>

    </div>

    )
}

export default NavBar
