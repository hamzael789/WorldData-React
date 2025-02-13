import axios from "axios";
import { useEffect, useState } from "react";

function Card({ filtre }) {
  const [donnees, setDonnees] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((reponse) => setDonnees(reponse.data))
      .catch((error) => console.log(error));
  }, []);

  // 🔍 Filtrer les pays en fonction de l'input (case insensitive)
  const paysFiltres = donnees.filter((pays) =>
    pays.name.common.toLowerCase().includes(filtre.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 text-white mx-22">
      {paysFiltres.map((pays, index) => (
        <div key={index} className="border rounded-lg p-5 shadow-lg hover:scale-104">
          <h3 className="text-2xl font-bold">{pays.name.common}</h3>
          <img src={pays.flags.svg} className="w-full h-55 object-cover my-5" />
          <p><span className="font-bold">Capitale</span> : {pays.capital ? pays.capital[0] : "N/A"}</p>
          <p><span className="font-bold">Population</span> : {pays.population.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;
