import React from 'react'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CartWidget.css';

export function Cartwidget(props) {
    

    return (
        <div className="cart">
          <FontAwesomeIcon icon={faShoppingCart} />  
        </div>
    )
}
