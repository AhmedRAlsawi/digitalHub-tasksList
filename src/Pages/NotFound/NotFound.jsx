import React from 'react'
import { useLocation } from 'react-router-dom'

function NotFound() {
    const { pathname } = useLocation()
    return (
        <h3>404 - {pathname} is NotFound</h3>
    )
}

export default NotFound