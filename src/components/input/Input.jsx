import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({ recherche, setRecherche }) {
  return (
    <div className="flex justify-center items-center h-[10em] gap-2">
      <input
        className="p-2 border-3 rounded-lg w-[30%] text-white shadow-xl"
        type="text"
        placeholder="Entrez le pays de votre choix..."
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </div>
  );
}

export default Input;
