import React from 'react'
import '../App.css';
import Navbar from '../Pages/Nav'
import {  Layout  } from 'antd';


const { Content } = Layout;

function DownloadContent() {
    return(
        <Layout
        className="site-layout"
        >
            <Content style={styles.container}>
            <div>
                <h1>移动端APP</h1>
                <div>安卓下载地址：<a href='https://xijiayi.store/download/智能助手v0.51.apk'>智能助手v0.51.apk</a></div>
                <div>苹果app store：https://apps.apple.com/cn/app/%E6%99%BA%E8%83%BD%E5%B7%A5%E4%BD%9C%E5%8A%A9%E6%89%8B/id6450743438</div>
            </div>
            </Content>
        </Layout>
    )
}

export default function Download() {
  return (
    <Layout hasSider className='layout'>
      <Navbar />
      <DownloadContent />
    </Layout>
  )
}

const styles = {
    container: {
      flex: 1,
    },
    navItem: {
      backgroundColor: '#f6fafb',
      color: '#005252',
    }
}