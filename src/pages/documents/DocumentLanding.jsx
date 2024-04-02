import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchDocuments, deleteDocuments } from "../../redux";
import Button from "@mui/material/Button";

import { Table, Popconfirm, Input, Space } from "antd";
import { IconButton } from "../General/IconButton";
import { EyeIcon } from "../General/EyeIcon";
import { EditIcon } from "../General/EditIcon";
import { DeleteIcon } from "../General/DeleteIcon";
import { Tooltip, Col, Row } from "@nextui-org/react";
import { Header } from "../../components";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";

const DocumentLanding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchDocuments());
  }, []);

  const handleDelete = (doc) => {
    console.log("click");
    // dispatch(deleteDocuments(doc));
  };

  //format date using moment Js and render it in Anttable
  const getFormatDate = (date) => {
    let _date = moment(new Date(date));
    date = _date.format("YYYY-MM-DD");
    return date;
  };
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <button
            type="button"
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </button>
          <button
            type="button"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => document.getElementById("searchInput").select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? <div>{text}</div> : text),
  });
  // column configuration
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
      title: "Type",
      dataIndex: ["documentTypes", "name"],
      key: "documentTypes.name",
    },

    {
      title: "Issued Date",
      dataIndex: "issueDate",
      key: "issueDate",
      render: (date) => getFormatDate(date),
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
            handleDelete({ id: record.id });
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
                    navigate(`/documents/${record.id}`);
                  }}
                >
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit Document">
                <IconButton onClick={() => console.log("click")}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Delete Document" color="error">
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        ) : null,
    },
  ];

  const _documentReducer = useSelector((state) => state.documents);

  return (
    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Apps" title="Document" />
      <div className="ml-auto m-5">
        <Button
          variant="contained"
          onClick={() => {
            navigate("/documents/create");
          }}
        >
          Create Document
        </Button>
      </div>
      <Table dataSource={_documentReducer.documents} columns={columns} />;
    </div>
  );
};

export default DocumentLanding;
