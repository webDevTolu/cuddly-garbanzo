export const allTrips: Trip[] = [
  {
    id: "0602024b07674f77a8626de215cd1971",
    departure_date: "2023-12-03T06:00:00.000000Z",
    fare: "800.00",
    status: null,
    validated: "No",
  },
  {
    id: "06644ae214d042c698172a4cd432fc37",
    departure_date: "2023-02-24T08:30:00.000000Z",
    fare: "7800.00",
    status: "1",
    validated: "No",
  },
  {
    id: "0e7935adf8d741459f50216f71dc99c4",
    departure_date: "2023-04-23T05:30:00.000000Z",
    fare: "100.00",
    status: "1",
    validated: "No",
  },
  {
    id: "0f947a27078f491e8d2794273d7abde5",
    departure_date: "2023-03-09T05:30:00.000000Z",
    fare: "100.00",
    status: "1",
    validated: "No",
  },
  {
    id: "120a920f06fb454ab345193ae169dd33",
    departure_date: "2023-03-07T05:30:00.000000Z",
    fare: "100.00",
    status: "1",
    validated: "No",
  },
  {
    id: "13cfca7219374d0e844fb9d16dfa7798",
    departure_date: "2023-03-06T05:30:00.000000Z",
    fare: "100.00",
    status: "1",
    validated: "No",
  },
  {
    id: "16d64fee26be4055bcad9eac76189d6c",
    departure_date: "2023-10-15T07:30:00.000000Z",
    fare: "100.00",
    status: "1",
    validated: "No",
  },
  {
    id: "1a03d167434b4a47870babd6535a6481",
    departure_date: "2023-07-08T05:30:00.000000Z",
    fare: "100.00",
    status: "1",
    validated: "No",
  },
  {
    id: "1aff5ef891c641be87d3fe26afa6359b",
    departure_date: "2023-04-06T11:30:00.000000Z",
    fare: "100.00",
    status: "1",
    validated: "No",
  },
  {
    id: "1c6ef2a870c04946904ca6009c6dafc5",
    departure_date: "2023-04-07T05:30:00.000000Z",
    fare: "100.00",
    status: "1",
    validated: "No",
  },
  {
    id: "1e7eaeee8c0b427cb6c6468a0c9f65d9",
    departure_date: "2023-04-08T11:30:00.000000Z",
    fare: "100.00",
    status: "1",
    validated: "No",
  },
];

export interface Trip {
  id: string;
  departure_date: string;
  fare: string;
  status: string | null;
  validated: string;
}

export interface Trips {
  trips: Trip[];
}

export interface sortTripsFunction {
  trips: Trip[];
  order: "asc" | "desc";
}
