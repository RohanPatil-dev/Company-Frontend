import React from "react"
import Signin from "./Signin"
import Dashboard from "./Dashboard"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import HomePage from "./Dashboard/HomePage"
import CreateProject from "./Create Project/CreateProject"
import DataTable from "./DataTable/DataTable"

export default function Main() {
  return(
    <>
       <BrowserRouter>
           <Routes>
                <Route path="/" element={<Signin/>} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/dashboard" element={<HomePage />} />
                    <Route path="/dashboard/createProject" element={<CreateProject />} /> 
                    <Route path="/dashboard/projectData" element={<DataTable />} /> 
                </Route>
           </Routes>
       </BrowserRouter>
    </>
  )
}