import { Outlet } from "react-router";
import Header from "./Header";
import SideNav from "./SideNav";

export default function Layout() {
  return (
    <div className="flex h-screen flex-col gap-4">
      <Header />

      <div className="flex h-full">
        <SideNav />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
