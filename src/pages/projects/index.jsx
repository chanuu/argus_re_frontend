import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects, deleteProjects } from "../../redux";
import Button from "@mui/material/Button";

import { Table, Popconfirm } from "antd";
import { IconButton } from "../General/IconButton";
import { EyeIcon } from "../General/EyeIcon";
import { EditIcon } from "../General/EditIcon";
import { DeleteIcon } from "../General/DeleteIcon";
import { Tooltip, Col, Row } from "@nextui-org/react";
import { Header } from "../../components";
import moment from "moment";

const Index = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const handleDelete = (doc) => {
    console.log("Delete click");
    // dispatch(deleteDocuments(doc));
  };

  //format date using moment Js and render it in Anttable
  const getFormatDate = (date) => {
    let _date = moment(new Date(date));
    date = _date.format("YYYY-MM-DD");
    return date;
  };

  // column configuration
  const columns = [
    {
      title: "Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Started Date",
      dataIndex: "startedDate",
      key: "startedDate",
      render: (date) => getFormatDate(date),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 100,
      onCell: (record, rowIndex) => {
        return {
          onClick: (ev) => {
            // handleDelete({ id: record.id });
          },
        };
      },
      render: (_, record) =>
        useSelector.length >= 1 ? (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Details">
                <IconButton
                  onClick={() => {
                    navigate(`/projects/${record.id}`);
                  }}
                >
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit Document">
                <IconButton onClick={() => console.log("click Edit Button")}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Delete Document" color="error">
                <IconButton onClick={() => handleDelete({ id: 14 })}>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        ) : null,
    },
  ];

  const _projectReducer = useSelector((state) => state.projects);

  return (
    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Apps" title="Projects" />
      <div className="ml-auto m-5">
        <Button
          variant="contained"
          onClick={() => {
            navigate("/projects/create/new");
          }}
        >
          Create Project
        </Button>
      </div>
      <Table dataSource={_projectReducer.projects} columns={columns} />;
    </div>
  );
};

export default Index;
