import "./App.css";
import { Outlet } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Layout } from "antd";
import AppHeader from "./shared/components/AppHeader";
import AppFooter from "./shared/components/AppFooter";

const { Content } = Layout;

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#0c168a",
        borderRadius: 10,
        colorBgContainer: "white",
      },
    }}
  >
    <Layout className="layout">
      <AppHeader />
      <Content>
        <Outlet />
      </Content>
      <AppFooter />
    </Layout>
  </ConfigProvider>
);

export default App;
