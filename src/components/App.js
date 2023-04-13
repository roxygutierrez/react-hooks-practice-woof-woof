import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogContainer from "./DogContainer";
import Filter from "./Filter";

function App() {
  //arr of dogs
  const [dogs, setDogs] = useState([]);

  //single dog obj
  const [selectedDog, setSelectedDog] = useState();
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then((dogsArr) => setDogs(dogsArr));
  }, []);

  const toggler = (dogId) => {
    const newDog = { ...selectedDog };
    newDog.isGoodDog = !newDog.isGoodDog;

    fetch(`http://localhost:3001/pups/${dogId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDog),
    })
      .then((r) => r.json())
      .then(() => {
        const newDogArr = dogs.map((dog) => {
          return dog.id === newDog.id ? newDog : dog;
        });
        setDogs(newDogArr);
        setSelectedDog(newDog);
      });
  };

  const handleDogsToDisplay = dogs.filter((dog) => {
    return filter ? dog.isGoodDog : true;
  });

  const handleDogStatus = () => {
    setFilter(!filter);
  };

  return (
    <div className="App">
      <Filter handleDogStatus={handleDogStatus} filter={filter} />
      <DogBar dogs={handleDogsToDisplay} setSelectedDog={setSelectedDog} />
      <h1>DOGGO:</h1>
      {selectedDog ? (
        <DogContainer selectedDog={selectedDog} toggler={toggler} />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
