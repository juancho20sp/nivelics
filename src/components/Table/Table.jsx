import React, { useContext } from "react";
import "./Table.css";

import AppContext from "../../context/AppContext";

const Table = () => {
  const { state } = useContext(AppContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{state.name}</td>
          <td>{state.age}</td>
          <td>{state.email}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
