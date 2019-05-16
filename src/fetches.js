export const fetchReservations  = async () => {
  const result = await fetch('http://localhost:3001/api/v1/reservations')
  if(!result.ok) {
    throw new Error('Failed to fetch reservations')
  }
  return result.json();
}