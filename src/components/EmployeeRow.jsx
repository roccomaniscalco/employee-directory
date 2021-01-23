import React from "react";

const EmployeeRow = ({ name, cell, image }) => {
  return (
    <tr>
      <td>
        <img src={image} alt={name.first + " " + name.last} />
      </td>
      <td className="align-middle">{name.first}</td>
      <td className="align-middle">{name.last}</td>
      <td className="align-middle">{cell}</td>
    </tr>
  );
};

export default EmployeeRow;
