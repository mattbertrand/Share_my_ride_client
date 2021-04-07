import React, { Component } from 'react'
import { connect } from 'react-redux'
import Ride from './Ride'

class Index extends Component {
    render() {
        const rides = this.props.rides.map( (ride, i) => <Ride key={i} departure={ ride.departure } destination={ ride.destination } date={ ride.date } />)
        return (
            <div>
                { rides }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rides: state.rides
    }
}

export default connect(mapStateToProps)(Index)
