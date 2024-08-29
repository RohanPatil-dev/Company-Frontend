import React from "react";
import Sidebar from "./Reusable Components/Sidebar";
import CreateProject from "./Create Project/CreateProject";
import HomePage from "./Dashboard/HomePage"
import DataTable from "./DataTable/DataTable";


export default function Dashboard() {

    return (
        <div className="dashboard">
            <div className="sidebar">
                  <Sidebar/>
            </div>

            <div>
                {/* <HomePage /> */}

                {/* <CreateProject /> */}

                <DataTable />
            </div>
        </div>
    );
}
