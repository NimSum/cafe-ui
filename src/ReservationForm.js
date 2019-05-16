import React, { Component } from 'react';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('hi')
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input 
          type='text'
          name='name'
          onChange={ this.handleChange } 
          placeholder='Name'/>
        <input 
          type='text'
          name='date'
          onChange={ this.handleChange } 
          placeholder='Date'/>
        <input 
          type='text'
          name='time'
          onChange={ this.handleChange } 
          placeholder='Time'/>
        <input 
          type='text'
          name='number'
          onChange={ this.handleChange } 
          placeholder='Number of Guests'/>
        <input 
          type='submit'
          value='Make Reservation' />
      </form>
    )
  }
}

export default ReservationForm;