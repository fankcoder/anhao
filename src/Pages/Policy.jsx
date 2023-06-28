import React, { Component } from 'react';
import './Policy.css'

class UserPolicy extends Component {
  render() {
    return (
      <div style={styles.container}>
        {/* 头部 */}
        <div style={styles.header}>
            <div style={styles.editeInfo}>
                <span style={styles.titleName}>用户协议</span>
            </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={styles.body} className='body'>
            <span style={styles.subtitle}>一、服务概述</span>
            <span style={styles.content}>
            智能助手App是一款为用户提供智能化辅助服务的应用程序。它可以回答用户的问题、提供相关知识、提供工作和健康建议等。请注意，智能助手App仅提供信息和建议，不应被视为专业医疗、法律或任何其他领域的替代品。
            </span>
            
            <span style={styles.subtitle}>二、用户责任</span>
            <span style={styles.content}>
            注册要求：使用智能助手App需要注册一个用户账户。您必须提供准确、完整和最新的个人信息，并确保您的账户信息保持安全和保密。您对您的账户和密码负有保管责任，并对在您的账户下发生的所有活动负有责任。
            </span>
            <span  style={styles.content}>
            合法使用：您同意在使用智能助手App时遵守适用的法律法规和本协议的约定，不得利用本应用从事任何非法、违法、欺诈、虚假或侵权活动。
            </span>
            <span  style={styles.content}>
            保护个人隐私：我们非常重视用户的个人隐私和数据安全。请仔细阅读我们的隐私政策，了解我们如何收集、使用和保护您的个人信息。
            </span>
            
            <span style={styles.subtitle}>三、知识产权</span>
            <span style={styles.content}>
            智能助手App及其相关内容（包括但不限于文本、图像、标识、图标、设计、界面等）是受知识产权法律保护的。未经我们书面许可，您不得以任何方式复制、修改、传播、出售、转让或使用本应用的任何部分或全部内容。
            </span>
            
            <span style={styles.subtitle}>四、免责声明</span>
            <span style={styles.content}>
            信息准确性：尽管我们努力确保智能助手App提供的信息准确、完整和及时，但我们不对信息的准确性、完整性和时效性作任何明示或暗示的保证。用户在使用本应用提供的信息时应自行判断和承担风险。
            </span>
            <span style={styles.content}>
            第三方内容：智能助手App可能包含来自第三方的内容、链接或服务。我们对这些第三方内容的准确性、合法性、安全性不承担任何责任，并不对其进行背书或支持。
            </span>
            <span style={styles.content}>
            服务中断：我们将尽力确保智能助手App的正常运行和提供服务，但由于技术、网络、系统维护等原因，服务可能会中断或受到限制。对于由此导致的任何损失或不便，我们不承担任何责任。
            </span>
            <span style={styles.subtitle}>五、终止协议</span>
            <span style={styles.content}>
            我们保留随时终止或暂停您使用智能助手App的权利，无需提前通知或承担任何责任。您可以随时停止使用本应用并请求删除您的账户和个人信息。
            </span>
            <span style={styles.subtitle}>六、其他条款</span>
            <span style={styles.content}>
            本用户协议受中华人民共和国法律管辖。如本协议的任何条款被视为无效或不可执行，该条款将被视为可分割，不影响其他条款的有效性和可执行性。
            如有任何问题或疑问，请联系我们的团队邮箱: ai@caiqingtu.ntesmall.com。
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FCFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#36B8B8',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    height: 30,
  },
  titleName: {
    color: '#fff',
    fontWeight: 'bold'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '80%'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  content: {
    fontSize: 16,
  }
}

export default UserPolicy;