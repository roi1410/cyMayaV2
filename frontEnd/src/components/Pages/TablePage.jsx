import React, { useState } from "react";
import DataTable from "react-data-table-component";

function TablePage({filterKey,columns,data}) {
  
 
  const [record, setRecord] = useState(data);
  const handleFilter = (e) => {
    const newData = data.filter((row) => {
      return row[filterKey].toLowerCase().includes(e.target.value);
    });
    setRecord(newData);
  };
  return (
    <div className="container mt-5">
      <div className="text-end">
        <input type="text" onChange={(e) => handleFilter(e)} />
      </div>
      <DataTable
        columns={columns}
        data={record}
        fixedHeader
        pagination
      ></DataTable>
    </div>
  );
}

export default TablePage;
