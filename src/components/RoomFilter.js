import React from "react";
import { RoomContext } from "../Context";
import { useContext } from "react";
import Title from "../components/Title";

//get all unique values
const getUnique = (items, value) => {
  // set only accepts unique values
  return [
    ...new Set(
      items.map((item) => {
        return item[value];
      })
    ),
  ];
};
export default function RoomFilter({ rooms }) {
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
  let people = getUnique(rooms, "capacity");
  people = ["1", ...people];
  people = people.map((item, index) => {
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
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="capacity">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <input
            type="number"
            name="minSize"
            id="size"
            value={minSize}
            onChange={handleChange}
            className="size-input"
          />
          <input
            type="number"
            name="maxSiz e"
            id="size"
            value={maxSize}
            onChange={handleChange}
            className="size-input"
          />
        </div>
        <div className="form-group">
          <div className="single-extra">
            <input
              checked={breakfast}
              onChange={handleChange}
              type="checkbox"
              name="breakfast"
              id="breakfast"
            />
            <label htmlFor="breakfast"> breakfast</label>
          </div>
          <div className="single-extra">
            <input
              checked={pets}
              onChange={handleChange}
              type="checkbox"
              name="pets"
              id="pets"
            />
            <label htmlFor="pets">pets </label>
          </div>
        </div>
      </form>
    </section>
  );
}
