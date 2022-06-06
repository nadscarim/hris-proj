import React, {useState} from 'react'
import { Layout, Menu, Card, Col, Row, Button } from 'antd'
import { Link, Switch, Route, Redirect } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons' 
import './employeeLayout.css'
import menuItems from './employee-side-navbar'
import route from './employee-route-side'

const EmployeeLayout = () => {
    const { Header, Sider, Content } = Layout

    const [collapsed, setCollapsed] = useState(true)
    const [keys, setKeys] = useState('dashboard')
      
    const toggle = () => {
        setCollapsed(!collapsed)
    }

    const onClicks = (e) => {
        // console.log(key)
        setKeys(e.key)
    }
    
    return (
        <>
            <Layout className='body'>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                {/* <div className="logo" /> */}<h1>WAZE</h1>
                {menuItems.items.map((item, key) => 
                    <Menu
                    key={key}
                    onClick={onClicks}
                    selectedKeys={[keys]}
                    theme="dark" 
                    mode="inline" 
                    defaultSelectedKeys={['dashboard']}
                    >
                        <Menu.Item key={item.key}>
                        {item.icon}
                        <span>{item.name}</span>
                        <Link to={item.link} />
                        </Menu.Item>
                    </Menu>
                )}
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        {collapsed ? <MenuUnfoldOutlined onClick={toggle}/> : <MenuFoldOutlined onClick={toggle}/>}
                    </Header>
                <Layout>
                <div className="site-card-wrapper">
                    <Row gutter={24}>
                    <Col span={24}>
                        <Card bordered={false}>
                            <Button type="primary">Time-In</Button>
                            <Button type="danger">Time-Out</Button>

                        </Card>
                    </Col>
                    </Row>
                </div>
                    <Content className='content'>
                        <Switch>
                            {route.map((route, idx) => (route.component ? (
                                <Route
                                    key={idx}
                                    name={route.name}
                                    path={route.path}
                                    route={route.exact}
                                    component={route.component}
                                />
                            ) : (null)))}
                            <Redirect from="/" to="/dashboard" />
                        </Switch>
                    </Content>
                </Layout>
                </Layout>
            </Layout>
        </>
    )
}

export default EmployeeLayout
