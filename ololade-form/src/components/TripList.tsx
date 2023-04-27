import { FC } from "react";
import { Trips } from "../data";
import SingleTrip from "./SingleTrip";

const TripList: FC<Trips> = ({ trips }) => {
  return (
    <ul className="flex flex-col divide-y">
      {trips.map((trip) => (
        <SingleTrip
          key={trip.id}
          id={trip.id}
          departure_date={trip.departure_date}
          fare={trip.fare}
          status={trip.status}
          validated={trip.validated}
        />
      ))}
    </ul>
  );
};

export default TripList;
