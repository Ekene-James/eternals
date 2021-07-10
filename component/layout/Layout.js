import { AppBar, Typography } from '@material-ui/core'
import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navBar/Navbar'

function Layout(props) {
    return (
        <>
            <Navbar/>
            <div style={{marginTop:'20px'}}>
                {props.children}

            </div>
            <Footer/>
            
        </>
    )
}

export default Layout
