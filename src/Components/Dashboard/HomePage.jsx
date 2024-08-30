import React from "react"
import Homepage_header from "../Reusable Components/Homepage_header"
import Dashboard_card from "./Dashboard_card"
import Graph from "./Graph"

export default function HomePage() {
  return (
    <>
    <div className="homepage">
        <Homepage_header title={"Dashboard"}/>
        <Dashboard_card />
        <Graph />
    </div>
    </>
  )
}