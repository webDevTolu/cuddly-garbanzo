import { useEffect, useState } from "react";
import { Trip, allTrips } from "../data";
import TripList from "./TripList";
import { sortTrips } from "../utils/sortTrip";

const AllTrips = () => {
  const [formattedTrips, setFormattedTrips] = useState<Trip[]>(allTrips);
  const [sortType, setSortType] = useState<boolean>(true);

  const handleSort = () => {
    setSortType((prev) => !prev);
    // sorting function
    const sortedTrips = sortTrips({
      trips: formattedTrips,
      order: sortType ? "asc" : "desc",
    });
    setFormattedTrips(sortedTrips);
  };

  useEffect(() => {
    // automatically sort trips in the ascending order on first load
    const sortedTrips = sortTrips({
      trips: formattedTrips,
      order: "asc",
    });
    setFormattedTrips(sortedTrips);
  }, [formattedTrips]);

  return (
    <div>
      <div>
        <button type="button" onClick={handleSort}>
          {sortType ? "Asc" : "Desc"}
        </button>
      </div>
      <TripList trips={formattedTrips} />
    </div>
  );
};

export default AllTrips;
