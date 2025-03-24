import React, { useState } from "react";
import { Layout, Menu, Drawer, Button } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  BellOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const NavbarWithSidebar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  return (
    <Layout>
      {/* Top Navbar */}
      <Header className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo">KycHub</div>

          {/* Desktop Menu */}
          <Menu theme="dark" mode="horizontal" className="menu">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="products" icon={<AppstoreOutlined />}>
              Products
            </Menu.Item>
            <Menu.Item key="notification" icon={<BellOutlined />}>
              Notification
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
          </Menu>

          {/* Mobile Menu Button */}
          <Button
            className="menu-button"
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeDrawer}
          open={visible}
        >
          <Menu mode="vertical">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="products" icon={<AppstoreOutlined />}>
              Products
            </Menu.Item>
            <Menu.Item key="notification" icon={<BellOutlined />}>
              Notification
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>

      <style jsx>{`
        /* Navbar Styles */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: #001529;
          z-index: 1000;
          padding: 0;
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 20px;
        }

        .logo {
          color: white;
          font-size: 20px;
          font-weight: bold;
        }

        .menu {
          flex: 1;
          display: flex;
          justify-content: center;
          background: transparent;
        }

        .menu-button {
          display: none;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .menu {
            display: none;
          }
          .menu-button {
            display: block;
          }
        }

        body {
          padding-top: 55px; /* Prevent content from hiding behind navbar */
=        }
      `}</style>
    </Layout>
  );
};

export default NavbarWithSidebar;
