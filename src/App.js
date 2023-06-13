import React from 'react';
import './App.css';
import { Button,Card, Layout, Input, theme } from 'antd';
import {
  HomeFilled,
  CommentOutlined,
  StarFilled,
  SettingFilled
} from '@ant-design/icons';
import Register from './Register';
import Login from './Login';

const { Header, Content, Footer, Sider } = Layout;

const { TextArea } = Input;

// 导航栏组件
const Navbar = () => {
  return (
    <Sider className='Side' style={{backgroundColor: '#36B8B8'}}>
      <nav className="navbar">
        <ul className="nav-items">
          <li><HomeFilled /> <span>首页</span></li>
          <li><CommentOutlined /> <span>社区</span></li>
          <li><StarFilled /> <span>收藏</span></li>
          <li><SettingFilled /> <span>设置</span></li>
        </ul>
      </nav>
    </Sider>

  );
};

// 首页组件
const Home = () => {
  return (
    <Layout
    className="site-layout"
    style={{
      marginLeft: 200,
      backgroundColor: '#E9FEFE',
    }}
    >
      <Content>
        <div className="home">
          <div className="register-login">
            <Button size="large" className="loginButton" onClick={Login}>注册/登录</Button>
          </div>
          <div className="logo">ChatGPT提示词-智能助手</div>
          <div className="search-box">
            <TextArea size="large" rows={4} placeholder="提示词搜索框" autoSize={{ minRows: 3, maxRows: 5 }}  maxLength={'80%'} />
          </div>
          <div className="category">
            <Card
              title="报告总结"
              bordered={false}
              className="cardBox"
            >
              <p>你是 某个主题 的专家，请总结以下内容，并针对以下内容提出未来能进一步研究的方向 附上内容</p>
            </Card>
            <Card
              title="研究来源"
              bordered={false}
              className="cardBox"
            >
              <p>提供 数字 个有关于“某个主题”题目的研究来源。这些研究来源必须来自可靠和高质量的数据库和学术搜索引擎。</p>
            </Card>
            <Card
              title="提出反对观点"
              bordered={false}
              className="cardBox"
            >
              <p>你是 某个主题 的专家，请针对以下论述 附上论述，提出 数字 个反驳的论点，每个论点都要有佐证</p>
            </Card>
            <Card
              title="研究报告"
              bordered={false}
              className="cardBox"
            >
              <p>写出一篇有关 知识 的 数字 字研究报告，报告中需引述最新的研究，并引用专家观点</p>
            </Card>
            <Card
              title="解 bug"
              bordered={false}
              className="cardBox"
            >
              <p>你现在是一个 程式语言 专家，我有一段程式码，我预期这段程式码可以 做到某个功能，只是它通过不了 测试案例 这个测试案例。请帮我找出我哪里写错了，以及用正确的方式改写。附上程式码</p>
            </Card>
            <Card
              title="写 Regex"
              bordered={false}
              className="cardBox"
            >
              <p>你现在是一个 Regex 专家，请帮我写一个 Regex ，它能够把输入一个字串，把这个字串中的所有数字都取出来</p>
            </Card>
            <Card
              title="解释一个主题的背后原理"
              bordered={false}
              className="cardBox"
            >
              <p>以一位领域教育家的身分，说明概念是什么。同时提供数字个例子，来解释概念背后的原理。</p>
            </Card>
            <Card
              title="英语单字学习"
              bordered={false}
              className="cardBox"
            >
              <p>解释英文单字 英文单字，并且给我 数字 个常用句子。</p>
            </Card>
            <Card
              title="旅游计划"
              bordered={false}
              className="cardBox"
            >
              <p>生成一份 [数字] 天的 [地点] 旅游计划，交通工具是 [交通工具...]。要遵守以下规则：[填入规则]</p>
            </Card>

          </div>
        </div>
      </Content>
      <div>
      <bottom>
          <p>Copyright © 2023- CaiQingTu. All Rights Reserved. 成都采青兔食品有限公司 版权所有</p>
          <a href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802020287" target="_blank">京公网安备 11010802017518</a>
          <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2023002749号-1</a>
      </bottom>
      </div>
    </Layout>

  );
};

// App组件
const App = () => {
  return (
      <Layout hasSider className='layout'>
        <Navbar />
        <Home />
      </Layout>
  );
};

export default App;
