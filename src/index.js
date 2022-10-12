// import animals, { useAnimals } from "./data";

// console.log(animals);

// const [cat, dog] = animals;

// const [animal, makeSound] = useAnimals(cat);

// console.log(makeSound);

// makeSound();

// var cat = animals[0]; - Does the same thing

// const { name, sound } = cat;
// cat.name; cat.sound

// const { name: catName, sound: catSound } = cat;
// way to change attributes names

// const { name = "Fluffy", sound = "Purr" } = cat;
// if attributes is undefined, we can give them defaults

// const {name, sound, feedingRequirements: {food, water}} = cat

// console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";

import cars from "./practice";

const [honda, tesla] = cars;

const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

// const [hondaTopColour] = hondaC;
// const [teslaTopColour] = teslaC;

console.log(teslaTopSpeed);
console.log(hondaTopSpeed);
console.log(honda.model);
console.log(hondaTopColour);
console.log(teslaTopColour);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
