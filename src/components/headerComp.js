import {
  DownOutlined,
  FileTextOutlined,
  GlobalOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Button, Image, Typography } from "antd";

const HeaderCom = () => {
  return (
    <Layout
      style={{
        flexDirection: "row",
        background: "white",
        boxShadow: "0 4 8 rgba(163, 171, 185, 0.24)",
        height: 92,
        alignItems: "center",
      }}
    >
      <Layout
        style={{
          flexDirection: "row",
          background: "white",
          flex: 7,
          alignItems: "center",
        }}
      >
        <MenuFoldOutlined
          width={17}
          style={{ marginLeft: 44, marginRight: 10 }}
        />
        <Typography style={{ fontSize: 24, fontWeight: 900 }}>
          arivaa
        </Typography>
      </Layout>
      <Button
        type="primary"
        shape="round"
        style={{ marginRight: 20 }}
        icon={<FileTextOutlined />}
        size="large"
      >
        DOCUMENTATION
      </Button>

      <Layout
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          height: 44,
          borderRadius: 10,
          width: "18px",
          marginRight: 20,
          background: "#FFF2F1",
        }}
      >
        <GlobalOutlined style={{ marginRight: 10 }} />
        <Typography style={{ fontSize: 16 }}>English</Typography>
        <DownOutlined style={{ marginLeft: 10 }} />
      </Layout>

      <Image
        width={52}
        height={52}
        style={{
          borderRadius: 100,
          border: 3,
          marginRight: 10,
          borderStyle: "solid",
          borderColor: "#F87060",
          boxSizing: "border-box",
        }}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </Layout>
  );
};

export default HeaderCom;
