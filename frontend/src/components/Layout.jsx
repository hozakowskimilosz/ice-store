import { Outlet } from "react-router";
import Header from "./Header";
import SideNav from "./SideNav";

export default function Layout() {
  return (
    <div className="h-screen flex flex-col gap-4">
      <Header />

      <div className="h-full flex">
        <SideNav />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
