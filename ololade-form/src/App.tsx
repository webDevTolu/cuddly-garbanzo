import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

interface PassengerType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  nokName: string;
  nokNumber: string;
}

function App() {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneNumberRef = useRef<HTMLInputElement>(null);
  const nokNameRef = useRef<HTMLInputElement>(null);
  const nokNumberRef = useRef<HTMLInputElement>(null);

  const [passenger, setPassenger] = useState<PassengerType>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    nokName: "",
    nokNumber: "",
  });
  const [passengers, setPassengers] = useState<PassengerType[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPassenger((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log({ passenger });
    const newPassenger: PassengerType = {
      firstName: passenger.firstName,
      lastName: passenger.lastName,
      email: passenger.email,
      phoneNumber: passenger.phoneNumber,
      nokName: passenger.nokName,
      nokNumber: passenger.nokNumber,
    };
    setPassengers(passengers.concat(newPassenger));
  };
  useEffect(() => {
    console.log({ passengers });
  }, [passengers]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h2>Personal Info</h2>
        <div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              ref={firstNameRef}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              ref={lastNameRef}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              ref={phoneNumberRef}
              onChange={handleChange}
            />
          </div>
        </div>

        <h2>Next of Kin Info</h2>
        <div>
          <div>
            <label htmlFor="nokName">Name of Next of Kin</label>
            <input
              type="name"
              id="nokName"
              name="nokName"
              ref={nokNameRef}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="nokNumber">Number of Next of Kin</label>
            <input
              type="number"
              id="nokNumber"
              name="nokNumber"
              ref={nokNumberRef}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {passengers.map((passenger) => (
        <p key={passenger.email}>{passenger.firstName}</p>
      ))}
    </div>
  );
}

export default App;
