import "../assets/css/table.scss";

import React, { useState } from "react";

import classNames from "classnames";

const Table = ({ data }) => {
  const headers = Object.keys(data[0] || {});
  const nbCols = headers.length;
  const [filter, setFilter] = useState("");
  const [sortField, setSortField] = useState(headers[0], "");
  const [sortDirection, setSortDirection] = useState("asc");

  const getHeaderClassNames = (header) => {
    return classNames({
      sortedAsc: sortField === header && sortDirection === "asc",
      sortedDesc: sortField === header && sortDirection === "desc",
    });
  };

  const filterResults = (entry) => {
    return Object.values(entry).some((cellValue) => cellValue.includes(filter));
  };

  const sortResults = (entry1, entry2) => {
    const direction = sortDirection === "asc" ? -1 : 1;
    return entry1[sortField] < entry2[sortField] ? direction : -direction;
  };

  const toggleSort = (header) => {
    if (sortField === header) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(header);
      setSortDirection("asc");
    }
  };

  return (
    <>
      <input
        type='text'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        onClick={(e) => toggleSort(e.target.value)}
      />
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
        {data
          .filter(filterResults)
          .sort(sortResults)
          .map((entry, rowIndex) =>
            headers.map((header) => (
              <span key={`cell-${rowIndex}-header`}>{entry[header]}</span>
            ))
          )}
      </div>
    </>
  );
};

export default Table;
