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
    <li className="flex flex-col gap-4 items-center">
      <span>{id}</span> - <span>{departure_date}</span>
    </li>
  );
};

export default SingleTrip;
