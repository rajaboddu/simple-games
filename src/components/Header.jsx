import React from 'react'
import { Link } from 'react-router-dom'
import { Tab } from "@material-ui/core"
import '../sass/header.scss'


const Header = () => {
    return (
        <nav>
            <ul>
                <Link to={'/'}><Tab className='tab' label='FLAMES'/></Link>
                <Link to={'/tictactoe'}><Tab className='tab' label='TTT'/></Link>
                <Link to={'/rockpapsis'}><Tab className='tab' label='RPS'/></Link>
            </ul>
        </nav>
    )
}

export default Header
