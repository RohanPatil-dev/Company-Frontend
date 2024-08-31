import React, { useState, useEffect, createContext } from "react";
import CustomPagination from "./CustomPagination";
import '@fortawesome/fontawesome-free/css/all.min.css';
import MediaTable from "./MediaTable";

const context = createContext()

export default function D_Table() {

  const data = [
    { id: 1, projectName: "Aine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 2, projectName: "Bine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "Medium", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 3, projectName: "Cine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 4, projectName: "Dine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "Low", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 5, projectName: "Eine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "Medium", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 6, projectName: "Fine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 7, projectName: "Gine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 8, projectName: "Hine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "Low", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 9, projectName: "Iine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "Medium", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 10, projectName: "Jine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "Low", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 11, projectName: "Kine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "Low", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 12, projectName: "Line Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 13, projectName: "Mine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 14, projectName: "Nine Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "Medium", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },

  ];

  const [buttonSelection, setButtonSelection] = useState({ id: null, action: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;

  useEffect(() => {
    let filterPriority = data.filter((value) =>
      value.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedPriority !== "all") {
      filterPriority = filterPriority.filter((value) =>
        value.Priority.toLowerCase() === selectedPriority.toLowerCase()
      );
    }

    setFilteredData(filterPriority);
  }, [searchTerm, selectedPriority]);

  const handleButtonClick = (row, action) => {
    setButtonSelection({ id: row.id, action: action });
  };

  const handleEdit = (value) => {
    console.log("Edit:", value);
  };

  const handleDelete = (value) => {
    console.log("Delete:", value);
  };

  const handleView = (value) => {
    console.log("View:", value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

  const totalPages = Math.ceil(filteredData.length / recordsPerPage);


  // media query filters 
  const [enableFilter, setEnableFilter] = useState(false);

  return (
    <>
      <div className="dataTable">
        <div className="searchTable">
          <div>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              className="sort"
              style={{ marginBottom: "20px" }}
            />
            <i
              className="fas fa-search search"

            ></i>
          </div>

          <div>
            <p>
              <span style={{ color: "rgb(192, 181, 181)" }}>Sort By :</span>
              <span>
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
              </span>
            </p>
          </div>
        </div>

        <div className="column">
          <p style={{ marginLeft: "10px" }}>Project Name</p>
          <p style={{ marginLeft: "105px" }}>Reason</p>
          <p style={{ marginLeft: "50px" }}>Type</p>
          <p style={{ marginLeft: "65px" }}>Division</p>
          <p style={{ marginLeft: "55px" }}>Category</p>
          <p style={{ marginLeft: "33px" }}>Priority</p>
          <p style={{ marginLeft: "35px" }}>Dept</p>
          <p style={{ marginLeft: "42px" }}>Location</p>
          <p style={{ marginLeft: "35px" }}>Status</p>
        </div>

        {
          currentRecords.map((value) => (
            <div className="tables card" key={value.id}>
              <div>
                <p className="projectName" style={{ color: "#09274a" }}>{value.projectName}</p>
                <p className="date">{value.startDate} to {value.endDate}</p>
              </div>
              <p>{value.Reason}</p>
              <p>{value.Type}</p>
              <p>{value.Division}</p>
              <p>{value.Category}</p>
              <p style={{ width: "40px" }}>{value.Priority}</p>
              <p>{value.Dept}</p>
              <p>{value.Location}</p>
              <p style={{ fontWeight: "700", color: "#093669" }}>{value.Status}</p>

              <div className="data-btn">
                <button
                  onClick={() => { handleEdit(value); handleButtonClick(value, "Start") }}
                  className={`${buttonSelection.id === value.id && buttonSelection.action === "Start" ? 'status-btn-active' : 'status-btn'}`}
                >
                  Start
                </button>
                <button
                  onClick={() => { handleDelete(value); handleButtonClick(value, "Close") }}
                  className={`${buttonSelection.id === value.id && buttonSelection.action === "Close" ? 'status-btn-active' : 'status-btn'}`}
                >
                  Close
                </button>
                <button
                  onClick={() => { handleView(value); handleButtonClick(value, "Cancel") }}
                  className={`${buttonSelection.id === value.id && buttonSelection.action === "Cancel" ? 'status-btn-active' : 'status-btn'}`}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}


        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>


      <context.Provider value={{ setEnableFilter, enableFilter, currentRecords, handleEdit, handleDelete, handleView, buttonSelection, handleButtonClick, setSearchTerm }}>
        <MediaTable />
      </context.Provider>
    </>
  );
}

export { context }
