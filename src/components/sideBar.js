import React from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Menu, Layout } from "antd";
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
  FundOutlined,
  FileTextOutlined,
  ShoppingCartOutlined,
  StarOutlined,
  ExclamationCircleOutlined,
  UsergroupAddOutlined,
  CheckSquareOutlined,
  UserOutlined,
  MessageOutlined,
  PictureOutlined,
  PieChartOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import Sider from "antd/lib/layout/Sider";

const SideBar = () => {
  return (
    <Layout>
      <Sider>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
        >
          <Menu.Item key={1} icon={<AppstoreOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key={2} icon={<FundOutlined />}>
            Service Jobs
          </Menu.Item>
          <Menu.Item key={3} icon={<FileTextOutlined />}>
            Invoices
          </Menu.Item>
          <Menu.Item key={4} icon={<ShoppingCartOutlined />}>
            Customers
          </Menu.Item>
          <Menu.Item key={5} icon={<StarOutlined />}>
            Products
          </Menu.Item>
          <Menu.Item key={6} icon={<LinkOutlined />}>
            Offered Services
          </Menu.Item>
          <Menu.Item key={7} icon={<MailOutlined />}>
            Parts
          </Menu.Item>
          <Menu.Item key={8} icon={<ExclamationCircleOutlined />}>
            Enquiries
          </Menu.Item>
          <Menu.Item key={9} icon={<UsergroupAddOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key={10} icon={<CheckSquareOutlined />}>
            Permissions
          </Menu.Item>
          <Menu.Item key={11} icon={<UserOutlined />}>
            Roles
          </Menu.Item>
          <Menu.Item key={12} icon={<MailOutlined />}>
            Email Templates
          </Menu.Item>
          <Menu.Item key={13} icon={<FileTextOutlined />}>
            PDF Templates
          </Menu.Item>
          <Menu.Item key={14} icon={<MessageOutlined />}>
            SMS Templates
          </Menu.Item>
          <Menu.Item key={15} icon={<PictureOutlined />}>
            Theming
          </Menu.Item>
          <Menu.Item key={16} icon={<WalletOutlined />}>
            Payment Gateways
          </Menu.Item>
          <Menu.Item key={17} icon={<CalendarOutlined />}>
            Backup
          </Menu.Item>
          <Menu.Item key={18} icon={<PieChartOutlined />}>
            Configurations
          </Menu.Item>
          <Menu.Item key={19} icon={<SettingOutlined />}>
            Setting
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default SideBar;
