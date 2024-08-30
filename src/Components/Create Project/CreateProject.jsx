import React from "react"
import Homepage_header from "../Reusable Components/Homepage_header"
import Project_Form from "./Project_Form"

export default function CreateProject() {
  return (
    <>
       <div className="createProject">
       <Homepage_header title={"Create Project"}/>
       <Project_Form />
       </div>
    </>
  )
}