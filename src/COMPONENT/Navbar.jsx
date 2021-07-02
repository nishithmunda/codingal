import React, { useState } from 'react'
import './Navbar.css'
import Modal from './Modal'
import MenuIcon from './ICON/MenuIcon'
import MobileMenu from './MobileMenu'
import Timer from './Timer'
import { useDispatch} from 'react-redux'
import {setTime} from './timerSlice'
import {Link} from 'react-router-dom'

function Navbar(){
    const dispatch=useDispatch();

    const [showModal,setShowModal]=useState(false)
    const openModal__end=()=>{
      setShowModal(prev=>!prev)
      dispatch(
        setTime({time:10})
      )
    }

    const openModal=()=>{
      setShowModal(prev=>!prev)
    }
    const openModalCancel=()=>{
      setShowModal(prev=>!prev)
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return(
      <nav className='navbar'>
          <img className='logo__mobile' src='https://cdn.codingal.com/images/logos/logos-main/logo-with-text.svg' alt='codingal'></img>
          <img className='logo' src='https://media-exp3.licdn.com/dms/image/C560BAQFlR7ET1VWQtw/company-logo_200_200/0/1614841176944?e=2159024400&v=beta&t=Uj9_9B-R771_5HgdWtwXpoE9mA49jgCwuTHXhh35CFU'alt='codingal'/>
          <Link to='/passenger' className='link'>Passenger</Link>
          <Link to='/'className='link'>Home</Link>
          <div className='button__timer'>
            {showModal?(<><Timer/><h4 style={{margin:'0 5px'}}> Min Left </h4></>):null}
            <button onClick={openModal} className='endclass__button'>{showModal?'End class':'Start class'}</button>
          </div>

          <MenuIcon className='menu__icon' onClick={()=>handleClick()}/>
          <Modal showModal={showModal} openModal={ openModal} openModal__end={openModal__end} openModal__cancel={openModalCancel} />
          {click ?
          <MobileMenu showModal={showModal} openModal={openModal} handleClick={handleClick}/>
          :null}
      </nav>
    )
}

export default Navbar