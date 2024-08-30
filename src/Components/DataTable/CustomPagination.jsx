import React from "react";

function CustomPagination({ currentPage, totalPages, onPageChange }) {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const buttonStyle = {
    border: "none",
    padding: "4px 13px",
    margin: "0 5px",
    borderRadius: "50%", 
    cursor: "pointer",
    backgroundColor: "transparent",
    outline : "none"
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#15f4ee",
    color: "white",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    color: "#ccc",
    cursor: "not-allowed",
  };

  const pageNumbers = [];

  pageNumbers.push(
    <button
      key={1}
      onClick={() => handlePageChange(1)}
      style={currentPage === 1 ? activeButtonStyle : buttonStyle}
    >
      1
    </button>
  );


  if (currentPage > 4) {
    pageNumbers.push(<span key="ellipsis1">...</span>);
  }

  for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 2, totalPages - 1); i++) {
    pageNumbers.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        style={currentPage === i ? activeButtonStyle : buttonStyle}
      >
        {i}
      </button>
    );
  }

  if (currentPage < totalPages - 3) {
    pageNumbers.push(<span key="ellipsis2">...</span>);
  }

  pageNumbers.push(
    <button
      key={totalPages}
      onClick={() => handlePageChange(totalPages)}
      style={currentPage === totalPages ? activeButtonStyle : buttonStyle}
    >
      {totalPages}
    </button>
  );

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
      <button
        onClick={() => handlePageChange(1)}
        style={currentPage === 1 ? disabledButtonStyle : buttonStyle}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        style={currentPage === 1 ? disabledButtonStyle : buttonStyle}
        disabled={currentPage === 1}
      >
        &lsaquo;
      </button>

      {pageNumbers}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        style={currentPage === totalPages ? disabledButtonStyle : buttonStyle}
        disabled={currentPage === totalPages}
      >
        &rsaquo;
      </button>
      <button
        onClick={() => handlePageChange(totalPages)}
        style={currentPage === totalPages ? disabledButtonStyle : buttonStyle}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
}

export default CustomPagination;
