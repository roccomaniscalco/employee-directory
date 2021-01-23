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
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th></th>
          <th scope="col">NAME</th>
          <th scope="col">PHONE</th>
          <th scope="col">EMAIL</th>
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
