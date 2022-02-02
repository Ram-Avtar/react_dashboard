import { Layout, Typography } from "antd";
import HeaderCom from "./components/headerComp";
import SideBar from "./components/sideBar";
import CustomerTable from "./components/tableComp";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderCom />
      </header>
      <Layout style={{ flexDirection: "row" }}>
        <Layout style={{ flex: 2 }}>
          <SideBar />
        </Layout>

        <Layout style={{ flexDirection: "column", flex: 10, marginr: 20 }}>
          <Typography
            style={{
              fontSize: 24,
              fontWeight: 500,
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            Customer
          </Typography>
          <CustomerTable />
        </Layout>
      </Layout>
      <Layout></Layout>
    </div>
  );
}

export default App;
