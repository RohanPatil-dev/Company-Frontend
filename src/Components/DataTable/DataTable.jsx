import React from "react"
import D_Table from "./D_Table"
import Homepage_header from "../Reusable Components/Homepage_header"

export default function DataTable() {

  return (
    <div className="d-Table">
      <Homepage_header title={"Project Listing"}/>
      <D_Table />
    </div>
  )
}