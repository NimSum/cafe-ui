import React, { Component } from 'react';
import './App.css';
import { fetchReservations, postNewReservation, removeReservation } from './fetches';
import ReservationsContainer from './ReservationsContainer';
import ReservationForm from './ReservationForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      error: ''
    }
  }

  async componentDidMount() {
    try{
      const reservations = await fetchReservations();
      this.setState({ reservations })
    } catch(error) {
      this.setState({ error: error.message })
    }
  }

  postNewReservation = async (reservation) => {
    try {
      const result = await postNewReservation(reservation);
      const updatedReservations = [ ...this.state.reservations, result ]
      await this.setState({ reservations: updatedReservations });
    } catch(error) {
      this.setState({ error: error.message })
    }
  }

  cancelReservation = async (reservationId) => {
    try {
      const result = await removeReservation(reservationId);
      await this.setState({ reservations: result });
    } catch(error) {
      this.setState({ error: error.message })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          < ReservationForm 
            postNewReservation={ this.postNewReservation }/>
        </div>
        <div className='resy-container'>
          < ReservationsContainer 
            reservations={ this.state.reservations }
            cancelReservation={ this.cancelReservation } />
        </div>
      </div>
    )
  }
}

export default App;
