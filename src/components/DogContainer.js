import React from "react";

const DogContainer = ({ selectedDog, toggler }) => {
  const { id, name, isGoodDog, image } = selectedDog;

  return (
    <div>
      <div id="dog-summary-container">
        <div id="dog-info">
          <img src={image} alt={name}></img>
          <h2>{name}</h2>
          <div className="button-container">
            {selectedDog.isGoodDog ? (
              <button onClick={() => toggler(id)}>Good Dog!</button>
            ) : (
              <button onClick={() => toggler(id)}>Bad Dog!</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogContainer;
