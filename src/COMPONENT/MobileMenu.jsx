import React from 'react'
import CloseIcon from './ICON/CloseIcon'
import './MobileMenu.css'
import {Link} from 'react-router-dom'

function MobileMenu({openModal,handleClick}){
    return(
        <ul className="nav__items">
        <li className="item">
          <CloseIcon className="close__icon" onClick={handleClick} />
        </li>
        <li className="item" onClick={openModal} >End class</li>
        <li className="item"><Link to='/passenger' className='link__mobile' onClick={handleClick}>Passenger</Link></li>
        <li className="item"><Link to='/'className='link'>Home</Link></li>
      </ul>
    )
}

export default MobileMenu