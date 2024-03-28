import React, { useState, useEffect, useRef } from "react";
import {
  Col,
  Row,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Typography,
  DatePicker,
  Select,
  InputNumber,
} from "antd";
import { Header } from "../../components";

import { IconButton } from "../General/IconButton";
import { EyeIcon } from "../General/EyeIcon";
import { EditIcon } from "../General/EditIcon";
import { DeleteIcon } from "../General/DeleteIcon";
import { Tooltip } from "@nextui-org/react";
import { Routes, Route, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

import {
  getProjectById,
  getTaskByProjectId,
  createTask,
  fetchUsers,
  getOwnerById,
} from "../../redux";

const { TextArea } = Input;
const { Option } = Select;

const Detail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const getFormatDate = (date) => {
    let _date = moment(new Date(date));
    date = _date.format("YYYY-MM-DD");
    return date;
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //on finish from
  const onFinish = (values) => {
    setIsModalOpen(false);
    dispatch(dispatchCreateAction(values));
    form.resetFields();
  };

  const dispatchCreateAction = (values) => {
    return (dispatch, getState) => {
      values.projectId = id;
      // values.handleByID = 1;
      values.code = "";
      values.taskAttachment = [];
      dispatch(createTask(values));
      const state = getState();

      console.log(_taskReducer.createTaskSucess + "Created");
      // Wait for action 1 to complete (or a certain condition to be met) before dispatching action 2
      if (state) {
        dispatch(getTaskByProjectId(id));
      }
    };
  };

  //handle task function
  const handleCreateTask = (values) => {
    values.projectId = id;
    //values.handleByID = 1;
    values.code = "";
    values.taskAttachment = [];
    dispatch(createTask(values));

    dispatch(getTaskByProjectId(id));
  };
  const [form] = Form.useForm();

  const handleFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("clicked");
      })
      .catch((errorInfo) => {});
  };

  let { id } = useParams();

  const _projectReducer = useSelector((state) => state.projects);
  const _taskReducer = useSelector((state) => state.tasks);
  const _userReducer = useSelector((state) => state.users);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getProjectById(id));
        const ownerID = _projectReducer.project.ownerID;
        dispatch(getOwnerById(ownerID));
        dispatch(getTaskByProjectId(id));
        dispatch(fetchUsers());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(_projectReducer);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "DueDate",
      dataIndex: "dueDate",
      key: "dueDate",
      render: (date) => getFormatDate(date),
    },
    {
      title: "Importance",
      dataIndex: "importance",
      key: "importance",
    },
    {
      title: "HandleBy",
      dataIndex: "handleName",
      key: "handleName",
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
            console.log("");
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
                    console.log("");
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

  return (
    <div className="bg-white rounded-3xl">
      <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <h5 class="text-xl font-bold dark:text-white">
          {_projectReducer.project.projectName}
        </h5>
        <div className="ml-auto m-5">
          <Row gutter={[32, 24]}>
            <Col span={12}>
              {" "}
              <div className="text-md font-medium text-gray-900 p-3">
                Start Date{" "}
                <div className="text-gray-400">
                  {" "}
                  {getFormatDate(_projectReducer.project.startedDate)}
                </div>
              </div>
            </Col>
            <Col span={12}>
              {" "}
              <div className="text-md font-medium text-gray-900 p-3">
                Type{" "}
                <div className="text-gray-400">
                  {" "}
                  {_projectReducer.project.category}{" "}
                </div>
              </div>
            </Col>
          </Row>
          <Row gutter={[32, 24]}>
            <Col span={24}>
              {" "}
              <div className="text-md font-medium text-gray-900 p-3">
                Decription{" "}
                <div className="text-gray-400">
                  {" "}
                  {_projectReducer.project.category}
                </div>{" "}
              </div>
            </Col>
          </Row>
          <Row gutter={[32, 24]}>
            <Col span={12}>
              {" "}
              <div className="text-md font-medium text-gray-900 p-3">
                Due Date{" "}
                <div className="text-gray-400">
                  {" "}
                  {getFormatDate(_projectReducer.project.dueDate)}
                  <div />{" "}
                </div>
              </div>
            </Col>
            <Col span={12}>
              {" "}
              <div className="text-md font-medium text-gray-900 p-3">
                Owner{" "}
                <div className="text-gray-400">
                  {" "}
                  {_projectReducer.project.ownerID}
                  {_userReducer.userbyId.firstName}
                </div>{" "}
              </div>
            </Col>
          </Row>
          <Row gutter={[32, 24]}>
            <Col span={12}>
              {" "}
              <div className="text-md font-medium text-gray-900 p-3">
                Status{" "}
                <div className="text-gray-400">
                  {" "}
                  {_projectReducer.project.status}
                  <div />{" "}
                </div>
              </div>
            </Col>
          </Row>

          <Row gutter={[32, 24]}>
            <div className="text-md font-medium text-gray-900 p-5">
              <h6 class="text-md font-bold dark:text-white">Task Breakdown</h6>
            </div>
            <div className="float-right w-full">
              <Button
                className="float-right bg-lime-600"
                type="primary"
                onClick={showModal}
              >
                Add Tasks
              </Button>
            </div>
          </Row>
          <Row gutter={[32, 24]}>
            <Col span={24}>
              {" "}
              <div className="text-md font-medium text-gray-900 p-3">
                <Table
                  dataSource={_taskReducer.taksByProject}
                  columns={columns}
                />
                ;{" "}
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Modal
        footer={null}
        title="Create Task"
        width={1000}
        open={isModalOpen}
        onOk={handleFormSubmit()}
        onCancel={handleCancel}
      >
        <Form
          name="form"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 800 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Row gutter={[32, 24]}>
            <Col span={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input Document From Date !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Importance"
                name="importance"
                rules={[
                  {
                    required: true,
                    message: "Please input Document To Date !",
                  },
                ]}
              >
                <Select defaultValue="Public" style={{ width: "100%" }}>
                  <Option value="Public">TopUrgent</Option>
                  <Option value="Domain">Urgent</Option>
                  <Option value="Confidential">Normal</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[32, 24]}>
            <Col span={12}>
              <Form.Item
                label="Due Date"
                name="dueDate"
                rules={[
                  {
                    required: true,
                    message: "Please input Document From Date !",
                  },
                ]}
              >
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="HandleBy"
                name="handleByID"
                rules={[
                  {
                    required: true,
                    message: "Please input Document To Date !",
                  },
                ]}
              >
                <Select defaultValue="Public" style={{ width: "50%" }}>
                  {_userReducer.users.map((option) => (
                    <Option key={option.id} value={option.id}>
                      {option.firstName}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[32, 24]}>
            <Col span={12}>
              <Form.Item
                label="Status"
                name="status"
                rules={[
                  {
                    required: true,
                    message: "Please input Document To Date !",
                  },
                ]}
              >
                <Select defaultValue="Public" style={{ width: "100%" }}>
                  <Option value="Public">ToDo</Option>
                  <Option value="Domain">In-Progress</Option>
                  <Option value="Confidential">Completed</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  { required: true, message: "Please input Document Intro!" },
                ]}
              >
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ background: "#1677ff" }}
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Detail;
