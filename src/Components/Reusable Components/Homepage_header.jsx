import React from "react"

export default function Homepage_header(props) {
  return (
    <>
      <div className="homepage-header">
        <div className="homepage-titles">
          <div><p>{props.title}</p></div>
          <div className="homepage-logo"></div>
        </div>
      </div>
    </>
  )
}