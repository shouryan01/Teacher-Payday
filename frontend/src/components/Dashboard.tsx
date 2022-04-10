import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

// Import Ant Components and Icons
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  DashboardOutlined,
  HistoryOutlined,
  ArrowRightOutlined,
  RadarChartOutlined
} from '@ant-design/icons';
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const logOutUser = () => {
    localStorage.clear();
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
      >
        <Menu theme="dark" defaultSelectedKeys={['graphs']} mode="inline">
          <Menu.Item key="stocks" icon={<PieChartOutlined />}>
            <Link to="stocks">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="Trade" icon={<DashboardOutlined />}>
            <Link to="trade">Trade</Link>
          </Menu.Item>
          {JSON.parse(JSON.stringify(localStorage.getItem('type') as string)) == 'investor' ? <Menu.Item key="profiles" icon={<RadarChartOutlined />}>
            <Link to="graphs">Profiles</Link>
          </Menu.Item> : <div></div>}
          
          <Menu.Item key="6" icon={<ArrowRightOutlined />} onClick={logOutUser}>
          <Link onClick={logOutUser} to="/welcome">Log Out</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '25px 35px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;