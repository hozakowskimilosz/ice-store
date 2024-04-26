import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="border border-zinc-300 rounded-md w-48 p-4 flex flex-col gap-4">
      <h1 className="font-bold text-xl">Store Dashboard</h1>

      <ul className="flex flex-col gap-1">
        <Link to="/products">Products</Link>
        <li>Users</li>
        <li>Crazy games</li>
      </ul>
    </div>
  );
}
