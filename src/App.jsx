import React, { Component } from 'react';
import './App.css';
import { Button, Card, Layout, Input, Menu  } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from "react-router-dom";

import Navbar from './Pages/Nav'
import { Carousel } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;

function Home() {
  return(
    <Layout
    className="site-layout"
    >
      <Content className='home'>
        <div className="logo">智能助手小智</div>
        <div style={{marginBottom:20}}>
          <Link to="/download">下载移动端-智能助手小智App</Link>
          <br />
          <span>应用名称: 智能助手小智</span>
          <br />
          <br />
          <span>应用详细信息:</span>
          <br />
          <span>
          平台兼容性：该应用可在多个平台上运行，包括iOS和Android。使用React Native作为前端框架，可实现跨平台开发，提供一致的用户体验。 
          用户界面：应用提供直观友好的用户界面，包括文字聊天界面和设置界面。文字聊天界面通过输入框和助手进行交互，显示用户的问题和助手的回答。
          </span>
          <br />
          <br />
          <span>
          服务信息:
          <br />
          用户可以向智能助手应用提出各种问题。助手将利用ChatGPT接口进行信息检索，并返回相关的信息。
          助手可以帮助用户管理日程安排和会议。用户可以告诉助手他们的会议时间、地点和参与人员，助手将创建相应的日历事件，并提醒用户会议时间和相关事项。
          语言翻译：助手使用ChatGPT接口提供语言翻译功能，支持用户输入一种语言并将其翻译成另一种语言。用户可以请求助手帮助翻译文本或语音，以方便在跨语言交流中进行沟通和理解。
          </span>

        </div>
        <div className='divImg'>
          <img className='homeImg' src={require("./img/shili.png")} />
          <img className='homeImg' src={require("./img/chat.png")} />
          <img className='homeImg' src={require("./img/settings.png")} />
          <img className='homeImg' src={require("./img/qiandao.png")} />
        </div>
      </Content>
          <div>
          <div className='bottom'>
              <p>Copyright © 2023- CaiQingTu. All Rights Reserved. 成都采青兔食品有限公司 版权所有</p>
              <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020287" target="_blank">京公网安备 11010802017518</a>
              <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2023002749号-1</a>
          </div>
          </div>
    </Layout>
  )
}

// 首页组件

function LayoutFunc() {
  return (
    <Layout hasSider className='layout'>
      <Navbar />
      <Home />
    </Layout>
  )
}

export default class App extends Component {
  render() {
    return (
      <LayoutFunc />
    )
  }
}