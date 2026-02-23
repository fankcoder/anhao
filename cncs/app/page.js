export const metadata = {
  title: "CNCS.HOMES - 中国人自己的CS2玩家社区 | CNCS之家",
  description: "CNCS.HOMES是中国人自己的《反恐精英2》(CS2)玩家社区，提供快速入门、提升技术、休闲娱乐、获得便捷工具的全方位资源，",
  keywords: "CS2,反恐精英2,cncs,CS2社区,CS2攻略,CS2开箱，CS2技巧,CS2教学,CS2饰品,go学长",
  openGraph: {
    title: "CNCS.HOMES - 中国人自己的CS2玩家社区",
    description: "专业CS2游戏平台，提供全方位游戏资源和交流空间",
    url: "https://cncs.homes",
    siteName: "CNCS.HOMES",
    images: [
      {
        url: "https://cncs.homes/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "zh_CN",
    type: "website",
  }
}


export default function Home() {
  return (
    <div style={{ backgroundColor: '#121a2b', color: '#ffffff', minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <div style={{ maxWidth: '800px', textAlign: 'center' }}>
      <h2>欢迎来到CNCS.HOMES，Go学长之家</h2>

      <span>CNCS.HOMES励志成为中国最大的《反恐精英2》(CS2)玩家网！无论你是刚入坑的新手，还是征战多年的老将，这里都是你快速入门、提升技术、休闲娱乐、获得便捷工具的最佳平台。我们致力于打造专业、全面的CS2社区网站。</span>


      <h2>您的反馈帮助我们成长</h2>
      
      <span>在<b>CNCS.HOMES</b>，我们致力于为您提供最优质的CS2内容。我们深知一个完美的网站需要不断优化和改进，因此我们高度重视每一位用户的反馈和建议。</span>
      <span>反馈邮箱：cncshomes@163.com</span>
      
      </div>
    </div>
  );
}
