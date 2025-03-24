import React from 'react'
import { Layout, Menu, Drawer, Button } from "antd";
import { FileTextOutlined  , SwapOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";


const { Header, Sider, Content } = Layout;


const Sidebar = () => {
  return (
    <div>
  <Sider className="sidebar" width={200} style={{height:"100vh"}}>
   
      <Menu theme="dark" mode="vertical">
        <Menu.Item key="productDetails" icon={<FileTextOutlined />} style={{backgroundColor:"transparent"}}>
          <Link to="/">Product Details</Link> 
        </Menu.Item>
        <Menu.Item key="compareProducts" icon={<SwapOutlined />} style={{backgroundColor:"transparent"}}>
          <Link to="/compare">Compare Products Page</Link> 
        </Menu.Item>
      </Menu>
     
    </Sider>
    </div>
  )
}

export default Sidebar
