import React from 'react';

export const ReservationCard = ({ reservation, cancelReservation }) => {
  
  return (
  <article>
    <h2>{reservation.name}</h2>
    <p>{reservation.date}</p>
    <p>{reservation.time}</p>
    <p>{reservation.number}</p>
    <button onClick={ () => cancelReservation(reservation.id) }>Cancel</button>
  </article>
  )
}