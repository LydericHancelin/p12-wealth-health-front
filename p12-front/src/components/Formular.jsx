import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";

import DatePicker from "react-datepicker";
import Modal from "./Modal";
import Select from "./Select";

const Formular = () => {
  const [startDate, setStartDate] = useState(new Date());
  const array = ["Alabama", "Arkansas", "California", "Colorado"];
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label for="firstname">First Name</label>
      <input type="text" name="firstname" />
      <label for="lastname">Last Name</label>
      <input type="text" name="lastname" />
      <label for="birthdate">Date of Birth</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <label for="startdate">Start Date</label>
      <input type="date" name="startdate" />
      <label for="street">Street</label>
      <input type="text" name="street" />
      <label for="city">City</label>
      <input type="text" name="city" />
      <label for="state">State</label>
      <Select array={array} />
      <label for="zipcode">Zip Code</label>
      <input type="number" name="zipcode" />
      <label for="department">Department</label>
      <select id="department" name="department">
        <option value="sales">Sales</option>
        <option value="marketing">MARKETING</option>
        <option value="engineering">Engineering</option>
        <option value="human-resources">Human Resources</option>
        <option value="legal">Legal</option>
      </select>
      <button type="submit">Save</button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <p>Employee created</p>
      </Modal>
    </form>
  );
};

export default Formular;
