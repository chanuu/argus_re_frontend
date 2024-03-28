import React, { useState, useEffect, useRef } from 'react';
import {Col, Row,Table,Button, Modal, Form, Input,Typography,DatePicker,Select,InputNumber} from 'antd'
import { Header } from '../../components';

import { IconButton } from '../General/IconButton';
import { EyeIcon } from '../General/EyeIcon';
import { EditIcon } from '../General/EditIcon';
import { DeleteIcon } from '../General/DeleteIcon';
import { Tooltip} from '@nextui-org/react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { getDocumentById,fetchExternalProviders } from '../../redux';

const Detail = () => {

   const [isModalOpen, setIsModalOpen] = useState(false);
    //format date using moment Js and render it in Anttable  
    const getFormatDate = (date)=>{

      let _date = moment(new Date(date));
      date = _date.format("YYYY-MM-DD")
      return date;
     }
  
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
      console.log('Failed:', errorInfo);
    };

    const onFinish = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    const [form] = Form.useForm();

    const handleFormSubmit = () => {
		form.validateFields()
			.then((values) => {
				console.log("clicked");
			})
			.catch((errorInfo) => {});
	};

  

  const dispatch = useDispatch();

  let { id } = useParams();

 
  useEffect(() => {
    
    dispatch(getDocumentById(id));
   

  }, []);
  const _documentReducer = useSelector((state) => state.documents);
 
  const columns = [
    
   {
     title: 'FromDate',
     dataIndex: 'fromDate',
     key: 'fromDate',
     render: ((date) => getFormatDate(date)) ,
   },
   {
      title: 'ExpireDate',
      dataIndex: 'expireDate',
      key: 'expireDate',
      render: ((date) => getFormatDate(date)) ,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
   
   
   {
     title: 'Action',
     dataIndex: 'action',
     key: 'action',
     width:100,        onCell: (record, rowIndex) => {
       return {
           onClick: (ev) => {
             console.log("");
           },
       };
   },
     render: (_, record) =>
       useSelector.length >= 1 ? (
         <Row justify="center" align="center">
           <Col css={{ d: 'flex' }}>
             <Tooltip content="Details">
               <IconButton onClick={() => {console.log("")}}>
                 <EyeIcon size={20} fill="#979797" />
               </IconButton>
             </Tooltip>
           </Col>
           <Col css={{ d: 'flex' }}>
             <Tooltip content="Edit Document">
               <IconButton onClick={() => console.log("click")}>
                 <EditIcon size={20} fill="#979797" />
               </IconButton>
             </Tooltip>
           </Col>
           <Col css={{ d: 'flex' }}>
             <Tooltip
               content="Delete Document"
               color="error"
              
             >
               <IconButton >
                 <DeleteIcon size={20} fill="#FF0080" />
               </IconButton>
             </Tooltip>
           </Col>
         </Row>
       ) : null,
   },
 ];

  return <div className='bg-white rounded-3xl'>
     <div className=" m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
     <h5 class="text-xl font-bold dark:text-white">Document Detail</h5>
        <div className="ml-auto m-5">
       
         <Row gutter={[32, 24]}>
             <Col span={12} > <div className='text-md font-medium text-gray-900 p-3'>Doucment Name  <div className='text-gray-400'> {_documentReducer.document.name}</div></div></Col>
             <Col span={12} > <div className='text-md font-medium text-gray-900 p-3'>Type <div className='text-gray-400'> {_documentReducer.document.type} </div></div></Col>
             
         </Row>
         <Row gutter={[32, 24]}>
             <Col span={24} > <div className='text-md font-medium text-gray-900 p-3'>Decription  <div className='text-gray-400'> {_documentReducer.document.introduction}</div> </div></Col>
          </Row>
          <Row gutter={[32, 24]}>
             <Col span={12} > <div className='text-md font-medium text-gray-900 p-3'>Issue Date <div className='text-gray-400'> {_documentReducer.document.issueDate}<div/> </div></div></Col>
             <Col span={12} > <div className='text-md font-medium text-gray-900 p-3'>AlertBefore <div className='text-gray-400'> {_documentReducer.document.alertBefore}</div> </div></Col>
          </Row>
          <Row gutter={[32, 24]}>
             <Col span={12} > <div className='text-md font-medium text-gray-900 p-3'>validPeriod <div className='text-gray-400'> {_documentReducer.document.validPeriod}</div> </div></Col>
             <Col span={12} > <div className='text-md font-medium text-gray-900 p-3'>Status  
             <div className='text-gray-400'> <span class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 p-3">{_documentReducer.document.status}</span></div> </div></Col>
          </Row>

          <Row gutter={[32, 24]}>
          <div className='text-md font-medium text-gray-900 p-5'>
          <h6 class="text-md font-bold dark:text-white">Document Renew Detail</h6>
          </div>
          <div className='float-right w-full'><Button  className='float-right bg-lime-600' type="primary" onClick={showModal}>
             Renew Document
        </Button></div>
          
          </Row>
          <Row gutter={[32, 24]}>
             <Col span={24} > <div className='text-md font-medium text-gray-900 p-3'><Table dataSource={_documentReducer.document.documentRenewal} columns={columns} />; </div></Col>
             
          </Row>
          
        </div>
       
      </div>
<Modal footer={null} title="Renew Document" open={isModalOpen} onOk={handleFormSubmit()}  onCancel={handleCancel}>
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

   <Form.Item
      label="From Date"
      name="fromDate"
      rules={[{ required: true, message: 'Please input Document From Date !' }]}
    >
     <DatePicker style={{ width: '50%' }} />
    </Form.Item>

    <Form.Item
      label="To Date"
      name="expireDate"
      rules={[{ required: true, message: 'Please input Document To Date !' }]}
    >
     <DatePicker style={{ width: '50%' }} />
    </Form.Item>

    <Form.Item
      label="Valid Period(in Month)"
      name="validPeriod"
      rules={[{ required: true, message: 'Please input Document Valid Period !' }]}
    >
     <InputNumber min={1} max={365} defaultValue={12}  style={{ width: '50%' }} />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }} >
      <Button type="primary"  htmlType="submit" style={{background:'#1677ff'}}>
        Create
      </Button>
    </Form.Item>
  </Form>
</Modal>
  </div>;
  
};

export default Detail;