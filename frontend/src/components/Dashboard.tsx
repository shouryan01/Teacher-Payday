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
} from '@ant-design/icons';
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const logOutUser = () => {
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
      >
        <Menu theme="dark" defaultSelectedKeys={['graphs']} mode="inline">
          <Menu.Item key="graphs" icon={<PieChartOutlined />}>
            <Link to="graphs">Dashboard</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<DesktopOutlined />} title="Preferences">
            <Menu.Item key="2" icon={<DashboardOutlined />}>
              Something
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="history" icon={<HistoryOutlined />}>
            <Link to="history">History</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<ArrowRightOutlined />} onClick={logOutUser}>
            Log Out
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