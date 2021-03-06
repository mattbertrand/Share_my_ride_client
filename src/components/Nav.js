import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/rides">Rides</Link></li>
                    <li><Link to="/rides/new">Add a Ride</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
