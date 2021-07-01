import React from 'react'
import CloseIcon from './CloseIcon'
import './MobileMenu.css'

function MobileMenu({showModal, openModal,handleClick}){
    return(
        <ul className="nav__items">
        <li className="item">
          <CloseIcon className="close__icon" onClick={handleClick} />
        </li>
        <li className="item" onClick={openModal} >End class</li>
        <li className="item"></li>
      </ul>
    )
}

export default MobileMenu