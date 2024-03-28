import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProject, fetchExternalProviders, fetchUsers } from "../../redux";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Row,
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  DatePicker,
  Select,
  InputNumber,
} from "antd";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;
const CreateProject = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // form on finish
  const onFinish = (values) => {
    console.log("Success:", values);
    handleCreate(values);
  };

  useEffect(() => {
    dispatch(fetchExternalProviders());
    dispatch(fetchUsers());
  }, []);

  const _externalProviderReducer = useSelector(
    (state) => state.externalProviders
  );
  const _userReducer = useSelector((state) => state.users);

  //handle create events
  const handleCreate = (values) => {
    values.isExpired = false;
    values.status = "Active";
    values.tenantId = 2;

    dispatch(createProject(values));
    navigate("/projects");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <Title level={3}>Create Project</Title>
          <Form
            name="create"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 800 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Access Level"
              name="accessLevel"
              rules={[{ required: true, message: "Access Level" }]}
            >
              <Select
                defaultValue="Select AccessLevel"
                style={{ width: "50%" }}
              >
                <Option value="Public">Public</Option>
                <Option value="Domain">Domain</Option>
                <Option value="Confidential">Confidential</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Category"
              name="category"
              rules={[
                { required: true, message: "Please input Document Category" },
              ]}
            >
              <Select defaultValue="Select Category" style={{ width: "50%" }}>
                <Option value="Legal">Legal</Option>
                <Option value="HR">HR</Option>
                <Option value="IT">IT</Option>
                <Option value="GENERAL">GENERAL</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Name"
              name="projectName"
              rules={[
                { required: true, message: "Please input Document Name" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="HandleBy"
              name="ownerID"
              rules={[
                { required: true, message: "Please input Project Owner !" },
              ]}
            >
              <Select defaultValue="Select HandleBy" style={{ width: "50%" }}>
                {_userReducer.users.map((option) => (
                  <Option key={option.id} value={option.id}>
                    {option.firstName}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input Project Description!",
                },
              ]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="StartDate"
              name="startedDate"
              rules={[
                { required: true, message: "Please Select Start Date !" },
              ]}
            >
              <DatePicker style={{ width: "50%" }} />
            </Form.Item>
            <Form.Item
              label="DueDate"
              name="dueDate"
              rules={[{ required: true, message: "Please Select Due Date !" }]}
            >
              <DatePicker style={{ width: "50%" }} />
            </Form.Item>

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
        </Col>
      </Row>
    </div>
  );
};

export default CreateProject;
