import axios from "axios";
import React, { useEffect, useState } from "react";

function Carte() {
  const [donnees, setDonnees] = useState([]); // Stocker les données des pays

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all") // Appel API
      .then((reponse) => setDonnees(reponse.data)) // Stocker les données
      .catch((erreur) => console.log(erreur));
  }, []); // Dépendance vide pour exécuter une seule fois

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {donnees.map((pays, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-md">
          <h3 className="text-xl font-bold">{pays.name.common}</h3>
          <img
            src={pays.flags.svg}
            alt={`Drapeau de ${pays.name.common}`}
            className="w-full h-32 object-cover my-2"
          />
          <p>Capitale : {pays.capital ? pays.capital[0] : "N/A"}</p>
          <p>Population : {pays.population.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Carte;
