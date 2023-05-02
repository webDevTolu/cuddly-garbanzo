import { FC } from "react";
import { Trip } from "../data";

const SingleTrip: FC<Trip> = ({
  id,
  departure_date,
  fare,
  status,
  validated,
}) => {
  return (
    <li className="flex gap-4 items-center p-4 flex-col">
      <span>{id}</span> - <span>{departure_date}</span>
      <p>
        {fare} - {status} - {validated}
      </p>
    </li>
  );
};

export default SingleTrip;
