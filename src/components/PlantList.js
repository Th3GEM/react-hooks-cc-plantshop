import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const plantLists = plants.map((plant, index) => (
    <PlantCard key={"plant-" + index} plant={plant} />
  ));

  return <ul className="cards">{plantLists}</ul>;
}

export default PlantList;
