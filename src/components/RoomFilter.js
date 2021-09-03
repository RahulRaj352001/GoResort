import React from "react";
import { RoomContext } from "../Context";
import { useContext } from "react";
import Title from "../components/Title";

//get all unique values
const getUnique = (items, value) => {
    // set only accepts unique values
    return [...new Set(items.map((item) => { return item[value]}))]
}
export default function RoomFilter({rooms}) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="Search rooms"></Title>
      <form action="" className="filter-form">
        <div className="form-group">
          <label htmlFor="type">Room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}>
            {types}
          </select>
        </div>
      </form>
    </section>
  );
}
