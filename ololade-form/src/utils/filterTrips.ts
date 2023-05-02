import { Trip } from "../data";

export const filterTrips = (trips: Trip[], filterValue: string): Trip[] => {
  const currentDate = new Date();

  const filteredTrips = trips.filter((trip: Trip) => {
    const tripDate = new Date(trip.departure_date);

    if (filterValue === "past") {
      return tripDate < currentDate;
    } else if (filterValue === "future") {
      return tripDate > currentDate;
    } else if (filterValue === "present") {
      return (
        tripDate.getDate() === currentDate.getDate() &&
        tripDate.getMonth() === currentDate.getMonth() &&
        tripDate.getFullYear() === currentDate.getFullYear()
      );
    } else {
      return true;
    }
  });

  return filteredTrips;
};

export const onChangeFilter = (trips: Trip[], filterValue: string): Trip[] => {
  const filteredTrips: Trip[] = trips.filter((trip: Trip) =>
    trip.id.includes(filterValue)
  );
  return filteredTrips;
};
