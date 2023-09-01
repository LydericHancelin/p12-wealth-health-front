import React from "react";

const Select = ({ array }) => {
  return (
    <select id="state" name="state">
      {array.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
