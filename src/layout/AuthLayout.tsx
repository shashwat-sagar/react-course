import { Avatar, Button, Layout, Menu } from "antd";
const { Sider, Header, Content } = Layout;
import { useState } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate } from "react-router-dom";

const menuItems = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: <Link to="/auth/dashboard">Dashboard</Link>,
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: <Link to="/auth/home">Home</Link>,
  },
  {
    key: "3",
    icon: <UploadOutlined />,
    label: <Link to="/auth/settings">Settings</Link>,
  },
];

const AuthLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  return (
    <Layout className="min-h-screen!">
      <Sider width={240} breakpoint="lg" collapsible collapsed={collapsed} onCollapse={()=> setCollapsed(!collapsed)}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuItems}
          
          className="p-4!"
        />
      </Sider>

      <Layout>
        <Header className="h-24! ">
        <div className=" flex flex-row items-center justify-between p-4">
            <div className="hidden md:block text-white font-bold tracking-widest text-xl">Student ERP</div>

            <div className="flex items-center gap-4 justify-between font-semibold text-white" onClick={()=>{ navigate("/auth/profile")}}>
                Naman Sharma
                  <Avatar className="bg-white/50! hidden! md:block!" size={34} icon={<UserOutlined className="text-blue-950!" />} />
                  
            </div>
        </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
            <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;

{

}
