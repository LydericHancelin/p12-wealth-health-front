import "../assets/css/table.scss";

import React, { useEffect, useState } from "react";

import Select from "./Select";
import classNames from "classnames";

const Table = ({ data }) => {
  const headers = Object.keys(data[0] || {});
  const nbCols = headers.length;
  const [displayedData, setDisplayedData] = useState(data);
  const [filter, setFilter] = useState("");
  const [sortField, setSortField] = useState(headers[0], "");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const [nbPerPage, setNbPerPage] = useState(10);
  const [nbPages, setNbPages] = useState(Math.ceil(data.length / nbPerPage));
  const nbPerPageOptions = [2, 10, 25, 50, 100];

  const getHeaderClassNames = (header) => {
    return classNames({
      sortedAsc: sortField === header && sortDirection === "asc",
      sortedDesc: sortField === header && sortDirection === "desc",
    });
  };

  const getPageClassNames = (pageNumber) => {
    return classNames({
      page: true,
      currentPage: currentPage === pageNumber,
    });
  };

  const toggleSort = (header) => {
    if (sortField === header) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(header);
      setSortDirection("asc");
    }
  };

  useEffect(() => {
    const filterResults = (entry) => {
      return Object.values(entry).some((cellValue) =>
        cellValue.includes(filter)
      );
    };
    const filterPage = (__, index) => {
      return Math.floor(index / nbPerPage) === currentPage;
    };
    const sortResults = (entry1, entry2) => {
      const direction = sortDirection === "asc" ? -1 : 1;
      return entry1[sortField] < entry2[sortField] ? direction : -direction;
    };
    setDisplayedData(
      data.filter(filterResults).sort(sortResults).filter(filterPage)
    );
  }, [data, filter, sortField, sortDirection, currentPage, nbPerPage]);

  useEffect(() => {
    setNbPages(Math.ceil(data.length / nbPerPage));
  }, [data, nbPerPage]);

  return (
    <div className='table'>
      <h1>Current Employees</h1>
      <div className='head-table'>
        <div className='entries'>
          Show
          <Select
            options={nbPerPageOptions}
            value={nbPerPage}
            onChange={(e) => setNbPerPage(e.target.value)}
            id='entries'
          />
          entries
        </div>
        <div>
          <label htmlFor='search'>Search : </label>
          <input
            type='text'
            id='search'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            onClick={(e) => toggleSort(e.target.value)}
          />
        </div>
      </div>

      <div className='awesomeTable' style={{ "--nbCols": nbCols }}>
        {headers.map((header) => (
          <span
            key={`header-${header}`}
            onClick={() => toggleSort(header)}
            className={getHeaderClassNames(header)}
          >
            {header}
          </span>
        ))}
        {displayedData.map((entry, rowIndex) =>
          headers.map((header) => (
            <p key={`cell-${rowIndex}-${header}`} className='item'>
              {entry[header]}
            </p>
          ))
        )}
      </div>
      <div className='pages'>
        {Array.from({ length: nbPages }, (_, i) => i).map((pageNumber) => {
          return (
            <span
              onClick={() => setCurrentPage(pageNumber)}
              key={`page-${pageNumber}`}
              className={getPageClassNames(pageNumber)}
            >
              {pageNumber + 1}
            </span>
          );
        })}
      </div>
      {/* <Link to='/'>
        <img
          src='./return.svg'
          alt='return to homepage'
          width='50'
          height='50'
        />
      </Link> */}
    </div>
  );
};

export default Table;
