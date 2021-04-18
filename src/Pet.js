import React from "react";

export default function Pet(props) {
  const { name, animal, age } = props;
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, age),
  ]);
}
