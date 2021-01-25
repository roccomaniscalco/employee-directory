import React, { useState, useEffect } from "react";
import getUsers from "../API/randomUser";
import EmployeeRow from "./EmployeeRow";

const EmployeeGrid = () => {
  const [employees, setEmployees] = useState([]);
  const [EMPLOYEES, setEMPLOYEES] = useState([]);

  useEffect(() => {
    if (!employees) {
      return;
    }

    getUsers()
      .then((response) => {
        setEmployees(response.data.results);
        setEMPLOYEES(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);

  const sortEmployees = () => {
    const sortedEmployees = employees.sort((a, b) => {
      var nameA = a.name.last.toUpperCase();
      var nameB = b.name.last.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setEmployees([...sortedEmployees]);
    console.log(employees)
  };

  const filterEmployees = (e) => {
    const filteredEmployees = EMPLOYEES.filter((EMPLOYEE) => {
        const numericEMPLOYEE = EMPLOYEE.cell.replace(/[^0-9]/gi, '');
        const numericQuery = e.target.value.replace(/[^0-9]/gi, '');
        return numericEMPLOYEE.indexOf(numericQuery) !== -1
    })
    setEmployees(filteredEmployees)
  }

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th></th>
          <th scope="col">
            NAME <i className="bi bi-sort-down-alt" onClick={sortEmployees}></i>
          </th>
          <th scope="col"> 
            PHONE 
          </th>
          <th scope="col">
            EMAIL 
          </th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <EmployeeRow
            key={employee.login.uuid}
            name={employee.name}
            cell={employee.cell}
            image={employee.picture.large}
            email={employee.email}
          />
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeGrid;
