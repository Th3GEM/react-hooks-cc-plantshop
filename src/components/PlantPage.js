import React, { useEffect, useMemo, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchName, setSearchName] = useState("");

  const filteredPlants = useMemo(() => {
    if (searchName) {
      return plants.filter((plant) =>
        plant.name?.toLowerCase().includes(searchName?.toLowerCase())
      );
    }

    return plants;
  }, [searchName, plants]);

  function addPlant(newPlant) {
    setPlants([newPlant, ...plants]);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:6001/plants");
      const plantList = await response.json();
      
      setPlants(plantList);
    }


    fetchData();
  }, []);

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search onSearch={setSearchName} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
