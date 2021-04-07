import React, { Component } from 'react'

class Form extends Component {
    state = {
        departure: '',
        destination: '',
        date: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h3>Add a Ride</h3>
                <form onSubmit={ this.handleSubmit }>
                    <div>
                        <label htmlFor="departure">Departure</label>
                        <input type="text" id="departure" name="departure" value= { this.state.departure } onChange={ this.handleChange }/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="destination">Destination</label>
                        <input type="text" id="destination" name="destination" value= { this.state.destination } onChange={ this.handleChange }/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" value= { this.state.date } onChange={ this.handleChange }/>
                    </div>
                    <br />
                    <input type="submit" value="Add Ride"/>
                </form>
            </div>
        )
    }
}

export default Form
