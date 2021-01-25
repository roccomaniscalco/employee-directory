import React from "react";
import EmployeeRow from "./EmployeeRow";

const EmployeeGrid = ({employees, handleSort}) => {

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th></th>
          <th scope="col">
            NAME <i className="bi bi-sort-down-alt" onClick={handleSort}></i>
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
