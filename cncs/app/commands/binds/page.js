"use client";
import { useState } from 'react';
import Head from 'next/head';
import styles from './BindsPage.module.css';

export default function CS2BindsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // 绑定命令数据 (根据totalCS2.com整理)
  const bindCommands = [
    {
      command: '武器一键购买快捷键绑定',
      example: 'bind "F2" "buy ak47; buy m4a1_silencer; buy smokegrenade; buy molotov; buy incgrenade; buy flashbang; buy hegrenade; buy vesthelm; buy vest; buy defuser;"',
      details: '快速购买武器的绑定，可以组合多个购买命令。示例为按下F2后一键购买AK47/M4A1s+烟闪火雷+全甲+拆弹器'
    },
    {
      command: '准星颜色切换绑定',
      example: 'bind "h" "toggle cl_crosshaircolor 0 1 2 3 4 5"',
      details: '快速切换不同颜色的准星'
    },
    {
      command: '无线电命令绑定',
      example: 'bind "z" "radio1"',
      details: '快速发送无线电消息'
    },
    {
      command: '投掷物快速切换绑定',
      example: 'bind c "slot6";bind z "slot7"; bind x "slot8"; bind v "slot10"',
      details: '快速切换到特定的nade，而无需反复滚动或按数字4来到达您需要的手榴弹。此绑定使用ZXCV键来快速切换到手雷、闪光弹、烟雾弹和燃烧瓶'
    },
    {
      command: '地图大小切换',
      example: 'bind "alt" "toggle cl_radar_scale 1 0.62";',
      details: '按下alt快速切换地图大小'
    },
    {
      command: 'Net Graph Toggle',
      category: 'hud',
      description: '网络数据显示开关',
      example: 'bind "F3" "toggle net_graph 0 1"',
      details: '显示/隐藏网络性能数据'
    }
  ];


  // 过滤命令
  const filteredCommands = bindCommands.filter(cmd => {
    const matchesSearch = cmd.command.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         cmd.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || cmd.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>CS2 绑定命令大全 | Total CS2 Binds</title>
        <meta name="description" content="CS2 最全面的绑定命令指南，包含购买绑定、跳投绑定、准星切换等实用命令" />
      </Head>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>CS2 绑定命令大全</h1>
          <p className={styles.subtitle}>提升游戏体验的必备绑定命令</p>
        </header>

        {/* 命令列表 */}
        <div className={styles.commandsGrid}>
          {filteredCommands.length > 0 ? (
            filteredCommands.map((cmd, index) => (
              <div key={index} className={styles.commandCard}>
                <div className={styles.commandHeader}>
                  <h3 className={styles.commandName}>{cmd.command}</h3>
                </div>
                <p className={styles.commandDescription}>{cmd.description}</p>
                <div className={styles.commandExample}>
                  <h4>示例:</h4>
                  <code>{cmd.example}</code>
                </div>
                <div className={styles.commandDetails}>
                  <h4>说明:</h4>
                  <p>{cmd.details}</p>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>没有找到匹配的绑定命令</div>
          )}
        </div>

        {/* 绑定指南部分 */}
        <section className={styles.guideSection}>
          <h2 className={styles.sectionTitle}>如何使用这些绑定</h2>
          <div className={styles.guideSteps}>
            <div className={styles.step}>
              <h3>1. 打开控制台</h3>
              <p>在游戏设置中启用开发者控制台，然后按 <code>`</code> 键(通常在ESC下方)打开控制台</p>
            </div>
            <div className={styles.step}>
              <h3>2. 输入绑定命令</h3>
              <p>将示例中的命令复制到控制台中并按回车执行</p>
            </div>
            <div className={styles.step}>
              <h3>3. 创建执行文件</h3>
              <p>在 <code>Counter-Strike Global Offensive\game\CS2\cfg</code> 文件夹中创建 <code>autoexec.cfg</code> 并在文件内粘贴你的所有绑定命令</p>
            </div>
            <div className={styles.step}>
              <h3>4. 自动执行文件</h3>
              <p>steam界面右键CS2游戏-属性-已选启动选项-填入<code>-exec autoexec.cfg </code>。或者进入游戏后按`进入控制台，然后输入<code>exec autoexec.cfg </code>回车</p>
            </div>
          </div>
        </section>

        {/* 常见问题部分 */}
        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>常见问题</h2>
          <div className={styles.faqItem}>
            <h3>如何重置所有绑定？</h3>
            <p>在控制台中输入 <code>unbindall</code> 可以重置所有按键绑定。</p>
          </div>
          <div className={styles.faqItem}>
            <h3>绑定会保存在哪里？</h3>
            <p>绑定会保存在 <code>config.cfg</code> 文件中，建议使用 <code>autoexec.cfg</code> 来管理你的自定义绑定。</p>
          </div>
        </section>
      </div>
    </>
  );
}