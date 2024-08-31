import React,{useContext} from "react"
import { context } from "./D_Table";

import menuBar from "../../Images/menu-bar.png"

export default function MediaTable() {

    const media = useContext(context)

  return (
    <>
    
      {/* responsive dataTable */}
      <div className="responsive-dataTable">
        <div className="responsive-searchTable">
          <div>
            <input
              type="text"
              onChange={(e) => media.setSearchTerm(e.target.value)}
              placeholder="Search"
              className="responsive-sort"
              style={{ marginBottom: "20px" }}
            />
            <i
              className="fas fa-search responsive-search"

            ></i>
          </div>

          <div>
            <button className="menu-bar"
              onClick={() => media.setEnableFilter(!media.enableFilter)}
            >
            <img src={menuBar} alt="" />
            </button>

            {media.enableFilter && (
              <div className="responsive-filters-dropdown">
                <i
                  className="fas fa-times close-icon"
                  onClick={() => media.setEnableFilter(false)}
                  style={{ cursor: "pointer", position: "absolute",fontSize : "30px" ,right: "30px", top: "10px" }}
                ></i>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>Sort Projects By</p>
                <button>Priority</button>
                <button>Recently Updated</button>
                <button>Status</button>
                <button>Start Date</button>
                <button>End Date</button>
              </div>
            )}

            {/* <p> */}

            {/* <span>
                <select
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  value={selectedPriority}
                  style={{ marginLeft: "20px", padding: "8px", border: "none", outline: "none" }}
                >
                  <option value="all">Priority</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </span> */}
            {/* </p> */}
          </div>
        </div>


        <div className="responsive-card-parent">
          {
            media.currentRecords.map((value) => {
              return (
                <>
                  <div className="card responsive-card p-3 m-3">
                    <div className="card-Row">
                      <div className="first-Row">
                        <p style={{ fontWeight: "700", color: "rgb(105, 102, 102)" }}>{value.projectName}</p>
                        <p className="date">{value.startDate} to {value.endDate}</p>
                      </div>

                      <div style={{ fontWeight: "700", color: "rgb(105, 102, 102)" }}>{value.Status}</div>
                    </div>

                    <div className="second-Row mt-4">
                      <p><span className="responsive-title">Reason :</span> {value.Reason}</p>
                      <p><p><span className="responsive-title">Type :</span> {value.Type}  <span class="bullet"></span> <span className="responsive-title">Category : </span>{value.Category}</p></p>
                      <p><p><span className="responsive-title">Div :</span> {value.Division}  <span class="bullet"></span>  <span className="responsive-title">Dept :</span> {value.Dept}</p></p>
                      <p><span className="responsive-title">Location :</span> {value.Location}</p>
                      <p><span className="responsive-title">Priority :</span> {value.Priority}</p>
                    </div>

                    <div className="responsive-data-btn">
                      <button
                        onClick={() => { media.handleEdit(value); media.handleButtonClick(value, "Start") }}
                        className={`${media.buttonSelection.id === value.id && media.buttonSelection.action === "Start" ? 'responsive-status-btn-active' : 'responsive-status-btn'}`}
                      >
                        Start
                      </button>
                      <button
                        onClick={() => { media.handleDelete(value); media.handleButtonClick(value, "Close") }}
                        className={`${media.buttonSelection.id === value.id && media.buttonSelection.action === "Close" ? 'responsive-status-btn-active' : 'responsive-status-btn'}`}
                      >
                        Close
                      </button>
                      <button
                        onClick={() => { media.handleView(value); media.handleButtonClick(value, "Cancel") }}
                        className={`${media.buttonSelection.id === value.id && media.buttonSelection.action === "Cancel" ? 'responsive-status-btn-active' : 'responsive-status-btn'}`}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}