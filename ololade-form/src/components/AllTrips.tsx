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
        <div className="flex items-center gap-4">
          <h3>Filter by:</h3>
          <div className="flex gap-2">
            <button type="button">All</button>
            <button type="button">Past</button>
            <button type="button">Present</button>
            <button type="button">Future</button>
          </div>
        </div>
      </div>
      <TripList trips={formattedTrips} />
    </div>
  );
};

export default AllTrips;
