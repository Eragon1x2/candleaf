import React from 'react'
import './Modal.css'

function Modal({modal, children}) {
    return (
      <>{modal && <div className='modal'>{children}</div>}</>
    )
}

export default Modal
