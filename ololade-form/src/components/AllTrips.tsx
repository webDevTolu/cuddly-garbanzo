import { ChangeEvent, useEffect, useState } from "react";
import { Trip, allTrips } from "../data";
import TripList from "./TripList";
import { sortTrips } from "../utils/sortTrip";
import { filterTrips, onChangeFilter } from "../utils/filterTrips";

const AllTrips = () => {
  const [formattedTrips, setFormattedTrips] = useState<Trip[]>(allTrips);
  const [sortType, setSortType] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>("");

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputtedValue = event.target.value;
    setInputValue(inputtedValue);
    const filteredTrips = onChangeFilter(allTrips, inputValue);
    setFormattedTrips(filteredTrips);
  };

  useEffect(() => {
    // automatically sort trips in the ascending order on first load
    const sortedTrips = sortTrips({
      trips: formattedTrips,
      order: "asc",
    });
    setFormattedTrips(sortedTrips);
    // set
  }, [formattedTrips]);

  return (
    <div>
      <div>
        <button type="button" onClick={handleSort}>
          {sortType ? "Asc" : "Desc"}
        </button>
        {/* filter by dates */}
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
        <div>
          <label htmlFor="inputFilter">Filter:</label>
          <input
            type="text"
            name="inputFilter"
            id="inputFilter"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
      </div>
      <TripList trips={formattedTrips} />
      {formattedTrips.length === 0 && <p>No data here</p>}
    </div>
  );
};

export default AllTrips;
