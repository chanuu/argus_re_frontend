import React, { useState } from "react";
import { Button, Table, InputNumber, Modal, Form, Select } from "antd";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDocuments, getDocumentById } from "../../redux";
import { useDispatch } from "react-redux";
import { updateCreatedRequirements } from "../../redux/Audit/AuditAction";

const { Option } = Select;

const AuditRequirements = ({onUpdateCreatedRequirements}) => {
  const [addedRows, setAddedRows] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentDocId, setCurrentDocId] = useState("");
  const [createdRequirements, setCreatedRequirements] = useState([]);
  const [currentStatus, setCurrentStatus] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDocuments());
  }, []);

  useEffect(() => {
    dispatch(getDocumentById(currentDocId));
  }, [currentDocId]);

  const handleModalOpen = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
  };

  const onFinishFailed = (errorInfo) => {
  };

  const handleSave = () => {
    const newRow = {
      column1: _documentReducer.document?.code,
      column2: _documentReducer.document?.name,
      column3: _documentReducer.document?.status,
      column4: _documentReducer.document?.validPeriod
    }
    setAddedRows([...addedRows, newRow]);
    const updatedRequirements = [...createdRequirements, {
      documentId: currentDocId,
      status: currentStatus
    }];
    setCreatedRequirements(updatedRequirements);
    onUpdateCreatedRequirements(updatedRequirements);
    handleModalClose();
  };

  const _documentReducer = useSelector((state) => state.documents);

  const columns = [
    {
      title: "Code",
      dataIndex: "column1",
      render: (_, record, index) => (
        <InputNumber
          value={record.column1}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "column2",
      render: (_, record, index) => (
        <InputNumber
          value={record.column2}
        />
      ),
    },
    {
      title: "Status",
      dataIndex: "column3",
      render: (_, record, index) => (
        <InputNumber
          value={record.column3}
        />
      ),
    },
    {
      title: "Valid Till",
      dataIndex: "column4",
      render: (_, record, index) => (
        <InputNumber
          value={record.column4}
        />
      ),
    },
  ];

  return (
    <div>
      <Button onClick={handleModalOpen}>Add Audit Requirements</Button>
      <Table
        dataSource={addedRows}
        columns={columns}
        pagination={false}
        rowKey={(record, index) => index}
      />
      <Modal
        title="Add Audit Requirements"
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={[
          <Button key="cancel" onClick={handleModalClose}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
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
            label="Document Name"
            name="documentId"
            rules={[{ required: true }]}
          >
            <Select
              defaultValue="Select Type"
              style={{ width: "50%" }}
              onChange={(value) => {
                const selectedDocument = _documentReducer.documents.find(
                  (document) => document.name === value
                );
                if (selectedDocument) {
                  setCurrentDocId(selectedDocument.id);
                } else {
                  setCurrentDocId(""); 
                }
              }}
            >
              {_documentReducer.documents.map((document) => (
                <Option key={document.id} value={document.name}>
                  {document.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="status" name="status" rules={[{ required: true }]}>
            <Select onChange={(value) => {
              setCurrentStatus(parseInt(value, 10))
            }}>
              <Option value="1">Optional</Option>
              <Option value="0">Compulsory</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AuditRequirements;
