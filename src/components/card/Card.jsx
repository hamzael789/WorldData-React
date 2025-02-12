import axios from "axios";
import { useEffect, useState } from "react";

function Carte() {
  const [donnees, setDonnees] = useState([]); // Stocker les données des pays

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
    .then((reponse)=>setDonnees(reponse.data))
    .catch((error) =>console.log(error))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 text-white">
      {donnees.map((pays, index) => (
        <div key={index} className="border rounded-lg p-5 shadow-lg hover:scale-104">
          <h3 className="text-2xl font-bold">{pays.name.common}</h3>

          <img src={pays.flags.svg} className="w-full h-32 object-cover my-6"/>

          <p><span className="font-bold">Capitale</span> : {pays.capital ? pays.capital[0] : "N/A"}</p>
          <p><span className="font-bold">Population</span> : {pays.population.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Carte;


