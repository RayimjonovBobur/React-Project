import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SafetyCertificateOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import Home from "./Home";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Category from "./Category";
import Porducts from "./Products";

const { Header, Sider, Content } = Layout;

class MenuEx extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Link to="/">
                <Menu.Item key="1" icon={<SafetyCertificateOutlined />}>
                  Home
                </Menu.Item>
              </Link>
              <Menu.Item key="2" icon={<SafetyCertificateOutlined />}>
                <Link to="/category">Categores</Link>
              </Menu.Item>

              <Menu.Item key="3" icon={<DatabaseOutlined />}>
                <Link to="/products">Products</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
                width: 0,
                marginLeft: 10,
                marginTop: -50,
                zIndex: 100,
                color: "#fff",
              }}
            >
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: this.toggle,
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 507,
              }}
            >
              <Route path="/" exact component={Home} />
              <Route path="/category" component={Category} />
              <Route path="/products" component={Porducts} />
            </Content>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default MenuEx;
