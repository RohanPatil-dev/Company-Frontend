import axios from "axios"
import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Project_Form() {

    const navigate = useNavigate()

    const [projectTheme, setProjectTheme] = useState("")
    const [reason, setReason] = useState("Business")
    const [types, setTypes] = useState("Internal")
    const [division, setDivision] = useState("Filters")
    const [category, setCategory] = useState("Quality A")
    const [priority, setPriority] = useState("High")
    const [department, setDepartment] = useState("Strategy")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [location, setLocation] = useState("Pune")

    const token = localStorage.getItem("uid")

    const data = { projectTheme: projectTheme, Reason: reason, Type: types, Division: division, Category: category, Priority: priority, Department: department, start_Date: startDate, End_Date: endDate, Location: location }


    // errors handle
    const [projectThemeError, setProjectThemeError] = useState("")
    const [startDateErr, setStartDateErr] = useState("")
    const [endDateErr, setEndDateErr] = useState("")


    // refs
    const theme = useRef()
    const start_Date = useRef()
    const End_Date = useRef()

    async function formSubmit(event) {
        event.preventDefault()

        try {
            await axios.post("http://localhost:8081/project/createProject", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(() => {
                return navigate("/dashboard/createProject")
            })
        } catch (error) {
            if (error.response && error.response.data && error.response.date === "Project Theme required !" && "Start_Date required !" && "End_Date required !") {
                setProjectThemeError(error.response.data.err);
                theme.current.style.border = "2px solid red"
                theme.current.style.outline = "1px solid red"

                start_Date.current.style.border = "2px solid red"
                start_Date.current.style.outline = "1px solid red"

                End_Date.current.style.border = "2px solid red"
                End_Date.current.style.outline = "1px solid red"
            }
            else if (error.response && error.response.data && error.response.date === "Project Theme required !") {
                setProjectThemeError(error.response.data.err);
                theme.current.style.border = "2px solid red"
                theme.current.style.outline = "1px solid red"
            } else if (error.response && error.response.data && error.response.date === "Start_Date required !") {
                setStartDateErr(error.response.data.err);
                start_Date.current.style.border = "2px solid red"
                start_Date.current.style.outline = "1px solid red"
            }
            else if (error.response && error.response.data && error.response.date === "End_Date required !" || "End date is smaller than Start date !") {
                setEndDateErr(error.response.data.err);
                End_Date.current.style.border = "2px solid red"
                End_Date.current.style.outline = "1px solid red"
            } else {
                console.log();

            }
        }

    }

    return (
        <>
            <div className="project-form">
                <form onSubmit={formSubmit}>
                    <div className="project-theme">
                        <div className="form-group">
                            <textarea value={projectTheme} onChange={(event) => { return setProjectTheme(event.target.value) }} ref={theme} className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Project Theme"></textarea>
                            {projectThemeError ?
                                <div className="alert alert-danger" role="alert">
                                    {projectThemeError}
                                </div> : <></>}
                        </div>

                        <div className="project-submit">
                            <button type="submit">Save Project</button>
                        </div>
                    </div>

                    <div className="project-selection">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Reason</label>
                            <select className="form-control" id="exampleFormControlSelect1" value={reason} onChange={(event) => { return setReason(event.target.value) }} >
                                <option value="Business">For Business</option>
                                <option value="Personal">For Personal</option>
                                <option value="Dealership">For Dealership</option>
                                <option value="Transport">For Transport</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect2">Type</label>
                            <select className="form-control" id="exampleFormControlSelect2" value={types} onChange={(event) => { return setTypes(event.target.value) }} >
                                <option>Internal</option>
                                <option>External</option>
                                <option>Vendor</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect3">Division</label>
                            <select className="form-control" id="exampleFormControlSelect3" value={division} onChange={(event) => { return setDivision(event.target.value) }} >
                                <option>Filters</option>
                                <option>Compressor</option>
                                <option>Pumps</option>
                                <option>Glass</option>
                                <option>Water Heater</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect4">Category</label>
                            <select className="form-control" id="exampleFormControlSelect4" value={category} onChange={(event) => { return setCategory(event.target.value) }} >
                                <option>Quality A</option>
                                <option>Quality B</option>
                                <option>Quality C</option>
                                <option>Quality D</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect5">Priority</label>
                            <select className="form-control" id="exampleFormControlSelect5" value={priority} onChange={(event) => { return setPriority(event.target.value) }} >
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect6">Department</label>
                            <select className="form-control" id="exampleFormControlSelect6" value={department} onChange={(event) => { return setDepartment(event.target.value) }} >
                                <option>Strategy</option>
                                <option>Finance</option>
                                <option>Quality</option>
                                <option>Maintainance</option>
                                <option>Stores</option>
                                <option value="">HR</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect7">Start Date as per Project Plan</label>
                            <input type="date" value={startDate} onChange={(event) => { return setStartDate(event.target.value) }} ref={start_Date} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                            {startDateErr ?
                                <div className="alert alert-danger" role="alert">
                                    {startDateErr}
                                </div> : <></>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect8">End Date as per Project Plan</label>
                            <input type="date" value={endDate} onChange={(event) => { return setEndDate(event.target.value) }} ref={End_Date} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />

                            {endDateErr ?
                                <div className="alert alert-danger" role="alert">
                                    {endDateErr}
                                </div> : <></>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect9">Location</label>
                            <select className="form-control" id="exampleFormControlSelect9" value={location} onChange={(event) => { return setLocation(event.target.value) }} >
                                <option>Pune</option>
                                <option>Delhi</option>
                                <option>Mumbai</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}