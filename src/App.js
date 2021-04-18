import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hey Welcome to Simple React App!"),
    React.createElement(Pet, { name: "Angel", animal: "dog", age: "10 yrs" }),
    React.createElement(Pet, { name: "Pepper", animal: "bird", age: "1 yrs" }),
    React.createElement(Pet, { name: "Chimp", color: "monkey", age: "5 yrs" }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
