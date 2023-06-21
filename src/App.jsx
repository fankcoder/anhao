import React, { Component } from 'react';
import './App.css';
import { Button, Card, Layout, Input, Menu  } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from "react-router-dom";

import logoUrl from './img/anhao1.png'
import Account from './Pages/Account'
import Navbar from './Pages/Nav'
import { get_all_prompts, userInfo } from './Pages/Api'

const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;


// 首页组件
class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      cardData: [
        { id: 1, title: '充当编剧', content: '我要你担任编剧。' },
        { id: 2, title: '充当小说家', content: '我想让你扮演一个小说家。' },
        { id: 3, title: '担任心理健康顾问', content: '我想让你担任心理健康顾问。' },
      ],
      textToCopy: '',
    }
  }

  componentDidMount() {
    console.log('app')
    get_all_prompts().then(res =>{
      if (res.code === 200){
        var _prompts = []
          res.body.items.forEach((item) => {
            const _dict = {}
            _dict['id'] = item.id
            _dict['title'] = item.title
            _dict['content'] = item.content
            _prompts.push(_dict)
          })
          this.setState({cardData: _prompts})
      }
    })
  }

  handleCopy = (param) => {
    if (param) {
      navigator.clipboard.writeText(param);
    }
  };

  handleLogin = async () => {
    console.log('history',this.props.history);
    // this.props.history.push('/account');
  };

  render() {
    return (
      <Layout
      className="site-layout"
      >
        <Content>
          <div className="home">
            <div className="register-login">
              <Button size="large" className="loginButton">
                <Link to="/account">注册/登录</Link>
              </Button>
            </div>
            <div className="logo">ChatGPT-智能助手提示词</div>
            <div className="search-box">
              <TextArea size="large" rows={4} placeholder="提示词搜索框" autoSize={{ minRows: 3, maxRows: 5 }}  maxLength={'80%'} />
            </div>
            <div className="category">
              {this.state.cardData.map((card) => (
                <Card className='cardItem' key={card.id} title={card.title}
                hoverable={true}
                extra={<Button icon={<CopyOutlined />} onClick={this.handleCopy.bind(this, card.content)}></Button>}
                >
                  <p>{card.content}</p>
                </Card>
              ))}
            </div>
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

    );
  }
};

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