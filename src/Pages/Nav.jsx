import React, { Component, useState } from 'react';
import {
    HomeFilled,
    CommentOutlined,
    StarFilled,
    UserOutlined,
    AndroidOutlined
  } from '@ant-design/icons';
import {  Menu, Layout  } from 'antd';
import './Nav.css'
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;


function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('首页', '1', <HomeFilled />),
    getItem('社区', '2', <CommentOutlined />),
    getItem('收藏', '3', <StarFilled />),
    getItem('账户', '4', <UserOutlined />),
    getItem('移动端APP下载', '5', <AndroidOutlined />),
  ]
  
  // 导航栏组件
function Navbar() {
  const [select, setSelect] = useState('1');
  const [current, setCurrent] = useState('1');

  const navigate = useNavigate();

  const onClick = (e) => {
    // console.log('click ', e.key);
    if (e.key === '1'){
      navigate("/");
    } else if (e.key === '2') {
      navigate("/community");
    } else if (e.key === '3') {
      navigate("/");
    } else if (e.key === '4') {
      navigate("/account");
    } else if (e.key === '5') {
      navigate("/download");
    }

  };

  return (
        <Sider className='Side' style={{
          backgroundColor: '#f6fafb',
          }}>
            <div className="logo">
              {/* <img src={logoUrl}/> */}
            </div>
            <Menu theme="light" defaultSelectedKeys={['1']} mode="vertical" items={items} 
              style={styles.navItem}
              onClick={onClick}
              selectedKeys={[current]}
            />
        </Sider>
      );
}

export default Navbar;

const styles = {
  container: {
    flex: 1,
  },
  navItem: {
    backgroundColor: '#f6fafb',
    color: '#005252',
  }
}