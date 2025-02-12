import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input() {
  return (
    <>
    <div className="flex justify-center items-center h-[10em]">
      <input className="p-2 border-3 rounded-lg w-[30%] text-white" type="text" placeholder="Cherchez le pays de votre choix ..."/>
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
    </div>
    </>
  )
}

export default Input
