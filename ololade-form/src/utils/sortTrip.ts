import { Trip, sortTripsFunction } from "../data";

export const sortTrips = ({ trips, order }: sortTripsFunction): Trip[] => {
  const sortedTrips = trips.sort((a, b) => {
    const dateA = new Date(a.departure_date).getTime();
    const dateB = new Date(b.departure_date).getTime();

    if (order === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
  return sortedTrips;
};
