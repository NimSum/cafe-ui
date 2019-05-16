import React, { Component } from 'react';
import './App.css';
import { fetchReservations, postNewReservation } from './fetches';
import ReservationsContainer from './ReservationsContainer';
import ReservationForm from './ReservationForm';

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

  postNewReservation = async (reservation) => {
    const result = await postNewReservation(reservation);
    await console.log(result);
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
            reservations = { this.state.reservations } />
        </div>
      </div>
    )
  }
}

export default App;
