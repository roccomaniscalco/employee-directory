import React from "react";

const EmployeeRow = ({ name, cell, image, email }) => {
  return (
    <tr>
      <td>
        <img src={image} alt={name.first + " " + name.last} />
      </td>
      <td className="align-middle">{name.first + " " + name.last}</td>
      <td className="align-middle">{cell}</td>
      <td className="align-middle">{email}</td>
    </tr>
  );
};

export default EmployeeRow;
