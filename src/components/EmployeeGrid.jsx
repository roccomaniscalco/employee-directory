import React, { useState, useEffect } from "react";
import getUsers from "../API/randomUser";
import EmployeeRow from "./EmployeeRow";

const EmployeeGrid = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    if (!employees) {
      return;
    }

    getUsers()
      .then((response) => {
        setEmployees(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {employees.map((employee) => (
        <EmployeeRow key={employee.login.uuid} info={employee} />
      ))}
    </div>
  );
};

export default EmployeeGrid;
