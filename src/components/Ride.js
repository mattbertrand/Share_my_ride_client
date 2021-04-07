import React, { Component } from 'react'

class Ride extends Component {
    render() {
        const { departure, destination, date } = this.props
        return (
            <div>
                <h3>{ departure } - {destination}</h3>
                <p>{ date }</p>
            </div>
        )
    }
}

export default Ride
