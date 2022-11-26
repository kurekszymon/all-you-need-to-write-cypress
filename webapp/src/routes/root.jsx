import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function root() {
  return (
    <div className="app">
      <Sidebar />
      <Outlet />
    </div>
  );
}
