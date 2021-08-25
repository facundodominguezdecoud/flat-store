import React from 'react'
import './ItemListContainer.css';


function ItemListContainer(props) {
    const {titulo} = props;

    return (
        <div className="body_container">
            <h1 className="body_container__titulo">{titulo}</h1>
        </div>

    )
}

export default ItemListContainer
