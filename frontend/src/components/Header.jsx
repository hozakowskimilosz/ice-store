import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex h-[8rem] items-end gap-3 rounded-md bg-blue-500 p-4 text-5xl font-semibold">
      <Link to="/" className="flex items-end gap-3">
        <h1 className="font-robotoCondensed font-bold tracking-tight">
          Ice Store
        </h1>
        <FiCoffee />
      </Link>
    </div>
  );
}
