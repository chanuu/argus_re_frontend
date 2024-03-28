import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteUser, fetchUsers } from '../../redux';
import Button from '@mui/material/Button';

import { Table, Popconfirm } from 'antd';
import { IconButton } from '../General/IconButton';
import { EyeIcon } from '../General/EyeIcon';
import { EditIcon } from '../General/EditIcon';
import { DeleteIcon } from '../General/DeleteIcon';
import { Tooltip, Col, Row } from '@nextui-org/react';

import { Header } from '../../components';

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const DeleteUser = (id) => {
    console.log('Excuted!');
    dispatch(deleteUser(id));
  };
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'E-Mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) =>
        useSelector.length >= 1 ? (
          <Row justify="center" align="center">
            <Col css={{ d: 'flex' }}>
              <Tooltip content="Details">
                <IconButton onClick={() => console.log()}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: 'flex' }}>
              <Tooltip content="Edit user">
                <IconButton onClick={() => console.log()}>
                  <EditIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: 'flex' }}>
              <Tooltip
                content="Delete user"
                color="error"
                onClick={() => DeleteUser(record.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        ) : null,
    },
  ];

  const _userReducer = useSelector((state) => state.users);

  return (
    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Tools" title="User" />
      <div className="ml-auto m-5">
        <Button
          variant="contained"
          onClick={() => {
            navigate('/user/createuser');
          }}
        >
          Create User
        </Button>
      </div>
      <Table dataSource={_userReducer.users} columns={columns} />;
    </div>
  );
};

export default User;
