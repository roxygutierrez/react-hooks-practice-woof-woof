import React from "react";

const Filter = ({ handleDogStatus, filter }) => {
  return (
    <div>
      <div id="filter-div">
        <button id="good-dog-filter" onClick={handleDogStatus}>
          Filter good dogs: {filter ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
};

export default Filter;
