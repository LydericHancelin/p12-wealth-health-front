import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";

import DatePicker from "react-datepicker";
import Modal from "./Modal";
import Select from "./Select";
import { addEmployee } from "../app/employeeStore";
import { useDispatch } from "react-redux";

const Formular = () => {
  const dispatch = useDispatch();
  const stateArray = ["Alabama", "Arkansas", "California", "Colorado"];
  const [isOpen, setIsOpen] = useState(false);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState();
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(
      addEmployee({
        firstname,
        lastname,
        birthdate,
        startDate,
        street,
        city,
        state,
        zipcode,
        department,
      })
    );
    setIsOpen(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstname'>First Name</label>
      <input
        type='text'
        name='firstname'
        id='firstname'
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label htmlFor='lastname'>Last Name</label>
      <input
        type='text'
        name='lastname'
        id='lastname'
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label htmlFor='birthdate'>Date of Birth</label>
      <input
        type='date'
        name='birthdate'
        id='birthdate'
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      /> */}
      <label htmlFor='startdate'>Start Date</label>
      <input
        type='date'
        name='startdate'
        id='startdate'
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor='street'>Street</label>
      <input
        type='text'
        name='street'
        id='street'
        value={street}
        onChange={(e) => setStreet(e.target.value)}
      />
      <label htmlFor='city'>City</label>
      <input
        type='text'
        name='city'
        id='city'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <label htmlFor='state'>State</label>
      <Select
        options={stateArray}
        value={state}
        onChange={(e) => setState(e.target.value)}
        id='state'
      />
      <label htmlFor='zipcode'>Zip Code</label>
      <input
        type='number'
        name='zipcode'
        id='zipcode'
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <label htmlFor='department'>Department</label>
      <select
        id='department'
        name='department'
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value='sales'>Sales</option>
        <option value='marketing'>MARKETING</option>
        <option value='engineering'>Engineering</option>
        <option value='human-resources'>Human Resources</option>
        <option value='legal'>Legal</option>
      </select>
      <button type='submit'>Save</button>
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
