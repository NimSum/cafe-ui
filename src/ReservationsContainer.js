import React from 'react';
import { ReservationCard } from './ReservationCard';

export const ReservationsContainer = ({ reservations, cancelReservation }) => (
  <section className="reservations-container">
    { reservations.map(reserveration => (
      < ReservationCard 
        reservation={ reserveration }
        cancelReservation={ cancelReservation }  />
    ))}
  </section>
)

export default ReservationsContainer;