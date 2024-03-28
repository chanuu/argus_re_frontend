import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../redux";

import { Table } from "antd";

import { taskData, taskGrid } from "../data/data";
import { Header } from "../components";

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Importance",
    dataIndex: "importance",
    key: "importance",
  },
  {
    title: "DueDate",
    dataIndex: "dueDate",
    key: "dueDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    filters: [
      {
        text: "Pending",
        value: "Pending",
      },
      {
        text: "Inprogress",
        value: "Inprogress",
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    key: "status",
  },
];

const Task = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  const _taskReducer = useSelector((state) => state.tasks);
  console.log(_taskReducer.tasks + "test");
  return (
    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Tools" title="Task" />
      <Table dataSource={_taskReducer.tasks} columns={columns} />;
    </div>
  );
};

export default Task;
