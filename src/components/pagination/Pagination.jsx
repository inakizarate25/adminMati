import React from "react";
import arrow from "../../assets/step-forward.svg";

const Pagination = ({ itemsPerPage, currentPage }) => {
  return (
    <div>
      <button
        className="bg-slate-700 h-10 w-10 rounded-md cursor-pointer transform rotate-180"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={arrow} alt="prev" />
      </button>
      <p>{currentPage}</p>
      <button
        className="bg-slate-700 h-10 w-10 rounded-md cursor-pointer"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={arrow} alt="next" />
      </button>
    </div>
  );
};

export default Pagination;
