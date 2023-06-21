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
                <div>苹果app store：（努力审核中）</div>
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