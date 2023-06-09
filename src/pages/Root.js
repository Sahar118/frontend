import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import classes from '../styles/Root.moudle.css'
const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout