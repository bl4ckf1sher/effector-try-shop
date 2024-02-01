import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";

const { Header } = Layout;

const AppHeader: React.FC = () => (
  <Header
    className="w-full mainMenu"
    style={{ display: "flex", alignItems: "center" }}
  >
    <div className="demo-logo" style={{ color: "white" }}>
      <Link to="/">MicroShop</Link>
    </div>
    <nav>
      <Menu
        theme="dark"
        mode="horizontal"
        items={[
          {
            key: 321,
            label: <Link to="/">Главная</Link>,
          },
          {
            key: 322,
            label: <Link to="/products">Товары</Link>,
          },
          {
            key: 323,
            label: <Link to="/cart">Корзина</Link>,
          },
        ]}
      />
    </nav>
  </Header>
);

export default AppHeader;
