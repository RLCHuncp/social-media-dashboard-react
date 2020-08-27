import React, { Fragment } from 'react'
import './styles/header.css'

const Switch = () => {
    
    const handleChange = (event) =>{
        const btn = document.getElementById('switch')
        document.body.classList.toggle('dark')
        btn.classList.toggle('active')
    }
    return (
        <Fragment>
            <div className="btn-switch">
                <button className="switch" id= "switch" onClick={ handleChange }>
                    <span><i className="fas fa-sun"></i></span>
                    <span><i className="fas fa-moon"></i></span>
                </button>
            </div>
        </Fragment>
    )
}

export default Switch
