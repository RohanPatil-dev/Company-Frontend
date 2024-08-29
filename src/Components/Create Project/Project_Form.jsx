import React from "react"

export default function Project_Form() {
    return (
        <>
            <div className="project-form">
                <form action="">
                    <div className="project-theme">
                        <div class="form-group">
                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Enter Project Theme"></textarea>
                        </div>

                        <div className="project-submit">
                            <button>Save Project</button>
                        </div>
                    </div>

                    <div className="project-selection">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Reason</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>For Business</option>
                                <option>For Personal</option>
                                <option>For Dealership</option>
                                <option>For Transport</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Type</label>
                            <select class="form-control" id="exampleFormControlSelect2">
                                <option>Internal</option>
                                <option>External</option>
                                <option>Vendor</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect3">Division</label>
                            <select class="form-control" id="exampleFormControlSelect3">
                                <option>Filters</option>
                                <option>Compressor</option>
                                <option>Pumps</option>
                                <option>Glass</option>
                                <option>Water Heater</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect4">Category</label>
                            <select class="form-control" id="exampleFormControlSelect4">
                                <option>Quality A</option>
                                <option>Quality B</option>
                                <option>Quality C</option>
                                <option>Quality D</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect5">Priority</label>
                            <select class="form-control" id="exampleFormControlSelect5">
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect6">Department</label>
                            <select class="form-control" id="exampleFormControlSelect6">
                                <option>Strategy</option>
                                <option>Finance</option>
                                <option>Quality</option>
                                <option>Maintainance</option>
                                <option>Stores</option>
                                <option value="">HR</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect7">Start Date as per Project Plan</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect8">End Date as per Project Plan</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>

                        <div class="form-group">
                            <label for="exampleFormControlSelect9">Location</label>
                            <select class="form-control" id="exampleFormControlSelect9">
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