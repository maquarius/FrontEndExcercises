import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const TodoTable = props => {
  const columns = [
    { Header: "Date", accessor: "date" },
    { Header: "Description", accessor: "desc" },
    {
      accessor: 'desc',
      filtrable: true,
      sortable: true,
      Cell: {(index)} => <button id={index} onClick={props.deleteItem}>Delete</button>
    }
  ];
  return <div>
      <ReactTable />
  </div>;
};

export default TodoTable;
