import React, { Fragment } from 'react'
import './styles/header.css'
import Switch from './Switch'

const Header = () => {
    return (
        <Fragment>
        <header className="header">
            <div className="wrapper-header">
                <h1>Social Media Dashboard</h1>
                <p className="header-total">Total Followers: 905</p>
            </div>
            <Switch />
        </header>
        </Fragment>
    )
}

export default Header
