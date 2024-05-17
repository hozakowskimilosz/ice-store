import { Outlet } from "react-router";
import Header from "./Header";
import SideNav from "./SideNav";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col gap-4 font-roboto">
      <Header />

      <div className="flex">
        <SideNav />

        <div className="grow">
          <main className="flex justify-center">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
