import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="flex h-[8rem] items-end justify-between gap-3 rounded-md bg-blue-500 p-4 text-5xl font-semibold">
      <Link to="/" className="flex items-end gap-3">
        <h1 className="font-robotoCondensed font-bold tracking-tight">
          Ice Store
        </h1>
        <FiCoffee />
      </Link>

      <div>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </Button>
      </div>
    </div>
  );
}
