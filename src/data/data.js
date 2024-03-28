import React from 'react';
import {
  AiOutlineAudit,
  AiOutlineDeleteRow,
  AiOutlineUser,
  AiOutlineUserSwitch,
  AiOutlineCodepen,
} from 'react-icons/ai';
import { HiOutlineDocumentText } from 'react-icons/hi';
import {
  MdOutlinePolicy,
  MdOutlineModelTraining,
  MdOutlineTask,
} from 'react-icons/md';
import { TbChecklist } from 'react-icons/tb';
import { FiUserPlus } from 'react-icons/fi';

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const ordersData = [
  {
    AuditType: 'External',
    Name: 'CAP Audit',
    ConductedBy: 'UCSC',
    Requency: 'Yearly',
    Status: 'Not Allocated',
    StatusBg: '#FB9678',
    ResponsiblePerson: 'Chanaka Chathuranga',
  },
  {
    AuditType: 'External',
    Name: 'CTPAT Audit',
    ConductedBy: 'UCSC',
    Requency: 'Yearly',
    Status: 'Audit Pass',
    StatusBg: '#8BE78B',
    ResponsiblePerson: 'Chanaka Chathuranga',
  },
  {
    AuditType: 'External',
    Name: 'Boiler License',
    ConductedBy: 'UCSC',
    Requency: 'Yearly',
    Status: 'Audit Pass',
    StatusBg: '#8BE78B',
    ResponsiblePerson: 'Chanaka Chathuranga',
  },
  {
    AuditType: 'External',
    Name: 'Fire license',
    ConductedBy: 'UCSC',
    Requency: 'Yearly',
    Status: 'Not Allocated',
    StatusBg: '#FB9678',
    ResponsiblePerson: 'Chanaka Chathuranga',
  },
  {
    AuditType: 'External',
    Name: 'Fire drill record',
    ConductedBy: 'Factory',
    Requency: 'Yearly',
    Status: 'Pending',
    StatusBg: '#FFA800',
    ResponsiblePerson: 'Chanaka Chathuranga',
  },
  {
    AuditType: 'External',
    Name: 'CSR Policy',
    ConductedBy: 'Factory',
    Requency: 'Yearly',
    Status: 'Not Allocated',
    StatusBg: '#FB9678',
    ResponsiblePerson: 'Chanaka Chathuranga',
  },
  {
    AuditType: 'External',
    Name: 'Boiler License',
    ConductedBy: 'UCSC',
    Requency: 'Yearly',
    Status: 'Audit Pass',
    StatusBg: '#8BE78B',
    ResponsiblePerson: 'Chanaka Chathuranga',
  },
  {
    AuditType: 'External',
    Name: 'Fire license',
    ConductedBy: 'UCSC',
    Requency: 'Yearly',
    Status: 'Pending',
    StatusBg: '#FFA800',
    ResponsiblePerson: 'Chanaka Chathuranga',
  },
];

export const ordersGrid = [
  {
    field: 'Name',
    headerText: 'Name',
    width: '100',
    editType: 'dropdownedit',
    textAlign: 'left',
  },
  {
    field: 'AuditType',
    headerText: 'Audit Type',
    width: '100',
    textAlign: 'Center',
  },
  {
    field: 'ConductedBy',
    headerText: 'Conducted By',
    width: '120',
    textAlign: 'Center',
  },
  {
    field: 'Requency',
    headerText: 'Requency',
    width: '100',
    textAlign: 'Center',
  },
  {
    headerText: 'Status',
    template: gridOrderStatus,
    field: 'Name',
    textAlign: 'Center',
    width: '100',
  },
  {
    field: 'ResponsiblePerson',
    headerText: 'Responsible',
    width: '140',
    textAlign: 'Center',
  },
  {
    field: 'Action',
    headerText: 'Action',
    width: '100',
    textAlign: 'Center',
  },
];

export const taskData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the auditor.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nuwan Prabath',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29001',
    Status: 'Testing',
    Summary: 'Analyze the new requirements gathered from the auditor.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nuwan Prabath',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29001',
    Status: 'Close',
    Summary: 'Analyze the new requirements gathered from the auditor.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nuwan Prabath',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 4',
    Title: 'Task - 29001',
    Status: 'InProgress',
    Summary: 'Analyze the new requirements gathered from the auditor.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nuwan Prabath',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 5',
    Title: 'Task - 29001',
    Status: 'InProgress',
    Summary: 'Analyze the new requirements gathered from the auditor.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nuwan Prabath',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 6',
    Title: 'Task - 29001',
    Status: 'Testing',
    Summary: 'Analyze the new requirements gathered from the auditor.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nuwan Prabath',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 7',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the auditor.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nuwan Prabath',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 8',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the auditor.',
    Type: 'Story',
    Priority: 'High',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nuwan Prabath',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
];

export const taskGrid = [
  { headerText: 'To Do', keyField: 'Open', allowToggle: true },

  { headerText: 'In Progress', keyField: 'InProgress', allowToggle: true },

  {
    headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false,
  },

  { headerText: 'Done', keyField: 'Close', allowToggle: true },
];

export const links = [
  {
    title: 'App',
    links: [
      {
        name: 'audit',
        icon: <AiOutlineAudit />,
      },
      {
        name: 'documents',
        icon: <HiOutlineDocumentText />,
      },
      {
        name: 'policy',
        icon: <MdOutlinePolicy />,
      },
      {
        name: 'projects',
        icon: <MdOutlineModelTraining />,
      },
    ],
  },

  {
    title: 'Tools',
    links: [
      {
        name: 'check list',
        icon: <TbChecklist />,
      },
      {
        name: 'task',
        icon: <MdOutlineTask />,
      },
      {
        name: 'risk assesment',
        icon: <AiOutlineDeleteRow />,
      },
    ],
  },
  {
    title: 'Settings',
    links: [
      {
        name: 'user',
        icon: <AiOutlineUser />,
      },
      {
        name: 'role',
        icon: <FiUserPlus />,
      },
      {
        name: 'permision',
        icon: <AiOutlineUserSwitch />,
      },
      {
        name: 'general',
        icon: <AiOutlineCodepen />,
      },
    ],
  },
];

export const documentsData = [
  {
    id: '4',
    FromDate: '2022/10/04',
    ExpireDate: '2023/10/04',
    Status: 'Not Allocated',
    StatusBg: '#FB9678',
  },
];

export const documentGrid = [
  {
    field: 'id',
    headerText: 'ID',
    width: '100',
    editType: 'dropdownedit',
    textAlign: 'left',
  },
  {
    field: 'FromDate',
    headerText: 'From Date',
    width: '100',
    textAlign: 'Center',
  },
  {
    field: 'ExpireDate',
    headerText: 'Expire Date',
    width: '120',
    textAlign: 'Center',
  },
  {
    headerText: 'Action',
    template: gridOrderStatus,
    field: 'Name',
    textAlign: 'Center',
    width: '100',
  },
];
