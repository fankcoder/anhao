import React, { useState, useEffect } from 'react'
import { Button, Space, Form, Input, Layout } from 'antd';
import Navbar from '../Pages/Nav'
import '../App.css';
import axios from 'axios';
import {
    PhoneOutlined,
    MailOutlined,
    ShareAltOutlined
  } from '@ant-design/icons';
import { login, send_code, get_user_info } from './Api'
import { useNavigate } from "react-router-dom";


const { Header, Content, Footer, Sider } = Layout;

function Login() {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [anhao, setAnhao] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = async () => {
      login(phone, code, anhao).then(res => {
        if (res.code === 200) {
          localStorage.setItem('authToken', res.body.access);

          navigate("/");
        } else {
          alert(res.message)
        }
      })
    };

    const handleSendSMS =  async () => {
      send_code(phone).then(res => {
        console.log(res)
      })

    };

    const handleChangePhone = (event) => {
        const value = event.target.value;
        setPhone(value);
    };
    
    const handleChangeCode = (event) => {
        const value = event.target.value;
        setCode(value);
    };

    const handleChangeAnhao = (event) => {
        const value = event.target.value;
        setAnhao(value);
    };
  
    const styles = {
      container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
        color: '#160947',
      },
      loginContent:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
      },
      loginInput: {
        marginTop: 15,
      }
    };
  
    return (
      <Layout
        className="site-layout"
        >
        <Content style={styles.container}>
            <div>
                <h1>登录,</h1>
                <h1>或新建账户</h1>
                <span>若还没有创建账户，首次登录会自动新建一个账户</span>
            </div>
            <div style={styles.loginContent}>
                <h2>登录</h2>
                <Space.Compact style={styles.loginInput}>
                    <Input size="large" placeholder="手机号" prefix={<PhoneOutlined />}
                    value={phone} 
                    onChange={handleChangePhone}/>
                    <Button type="primary" onClick={handleSendSMS}>发送验证码</Button>
                </Space.Compact>
                <Input size="large" placeholder="验证码" prefix={<MailOutlined />} value={code} onChange={handleChangeCode} style={styles.loginInput}/>
                <Input size="large" placeholder="好友暗号(选填)" prefix={<ShareAltOutlined />}  value={anhao} onChange={handleChangeAnhao} style={styles.loginInput} />
                <Button block style={styles.loginInput} onClick={handleLogin}>登录</Button>
            </div>
        </Content>
    </Layout>
    );
  };


function AccountDetail() {
  const [userInfo, setUserInfo] = useState({
      "username": "未登录",
      "photo": require('../assets/avatar.png'),
      "extra": {
          "coin": 0,
          "gpt": 0
      },
      "invite": {
          "anhao": ""
      }
  });

  useEffect(() => {
      // 在组件加载时触发的逻辑
      console.log('组件加载完成');
      // 执行其他操作...
      get_user_info().then(res => {
        console.log(userInfo, res)
        const _user = {}
        _user["username"] = res.body.username
        _user["photo"] = require('../assets/avatar.png')
        _user["extra"] = {
          "coin": res.body.extra.coin,
          "gpt": res.body.extra.gpt
        }
        _user["invite"] = res.body.invite.anhao
        setUserInfo(_user)
      }
      )

      // 清理函数
      return () => {
        // 在组件卸载时触发的清理逻辑
        console.log('组件将卸载');
        // 执行其他清理操作...
      };
    }, []);

    return (
        <div style={{flex:1, flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
          <div>账户手机号：{userInfo.username}</div>
          <div>金币：{userInfo.extra.coin}</div>
          <div>提问次数：{userInfo.extra.gpt}</div>
          <div>好友暗号：{userInfo.invite.anhao}</div>
        </div>
    )
}

function Account() {
  const [data, setData] = useState('');
  
  useEffect(() => {
      console.log(data=='')
      // 在组件挂载时，从 localStorage 中检索数据
      const storedData = localStorage.getItem('authToken');
      if (storedData) {
        setData(storedData);
      }
  }, []);
  
  const handleSaveData = () => {
      // 在点击按钮时，将数据存储到 localStorage 中
      const inputData = '';
      localStorage.setItem('authToken', inputData);
      setData(inputData);
  };

  return (
    <Layout hasSider className='layout'>
      <Navbar />
      {data==''? <Login /> : <AccountDetail />}
    </Layout>
  )
}

export default Account