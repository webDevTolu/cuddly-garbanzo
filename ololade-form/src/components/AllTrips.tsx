import { useEffect, useState } from "react";
import { Trip, allTrips } from "../data";
import TripList from "./TripList";
import { sortTrips } from "../utils/sortTrip";
import { filterTrips } from "../utils/filterTrips";

const AllTrips = () => {
  const [formattedTrips, setFormattedTrips] = useState<Trip[]>(allTrips);
  const [sortType, setSortType] = useState<boolean>(true);

  const handleSort = (): void => {
    setSortType((prev) => !prev);
    // sorting function
    const sortedTrips = sortTrips({
      trips: formattedTrips,
      order: sortType ? "asc" : "desc",
    });
    setFormattedTrips(sortedTrips);
  };

  const handleFilter = (filterValue: string) => {
    const filteredTrips = filterTrips(allTrips, filterValue);
    setFormattedTrips(filteredTrips);
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
            <button
              type="button"
              onClick={() => {
                handleFilter("all");
              }}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => {
                handleFilter("past");
              }}
            >
              Past
            </button>
            <button
              type="button"
              onClick={() => {
                handleFilter("present");
              }}
            >
              Present
            </button>
            <button
              type="button"
              onClick={() => {
                handleFilter("future");
              }}
            >
              Future
            </button>
          </div>
        </div>
      </div>
      <TripList trips={formattedTrips} />
    </div>
  );
};

export default AllTrips;
