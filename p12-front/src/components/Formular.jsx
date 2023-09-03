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
  const departmentArray = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];
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
        birthdate: birthdate.toLocaleDateString(),
        startDate: startDate.toLocaleDateString(),
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
      <DatePicker id='birthdate' selected={birthdate} onChange={setBirthdate} />

      <label htmlFor='startdate'>Start Date</label>
      <DatePicker id='startdate' selected={startDate} onChange={setStartDate} />
      {/* <input
        type="date"
        name="startdate"
        id="startdate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      /> */}
      <fieldset>
        <legend>Address</legend>
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
          title='Etat'
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
      </fieldset>

      <label htmlFor='department'>Department</label>
      <Select
        options={departmentArray}
        id='department'
        name='department'
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        title='Département'
      />
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
