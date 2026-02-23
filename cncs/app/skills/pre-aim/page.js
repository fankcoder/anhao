"use client";
import Image from "next/image";
import styles from "../../page.module.css";

export default function PreAimPage() {
    return(
    <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', padding: '20px' ,color: "#9facc6", backgroundColor: '#121a2b',}}>
        <div style={{ maxWidth: '800px', textAlign: 'left', width: '100%' }}>
        <title>预瞄是四大基本功的一项，无它唯手熟尔。想要练习预瞄常见的有方式有3种任选其一对你最方便的方式即可。</title>

        <h3>完美平台-预瞄挑战</h3>
        <Image 
            src={require("../../../public/assets/wanmei2.jpg")}
            alt="wanmei"
            width={680}
            height={400}
        />
        <h5>开始游戏-特训营-预瞄挑战-开始练习/开始挑战</h5>

        <h3>5E对战平台-预瞄挑战</h3>
        <Image 
            src={require("../../../public/assets/5epre.jpg")}
            alt="5epre"
            width={680}
            height={400}
        />
        <h5>点击Play按钮→自定义→本地训练→选择需要练习预瞄的地图即可</h5>

        <h3>Steam国际服创意工坊-预瞄挑战</h3>

        
        <span>需要先开加速器，然后点击CS2创意工坊，搜索并订阅以下地图名来，然后在国际服练习预瞄</span>

        <list>
            <li>荒漠迷城，搜索：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3232466864&searchtext=Prefire" style={{color:'#9facc6'}}>5E_Prac_Mirage_Prefire</a></li>
            <li>炼狱小镇，搜索：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3251878584&searchtext=Prefire" style={{color:'#9facc6'}}>5E_Prac_Inferno_Prefire</a></li>
            <li>炙热沙城2，搜索：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3244203953&searchtext=Prefire" style={{color:'#9facc6'}}>5E_Prac_Dust2_Prefire</a></li>
            <li>核子危机，搜索：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3279281339&searchtext=Prefire" style={{color:'#9facc6'}}>5E_Prac_Nuke_Prefire</a></li>
            <li>远古遗迹，搜索：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3272008480&searchtext=Prefire" style={{color:'#9facc6'}}>5E_Prac_Ancient_Prefire</a></li>
            <li>阿努比斯，搜索：<a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3275080617&searchtext=Prefire" style={{color:'#9facc6'}}>5E_Prac_Anubis_Prefire</a></li>
        </list>

        </div>
    </div>
    )
}