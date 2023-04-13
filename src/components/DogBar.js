import React from "react";

const DogBar = ({ dogs, setSelectedDog }) => {
  const renderDog = dogs.map((dog) => {
    return <span onClick={() => setSelectedDog(dog)}>{dog.name}</span>;
  });

  return (
    <div>
      <div id="dog-bar">{renderDog}</div>
    </div>
  );
};
export default DogBar;
