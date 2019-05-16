import React from 'react';

export const ReservationCard = ({ reservation }) => {
  
  const cancelReservation = () => {
    console.log(reservation.id)
  }
  
  return (
  <article>
    <h2>{reservation.name}</h2>
    <p>{reservation.date}</p>
    <p>{reservation.time}</p>
    <p>{reservation.number}</p>
    <button onClick={ cancelReservation }>Cancel</button>
  </article>
  )
}