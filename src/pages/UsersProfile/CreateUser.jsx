import React from 'react';
import { Form, Input, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../redux';
import Button from '@mui/material/Button';

import { Header } from '../../components';
import { alignProperty } from '@mui/material/styles/cssUtils';

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    handleCreateUser(values);
  };

  const handleCreateUser = (values) => {
    values.isExpired = false;

    values.tenantId = 2;

    dispatch(createUser(values));
    navigate('/documents');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Create User" />
      <div>
        <Form
          layout="vertical"
          wrapperCol={{ span: 20 }}
          style={{ display: 'inline-block', width: 'calc(50% - 10%)' }}
        >
          <Form.Item labelCol={{ span: 20 }} name="name" label="First Name">
            <Input placeholder="Type your first name" />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
          wrapperCol={{ span: 20 }}
          style={{ display: 'inline-block', width: 'calc(50% - 10%)' }}
        >
          <Form.Item labelCol={{ span: 20 }} name="name" label="Last Name">
            <Input placeholder="Type your last name" />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
          wrapperCol={{ span: 20 }}
          style={{ display: 'inline-block', width: 'calc(50% - 10%)' }}
        >
          <Form.Item
            labelCol={{ span: 20 }}
            name="email"
            label="E-Mail Address"
          >
            <Input placeholder="Type your email address" />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
          wrapperCol={{ span: 20 }}
          style={{ display: 'inline-block', width: 'calc(50% - 10%)' }}
        >
          <Form.Item labelCol={{ span: 20 }} name="username" label="User Name">
            <Input placeholder="Type your username name" />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
          wrapperCol={{ span: 20 }}
          style={{ display: 'inline-block', width: 'calc(50% - 10%)' }}
        >
          <Form.Item labelCol={{ span: 20 }} name="password" label="Password">
            <Input.Password placeholder="Type your password" />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
          wrapperCol={{ span: 20 }}
          style={{ display: 'inline-block', width: 'calc(50% - 10%)' }}
        >
          <Form.Item
            labelCol={{ span: 20 }}
            name="password"
            label="Confirm Password"
          >
            <Input.Password placeholder="Type your confirm password" />
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
          wrapperCol={{ span: 20 }}
          style={{ display: 'inline-block', width: 'calc(50% - 10%)' }}
        >
          <Form.Item
            labelCol={{ span: 20 }}
            name="phonenumber"
            label="Mobile Number"
          >
            <Input placeholder="Type your mobile number" />
          </Form.Item>
        </Form>

        <Form>
          <Button variant="contained">Create User</Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateUser;
