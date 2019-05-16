import React from 'react';
import { ReservationCard } from './ReservationCard';

export const ReservationsContainer = ({ reservations }) => (
  <section className="reservations-container">
    { reservations.map(reserveration => (
      < ReservationCard reservation={ reserveration } />
    ))}
  </section>
)

export default ReservationsContainer;