import React, { useState } from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Table, Space, Typography, Layout } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MailOutlined,
  PrinterOutlined,
} from "@ant-design/icons";

const columns = [
  {
    title: "CUSTOMER NAMEA",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "JOB NUMBER",
    dataIndex: "job",
    key: "job",
  },
  {
    title: "MOBILE NUMBER",
    dataIndex: "mobile",
    key: "mobile",
  },
  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
    render: (status) => {
      let color = "#3BB900";
      if (status === "Completed") {
        console.log("completed " + status);
        color = "#3BB900";
      } else if (status === "Processing") {
        console.log("processing " + status);
        color = "#FFA319";
      } else {
        console.log("cancel " + status);
        color = "#FF1943";
      }

      return (
        <Typography style={{ color: color }} key={status}>
          {status}
        </Typography>
      );
    },
  },
  {
    title: "ACTIONS",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <EditOutlined width={20} height={20} style={{ color: "#F87060" }} />
        <EyeOutlined width={20} height={20} style={{ color: "#F87060" }} />
        <DeleteOutlined width={20} height={20} style={{ color: "#F87060" }} />
        <MailOutlined width={20} height={20} style={{ color: "#F87060" }} />
        <PrinterOutlined
          width="20em"
          height={20}
          style={{ color: "#F87060" }}
        />
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "Rida Talbi",
    date: "02/02/2022;17:29 PM",
    job: "ABC007",
    mobile: "0987654321",
    status: "Completed",
  },
  {
    key: "2",
    name: "Rida Talbi",
    date: "02/02/2022;17:29 PM",
    job: "ABC007",
    mobile: "0987654321",
    status: "Completed",
  },
  {
    key: "3",
    name: "Rida Talbi",
    date: "02/02/2022;17:29 PM",
    job: "ABC007",
    mobile: "0987654321",
    status: "Cancel",
  },
  {
    key: "4",
    name: "Rida Talbi",
    date: "02/02/2022;17:29 PM",
    job: "ABC007",
    mobile: "0987654321",
    status: "Processing",
  },
  {
    key: "5",
    name: "Rida Talbi",
    date: "02/02/2022;17:29 PM",
    job: "ABC007",
    mobile: "0987654321",
    status: "Completed",
  },
  {
    key: "6",
    name: "Rida Talbi",
    date: "02/02/2022;17:29 PM",
    job: "ABC007",
    mobile: "0987654321",
    status: "Completed",
  },
  {
    key: "7",
    name: "Rida Talbi",
    date: "02/02/2022;17:29 PM",
    job: "ABC007",
    mobile: "0987654321",
    status: "Completed",
  },
  {
    key: "8",
    name: "Rida Talbi",
    date: "02/02/2022;17:29 PM",
    job: "ABC007",
    mobile: "0987654321",
    status: "Processing",
  },
  {
    key: "9",
    name: "Rida Talbi",
    date: "02/02/2022;17:29 PM",
    job: "ABC007",
    mobile: "0987654321",
    status: "Completed",
  },
  {
    key: "10",
    name: "Rida Talbi",
    date: "02/02/2022;17:29 PM",
    job: "ABC007",
    mobile: "0987654321",
    status: "Completed",
  },
];

const CustomerTable = () => {
  const [isSelectedRow, setIsSelectedrow] = useState(false);

  const rowSelection = {
    isSelectedRow,
    onChange: () => setIsSelectedrow(isSelectedRow),
  };

  return (
    <Layout
      style={{
        boxShadow:
          "0px 9px 16px rgba(159, 162, 191, 0.18), 9px 0px 16px rgba(159, 162, 191, 0.18)",
      }}
    >
      <Table
        columns={columns}
        rowSelection={rowSelection}
        pagination={{ position: ["bottomCenter"] }}
        dataSource={data}
      />
    </Layout>
  );
};

export default CustomerTable;
