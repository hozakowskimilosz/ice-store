import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-500 h-[8rem] flex items-end text-5xl p-4 rounded-md font-semibold gap-3">
      <Link to="/" className="flex items-end">
        <h1>Ice Store</h1>
        <FiCoffee />
      </Link>
    </div>
  );
}
