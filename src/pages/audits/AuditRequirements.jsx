import React, { useState } from "react";
import { Button, Table, InputNumber } from "antd";

const AuditRequirements = () => {
  const [addedRows, setAddedRows] = useState([]);

  const addEmptyRow = () => {
    const newRow = { column1: null, column2: null, column3: null, column4: null };
    setAddedRows([...addedRows, newRow]);
  };

  const handleChange = (value, rowIndex, columnName) => {
    const updatedRows = addedRows.map((row, index) => {
      if (index === rowIndex) {
        return { ...row, [columnName]: value };
      }
      return row;
    });
    setAddedRows(updatedRows);
  };

  const columns = [
    {
      title: "Code",
      dataIndex: "column1",
      render: (_, record, index) => (
        <InputNumber
          value={record.column1}
          onChange={(value) => handleChange(value, index, "column1")}
        />
      )
    },
    {
      title: "Name",
      dataIndex: "column2",
      render: (_, record, index) => (
        <InputNumber
          value={record.column2}
          onChange={(value) => handleChange(value, index, "column2")}
        />
      )
    },
    {
      title: "Type",
      dataIndex: "column3",
      render: (_, record, index) => (
        <InputNumber
          value={record.column3}
          onChange={(value) => handleChange(value, index, "column3")}
        />
      )
    },
    {
      title: "Valid Till",
      dataIndex: "column4",
      render: (_, record, index) => (
        <InputNumber
          value={record.column4}
          onChange={(value) => handleChange(value, index, "column4")}
        />
      )
    }
  ];

  return (
    <div>
      <Button onClick={addEmptyRow}>Add Audit Requirements</Button>
      <Table
        dataSource={addedRows}
        columns={columns}
        pagination={false}
        rowKey={(record, index) => index}
      />
    </div>
  );
};

export default AuditRequirements;
