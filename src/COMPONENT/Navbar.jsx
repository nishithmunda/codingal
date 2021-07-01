import React, { useState } from 'react'
import './Navbar.css'
import Modal from './Modal'
import MenuIcon from './MenuIcon'
import MobileMenu from './MobileMenu'

function Navbar(){
    const [showModal,setShowModal]=useState(false)
    const openModal=()=>{
      setShowModal(prev=>!prev)
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    console.log(click)
    return(
      <nav className='navbar'>
          <img className='logo__mobile' src='https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg' alt='codingal'/>
          <img className='logo' src='https://media-exp3.licdn.com/dms/image/C560BAQFlR7ET1VWQtw/company-logo_200_200/0/1614841176944?e=2159024400&v=beta&t=Uj9_9B-R771_5HgdWtwXpoE9mA49jgCwuTHXhh35CFU'alt='codingal'/>
          <button onClick={openModal} className='endclass__button'>End class</button>
          <MenuIcon className='menu__icon' onClick={()=>handleClick()}/>
          <Modal showModal={showModal} openModal={ openModal}/>
          {click ?
          <MobileMenu showModal={showModal} openModal={ openModal} handleClick={handleClick}/>
          :null}
      </nav>
    )
}

export default Navbar