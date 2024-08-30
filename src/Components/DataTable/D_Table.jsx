import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import CustomPagination from "./CustomPagination";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function D_Table() {

  const data = [
    { id: 1, projectName: "Line Filter", startDate: "Jun-21,2020", endDate: "Jan-01,2021", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 2, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 3, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 4, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 5, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 6, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 7, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 8, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 9, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 10, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 11, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 12, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 1, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 2, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 3, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 4, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 5, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 6, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 7, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 8, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 9, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 10, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 11, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 12, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 1, projectName: "Bine Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 2, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 3, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 4, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 5, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 6, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 7, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 8, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 9, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 10, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 11, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 12, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 1, projectName: "Gate Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 2, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 3, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 4, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 5, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 6, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 7, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 8, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 9, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 10, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 11, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },
    { id: 12, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Running", action: "" },


  ]


  const [buttonSelection, setButtonSelection] = useState({ id: null, action: null })

  function handleButtonClick(row, action) {
    setButtonSelection({ id: row.id, action: action });
  }


  const [records, setRecords] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortPriority, setSortPriority] = useState("all");
  const rowsPerPage = 7;

  function handleFilter(event) {
    const filteredData = data.filter((value) =>
      value.projectName.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(filteredData);
    setCurrentPage(1);
  }

  function handleSort(event) {
    const sortValue = event.target.value;
    setSortPriority(sortValue);

    const priorityOrder = ["high", "medium", "low"];
    const sortIndex = priorityOrder.indexOf(sortValue);

    const sortedData = data.sort((a, b) => {
      const aPriorityIndex = priorityOrder.indexOf(a.priority);
      const bPriorityIndex = priorityOrder.indexOf(b.priority);

      if (sortValue === "all") {
        return aPriorityIndex - bPriorityIndex;
      } else {
        return (aPriorityIndex === sortIndex ? -1 : (bPriorityIndex === sortIndex ? 1 : 0)) ||
          (aPriorityIndex - bPriorityIndex);
      }
    });

    setRecords(sortedData);
    setCurrentPage(1);
  }

  const paginatedData = records.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const totalPages = Math.ceil(records.length / rowsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [records]);

  const columns = [
    {
      name: "Project Name",
      selector: (row) => (
        <>
          <div className="projectName">{row.projectName}</div>
          <div className="date">{row.startDate} to {row.endDate}</div>
        </>
      ),
      width: '200px',
    },
    {
      name: "Reason",
      selector: (row) => (<span style={{ color: "gray" }}>{row.Reason}</span>),
      width: '100px',
    },
    {
      name: "Type",
      selector: (row) => (<span style={{ color: "gray" }}>{row.Type}</span>),
      width: '85px',
    },
    {
      name: "Division",
      selector: (row) => (<span style={{ color: "gray" }}>{row.Division}</span>),
      width: '115px',
    },
    {
      name: "Category",
      selector: (row) => (<span style={{ color: "gray" }} className="ml-2">{row.Category}</span>),
      width: '100px',
    },
    {
      name: "Priority",
      selector: (row) => (<span style={{ color: "gray" }} className="ml-3">{row.Priority}</span>),
      width: '100px',
    },
    {
      name: "Dept",
      selector: (row) => (<span style={{ color: "gray" }}>{row.Dept}</span>),
      width: '90px',
    },
    {
      name: "Location",
      selector: (row) => (<span style={{ color: "gray" }} className="ml-3">{row.Location}</span>),
      width: '100px',
    },
    {
      name: "Status",
      selector: (row) => (<span style={{ fontWeight: 'bold', color: "#034694" }}>{row.Status}</span>),
      width: '100px',
    },
    {
      name: "",
      cell: (row) => (
        <div style={{ display: "flex", gap: "5px" }}>
          <button onClick={() => { handleEdit(row); handleButtonClick(row, "Start") }} className={`${buttonSelection.id === row.id && buttonSelection.action === "Start" ? 'status-btn-active' : 'status-btn'}`}>Start</button>
          <button onClick={() => { handleDelete(row); handleButtonClick(row, "Close") }} className={`${buttonSelection.id === row.id && buttonSelection.action === "Close" ? 'status-btn-active' : 'status-btn'}`}>Close</button>
          <button onClick={() => { handleView(row); handleButtonClick(row, "Cancel") }} className={`${buttonSelection.id === row.id && buttonSelection.action === "Cancel" ? 'status-btn-active' : 'status-btn'}`}>Cancel</button>
        </div>
      ),
      width: '180px',
    },
  ];

  function handleEdit() {

  }

  function handleDelete() {

  }

  function handleView() {

  }

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: 'rgb(178, 219, 235)',
        color: 'black',
      },
    },
    headCells: {
      style: {
        fontSize: '16px',
      },
    },
    cells: {
      style: {
        fontSize: '15px',
        padding: "10px"
      },
    },
  };

  return (
    <>
      <div className="dataTable">
        <div className="searchTable">
          <div>
            <input
              type="text"
              onChange={handleFilter}
              placeholder="Search"
              className="sort"
              style={{ marginBottom: "20px", width: "300px" }}
            />
          
              <i
                className="fas fa-search search-icon"
                style={{
                  position: "absolute",
                  left: "40px",
                  top: "8%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "#aaa",
                }} 
              ></i> 
          
          </div>

          <div>
            <p><span style={{ color: "rgb(192, 181, 181)" }}>Sort By :</span><span>
              <select onChange={handleSort} value={sortPriority} style={{ marginLeft: "20px", padding: "8px", border: "none", outline: "none" }}>
                <option value="all">Priority</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </span></p>
          </div>
        </div>


        <DataTable columns={columns} data={paginatedData} pagination={false} customStyles={customStyles} />

        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>

  );
}
