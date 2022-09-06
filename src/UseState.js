import React,{useState} from 'react';

//            UseState with Example


const UseState = () => {
  const [car, setCar] = useState({
    brand:"Ford",
    make: 1990,
    model: "ecosport",
  })

  function updateCar(){
    setCar(previousState => {
      return {...previousState, brand:"Hyundai", make: "2000"}
    });
  }
  return (
    <>
      <h1>Brand : {car.brand}</h1>
      <p>This {car.brand} is from {car.make} {car.model}</p>
      <button onClick={updateCar}>Click to change</button>
    </>
  );
}

export default UseState;