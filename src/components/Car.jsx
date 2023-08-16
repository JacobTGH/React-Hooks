import React, { useState } from "react";

const Car = () => {
  const [car, setCar] = useState({
    brand: "Audi",
    model: "A4",
    year: 2020,
    color: "Silver",
  });
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
    return (
      <div>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}
        </p>
        <button type="button" onClick={updateColor}>
          Blue
        </button>
      </div>
    );
  };
};

export default Car;
