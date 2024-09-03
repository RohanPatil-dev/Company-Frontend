import React, { useState, useEffect, createContext } from "react";
import CustomPagination from "./CustomPagination";
import '@fortawesome/fontawesome-free/css/all.min.css';
import MediaTable from "./MediaTable";
import axios from "axios";

const context = createContext();

export default function D_Table() {
  const [data, setData] = useState([]);
  const [buttonSelection, setButtonSelection] = useState({ id: null, action: null });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [enableFilter, setEnableFilter] = useState(false);
  const [loading, setLoading] = useState(false); // Initialize loading state

  const token = localStorage.getItem("uid");

  async function getData() {
    setLoading(true); // Start loading
    try {
      const response = await axios.get("http://localhost:8081/project/getAllData", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setData(response.data.msg);
    } catch (error) {
      console.error("Error fetching data", error);
      // Optionally, handle the error by setting an error state
    } finally {
      setLoading(false); // End loading
    }
  }

  useEffect(() => {
    getData(); // Fetch data on component mount
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    let filterPriority = data.filter((value) =>
      value.projectTheme.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedPriority !== "all") {
      filterPriority = filterPriority.filter((value) =>
        value.Priority.toLowerCase() === selectedPriority.toLowerCase()
      );
    }

    setFilteredData(filterPriority);
    setCurrentPage(1); // Reset to first page when filters change
  }, [data, searchTerm, selectedPriority]); // Dependencies for filtering

  const handleButtonClick = (row, action) => {
    setButtonSelection({ id: row._id, action: action });
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

  const recordsPerPage = 7;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredData.length / recordsPerPage);

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
            <i className="fas fa-search search"></i>
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

        {loading ? (
          <div className="loading">
            <i className="fas fa-spinner fa-spin"></i> Loading...
          </div>
        ) : (
          currentRecords.map((value) => (
            <div className="tables card" key={value._id}> {/* Use unique _id as key */}
              <div>
                <p className="projectName" style={{ color: "#09274a" }}>{value.projectTheme}</p>
                <p className="date">
                  {new Date(value.start_Date).toLocaleDateString()} to {new Date(value.End_Date).toLocaleDateString()}
                </p>
              </div>
              <p>{value.Reason}</p>
              <p>{value.Type}</p>
              <p>{value.Division}</p>
              <p>{value.Category}</p>
              <p style={{ width: "40px" }}>{value.Priority}</p>
              <p>{value.Department}</p>
              <p>{value.Location}</p>
              <p style={{ fontWeight: "700", color: "#093669" }}>{value.Status}</p>

              <div className="data-btn">
                <button
                  onClick={() => { handleEdit(value); handleButtonClick(value, "Start") }}
                  className={`${buttonSelection.id === value._id && buttonSelection.action === "Start" ? 'status-btn-active' : 'status-btn'}`}
                >
                  Start
                </button>
                <button
                  onClick={() => { handleDelete(value); handleButtonClick(value, "Close") }}
                  className={`${buttonSelection.id === value._id && buttonSelection.action === "Close" ? 'status-btn-active' : 'status-btn'}`}
                >
                  Close
                </button>
                <button
                  onClick={() => { handleView(value); handleButtonClick(value, "Cancel") }}
                  className={`${buttonSelection.id === value._id && buttonSelection.action === "Cancel" ? 'status-btn-active' : 'status-btn'}`}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))
        )}

        {!loading && currentRecords.length === 0 && (
          <div className="no-data">No projects found.</div> // Optional: No Data Message
        )}

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

export { context };
