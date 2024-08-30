import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import CustomPagination from "./CustomPagination"; // Import the custom pagination component
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS


export default function D_Table() {

  const data = [
    { id: 1, projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 2,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 3,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 4,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 5,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 6,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 7,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 8,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 9,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 10,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 11,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
    { id: 12,  projectName: "Line Filter", Reason: "Business", Type: "Internal", Division: "Compressor", Category: "Quality A", Priority: "High", Dept: "Strategy", Location: "Pune", Status: "Runnig", action: "" },
  ]


  const [buttonSelection, setButtonSelection] = useState({id : null,action : null})

  function handleButtonClick(row,action) {
    setButtonSelection({id : row.id,action : action});
  }


  const [records, setRecords] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortPriority, setSortPriority] = useState("all");
  const rowsPerPage = 7;

  function handleFilter(event) {
    const filteredData = data.filter((value) =>
      value.name.toLowerCase().includes(event.target.value.toLowerCase())
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
        return aPriorityIndex - bPriorityIndex; // Default sorting
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
      selector: (row) => row.projectName,
      width: '160px',
    },
    {
      name: "Reason",
      selector: (row) => row.Reason,
      width: '100px', 
    },
    {
      name: "Type",
      selector: (row) => row.Type,
      width: '85px', 
    },
    {
      name: "Division",
      selector: (row) => row.Division,
      width: '115px',
    },
    {
      name: "Category",
      selector: (row) => row.Category,
      width: '100px', 
    },
    {
      name: "Priority",
      selector: (row) => row.Priority,
      width: '100px', 
    },
    {
      name: "Dept",
      selector: (row) => row.Dept,
      width: '90px', 
    },
    {
      name: "Location",
      selector: (row) => row.Location,
      width: '100px',
    },
    {
      name: "Status",
      selector: (row) => row.Status,
      width: '100px', 
    },
    {
      name: "",
      cell: (row) => (
        <div style={{ display: "flex", gap: "5px" }}>
          <button  onClick={() => {handleEdit(row); handleButtonClick(row,"Start")}} className={`${buttonSelection.id === row.id && buttonSelection.action === "Start" ? 'status-btn-active' : 'status-btn'}`}>Start</button>
          <button onClick={() => {handleDelete(row); handleButtonClick(row,"Close")}}  className={`${buttonSelection.id === row.id && buttonSelection.action === "Close" ? 'status-btn-active' : 'status-btn'}`}>Close</button>
          <button onClick={() => {handleView(row); handleButtonClick(row,"Cancel")}}  className={`${buttonSelection.id === row.id && buttonSelection.action === "Cancel" ? 'status-btn-active' : 'status-btn'}`}>Cancel</button>
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
              style={{ marginBottom: "20px", padding: "8px", width: "300px" }}
            />
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
