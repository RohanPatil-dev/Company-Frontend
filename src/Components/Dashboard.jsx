import React from "react";
import Sidebar from "./Reusable Components/Sidebar";
import { Outlet } from "react-router-dom";


export default function Dashboard() {

    return (
        <div className="dashboard">
            <div className="sidebar">
                  <Sidebar/>
            </div>

            <div>
                <Outlet/>
            </div>
        </div>
    );
}
