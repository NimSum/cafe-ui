export const fetchReservations  = async () => {
  const reservationUrl = 'http://localhost:3001/api/v1/reservations';
  const result = await fetch(reservationUrl)
  if(!result.ok) {
    throw new Error('Failed to fetch reservations')
  }
  return result.json();
}

export const postNewReservation = async (body) => {
  const newReservationUrl = 'http://localhost:3001/api/v1/reservations'
  const result = await fetch(newReservationUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if(!result.ok) {
    throw new Error('Failed to post new reservation')
  }
  return result.json();
}

export const cancelReservation = async (id) => {
  const cancellationUrl = `http://localhost:3001/api/v1/reservations/${ id }`;
  const result = await fetch(cancellationUrl, {
    method: 'DELETE'
  })
  if(!result.ok) {
    throw new Error('Failed to delete reservation');
  }
  return result.json();
}