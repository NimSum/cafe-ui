import React, { Component } from 'react';
import './App.css';
import { fetchReservations } from './fetches';
import ReservationsContainer from './ReservationsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  async componentDidMount() {
    const reservations = await fetchReservations();
    this.setState({ reservations })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
      
        </div>
        <div className='resy-container'>
          < ReservationsContainer 
            reservations = { this.state.reservations } />
        </div>
      </div>
    )
  }
}

export default App;
