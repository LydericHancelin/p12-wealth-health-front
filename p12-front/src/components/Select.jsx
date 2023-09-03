import React from "react";

const Select = ({ options, value, onChange, id, title }) => {
  return (
    <select id={id} name='state' value={value} onChange={onChange}>
      <option value='' disabled>
        {title}
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
