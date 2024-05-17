import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <div className="flex min-h-[80dvh] w-48 flex-col gap-4 rounded-md border border-zinc-300 p-4">
      <h1 className="text-xl font-bold">Store Dashboard</h1>

      <ul className="flex flex-col gap-1">
        <Link to="/products">Products</Link>
        <Link to="/login">Login</Link>
        <li>Crazy games</li>
      </ul>
    </div>
  );
}
