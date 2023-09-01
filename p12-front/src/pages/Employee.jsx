import React from "react";
import Table from "../components/Table";
import { employeesSelector } from "../app/employeeStore";
import { useSelector } from "react-redux";

const Employee = () => {
  const employees = useSelector(employeesSelector);
  return (
    <>
      <Table data={employees}></Table>
    </>
  );
};

export default Employee;
