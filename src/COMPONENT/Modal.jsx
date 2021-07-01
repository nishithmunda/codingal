import React, { useState } from 'react'
import './Modal.css'

function Modal({showModal, openModal,openModal__cancel,openModal__end}){
   const[reasonState,setReasonState]=useState(false)
   const[testAreaState,setTestAreaState]=useState(false)
    return(
        <>
        {
        showModal?<div className='modal__container'>
               <form className='modal'>
                <h2>Select a reason to end class</h2>
                <div className='radio__buttons__list'>
                 <div className='radio__button'>  
                  <input type='radio' name='class' value='completed' id='completed' onClick={()=>setReasonState(false)}/>
                  <label for='completed'>Completed</label>
                 </div> 

                 <div className='radio__button'>  
                  <input type='radio' name='class' value='aborted' id='aborted' onClick={()=>setReasonState(true)}/>
                  <label for='aborted'>Class interrupted/Aborted</label>
                 </div> 
                     { reasonState ? <div className='reason__to__disconnect'>
                        <div className='radio__button'>
                        <input type='radio' name='abortreason' value='absent' id='absent' onClick={()=>setTestAreaState(false)} defaultChecked/>
                        <label for='absent'>Didnt show up for class</label>
                        </div> 

                        <div className='radio__button'> 
                        <input type='radio' name='abortreason' value='interest' id='interest' onClick={()=>setTestAreaState(false)}/>
                        <label for='interest'>Didnt show any interest</label>
                        </div> 

                        <div className='radio__button'>
                        <input type='radio' name='abortreason' value='sdisconnected' id='sdisconnected' onClick={()=>setTestAreaState(false)}/>
                        <label for='sdisconnected'>Didnt show up for class</label>
                        </div> 

                        <div className='radio__button'>
                        <input type='radio' name='abortreason' value='idisconnected' id='idisconnected'onClick={()=>setTestAreaState(false)}/>
                        <label for='idisconnected'>I got disconnected</label>
                        </div> 

                        <div className='radio__button'>
                        <input type='radio' name='abortreason' value='other' id='other' onClick={()=>setTestAreaState(true)}/>
                        <label for='other'>Other reason</label>
                        </div>

                        {
                        testAreaState? <textarea id="textArea" name="textArea" className='textArea'>                
                        </textarea>:null
                        }

                     </div>:null}

                    <div className='modal__buttons'>
                     <button className='modal__button__endclass' onClick={openModal__end}>
                         End Class
                     </button>
                     <button className='modal__button__cancel' onClick={openModal__cancel}>
                         Cancel
                     </button>
                    </div>
              </div>
            </form>
        </div>
        :null
      }
    </>    
    )
}

export default Modal