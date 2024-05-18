import React from "react";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

function Pagination({
  totalPages,
  handleClick,

  page,
  setPage,
}) {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  const previousPage = (event) => {
    event.preventDefault();
    setPage(page - 1);
  };
  const nextPage = (event) => {
    event.preventDefault();
    setPage(page + 1);
  };

  return (
    <div
      id="paginate"
      className="mt-8 pt-8 flex justify-between"
      style={{ margin: "auto" }}
    >
      <button
        className="buttons bg-gray-200 flex items-center justify-center"
        style={{ height: "30px", width: "100px" }}
        onClick={(e) => {
          handleClick("prev");
        }}
        disabled={page === 1}
      >
        <VscArrowLeft className="mr-2" />
        Prev
      </button>

      <button
        className="buttons bg-gray-200 flex items-center justify-center"
        style={{ height: "30px", width: "100px" }}
        onClick={(e) => {
          handleClick("next");
        }}
        disabled={page === 5}
      >
        Next <VscArrowRight className="ml-2" />
      </button>
    </div>
  );
}

export default Pagination;
