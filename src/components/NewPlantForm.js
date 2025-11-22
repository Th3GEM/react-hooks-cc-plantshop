import React from "react";

async function addPlant(newPlant) {
  const response = await fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON",
    },
    body: JSON.stringify(newPlant),
  });
  return await response.json();
}

function NewPlantForm({ onAddPlant }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const newPlant = {
      name: formData.get("name").valueOf(),
      image: formData.get("image").valueOf(),
      price: formData.get("price").valueOf(),
    };

    const plant = await addPlant(newPlant);
    onAddPlant(plant);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
