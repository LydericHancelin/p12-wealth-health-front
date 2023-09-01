import React from "react";

const Select = ({ options, value, onChange, id }) => {
  return (
    <select id={id} name='state' value={value} onChange={onChange}>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
