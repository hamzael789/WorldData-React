import { useState } from "react";
import Input from "./components/input/Input";
import Card from "./components/card/Card";

function App() {
  const [recherche, setRecherche] = useState(""); // État pour la recherche

  return (
    <>
      <h1 className="text-white text-center mt-12 font-bold text-3xl cursor-pointer hover:scale-105">
        WorlData - حمزة
      </h1>

      {/* Passage de la recherche et de la fonction de mise à jour à Input */}
      <Input recherche={recherche} setRecherche={setRecherche} />

      <div className="absolute">
        {/* Passage de la recherche à Card pour filtrer les résultats */}
        <Card filtre={recherche} />
      </div>
    </>
  );
}

export default App;
