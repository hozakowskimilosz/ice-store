import { FiCoffee } from "react-icons/fi";

export default function App() {
  return (
    <div className="h-screen flex flex-col gap-4">
      <div className="w-full bg-blue-500 h-[8rem] flex items-end text-5xl p-4 rounded-md font-semibold gap-3">
        <h1>Ice Store</h1>
        <FiCoffee />
      </div>

      <div className="border border-zinc-300 rounded-md w-48 p-4 h-[calc(100%-12rem)] flex flex-col gap-4">
        <h1 className="font-bold text-xl">Store Dashboard</h1>

        <ul className="flex flex-col gap-1">
          <li>Products</li>
          <li>Users</li>
          <li>Crazy games</li>
        </ul>
      </div>
    </div>
  );
}
