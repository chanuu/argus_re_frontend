import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAudit, fetchAudits, fetchBuyers } from "../../redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
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
import AuditRequirements from "./AuditRequirements";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const AuditCreate = () => {
  const [createdRequirements, setCreatedRequirements] = useState([]);

  const handleCreatedRequirementsUpdate = (newRequirements) => {
    setCreatedRequirements(newRequirements);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBuyers());
  }, []);

  useEffect(() => {
    dispatch(fetchAudits());
  }, []);

  const frequenxyOptions = [];
  for (let i = 1; i <= 12; i++) {
    frequenxyOptions.push(
      <Option key={i} value={i}>
        {i}
      </Option>
    );
  }

  const onFinish = (values) => {
    handleCreateDocument(values);
  };

  const _externalProviderReducer = useSelector(
    (state) => state.externalProviders
  );
  const _documentReducer = useSelector((state) => state.documents);
  const _buyerReducer = useSelector((state) => state.buyers);
  const _auditReducer = useSelector((state) => state.audits);

  const handleCreateDocument = (values) => {
    values.isExpired = false;
    values.status = 0;
    values.tenantId = 2;

    dispatch(createAudit({
      buyerId: values.buyerId,
      name: values.name,
      frequency: values.frequency,
      auditRequirements: createdRequirements
    }));
    navigate("/audits");
  };

  const onFinishFailed = (errorInfo) => {
  };

  const showSucessMessage = () => {
    if (_documentReducer.createStatus == true) {
    }
  };

  return (
    <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <Title level={3}>Create Audit</Title>
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
              label="Name"
              name="name"
              rules={[{ required: true, message: "Name" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Customer"
              name="buyerId"
              rules={[{ required: true, message: "Customer" }]}
            >
              <Select defaultValue="Select Customer" style={{ width: "50%" }}>
                {_buyerReducer.buyers.map((buyer) => (
                  <Option key={buyer.id} value={buyer.id}>
                    {buyer.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Frequency"
              name="frequency"
              rules={[{ required: true }]}
            >
              <Select defaultValue="Select Month" style={{ width: "50%" }}>{frequenxyOptions}</Select>
            </Form.Item>
            <AuditRequirements onUpdateCreatedRequirements={handleCreatedRequirementsUpdate}/>
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

export default AuditCreate;
