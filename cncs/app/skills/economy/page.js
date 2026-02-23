"use client";
import styles from "../../page.module.css";
import { useEffect, useRef } from "react";
import mermaid from "mermaid";

const MermaidChart = ({ chart }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div
      ref={chartRef}
      className="mermaid"
      style={{ backgroundColor: "#121a2b", color: "#9facc6", padding: "20px", borderRadius: "8px" }}
    >
      {chart}
    </div>
  );
};

export default function EcoPage() {
    return(
    <div  style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', padding: '20px' ,color: "#9facc6", backgroundColor: '#121a2b',}}>
        <div style={{ maxWidth: '800px', textAlign: 'left', width: '100%' }}>
            <h1>CS2经济系统完全指南：从新手到高手的金钱管理</h1>

            <h2>经济系统基础</h2>
            <p>优秀的CS2选手不仅是枪法高手，更是经济管理大师。在CS2中，金钱管理是决定比赛胜负的关键因素之一。不同于其他射击游戏，CS2的经济系统让每一局的装备选择都成为战略决策。以下是经济获取的基本方式：</p>

            <h3>回合胜负奖励</h3>
            <table>
                <thead>
                <tr>
                    <th>情况</th>
                    <th>奖励金额</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>普通回合胜利</td>
                    <td>$3,250</td>
                </tr>
                <tr>
                    <td>T方下包后胜利</td>
                    <td>$3,500</td>
                </tr>
                <tr>
                    <td>CT方拆包胜利</td>
                    <td>$3,500</td>
                </tr>
                <tr>
                    <td>回合失败</td>
                    <td>$1,400起</td>
                </tr>
                <tr>
                    <td>连败奖励(最多4轮)</td>
                    <td>$1,900 → $2,400 → $2,900 → $3,400</td>
                </tr>
                </tbody>
            </table>

            <h3>击杀奖励</h3>
            <table>
                <thead>
                <tr>
                    <th>武器类型</th>
                    <th>击杀奖励</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>手枪</td>
                    <td>$300</td>
                </tr>
                <tr>
                    <td>微型冲锋枪(除P90)</td>
                    <td>$600</td>
                </tr>
                <tr>
                    <td>P90</td>
                    <td>$300</td>
                </tr>
                <tr>
                    <td>霰弹枪(除xm1014)</td>
                    <td>$900</td>
                </tr>
                <tr>
                    <td>xm1014</td>
                    <td>$600</td>
                </tr>
                <tr>
                    <td>步枪/AWP外的狙击枪</td>
                    <td>$300</td>
                </tr>
                <tr>
                    <td>AWP</td>
                    <td>$100</td>
                </tr>
                <tr>
                    <td>近战武器</td>
                    <td>$1,500</td>
                </tr>
                <tr>
                    <td>手雷/火/道具砸死</td>
                    <td>$300</td>
                </tr>
                <tr>
                    <td>电击枪</td>
                    <td>$100</td>
                </tr>
                </tbody>
            </table>

            <h3>特殊奖励</h3>
            <ul>
                <li>下包/拆包：各$300</li>
                <li>T方保枪并存活：无额外奖励</li>
                <li>补充：当ct方全员阵亡，包匪下包只给包匪额外加$300，其余t加普通回合胜利的$3,250</li>
            </ul>

            <h2>经济策略详解</h2>

            <h3>1. ECO局管理</h3>
            <p><strong>什么是ECO局？</strong><br />
            当团队资金不足(人均$2,000以下)时，选择存钱不买主战武器，为下一局储备资金。</p>

            <p><strong>ECO局技巧：</strong></p>
            <ul>
                <li>可购买基础手枪+少量道具</li>
                <li>尝试偷袭或包点骚扰</li>
                <li>避免无意义送枪给对手</li>
            </ul>

            <p><strong>反ECO策略：</strong><br />
            当预测对手ECO时（阅读对手经济是CS的高级技巧，在文章最后）：</p>
            <ul>
                <li>1-2人购买冲锋枪/霰弹枪赚击杀奖励</li>
                <li>其他队员保护赚钱队友</li>
                <li>防止高级武器被对手缴获</li>
            </ul>

            <h3>2. 保枪决策</h3>
            <p><strong>推荐保枪的情况：</strong><br />
            ✅ 1v3及以上劣势残局<br />
            <br />
            ✅ ECO第二局后买的装备（余额不足，并且连败奖励小于$2000）<br />
            <br />
            ✅ 时间不足(剩余&lt;15秒)</p>

            <p><strong>保枪技巧：</strong></p>
            <ul>
                <li>优先保留AWP/AK/M4等高价值武器</li>
                <li>选择合理的撤退路线</li>
                <li>必要时丢弃武器给血量更多的队友</li>
            </ul>

            <h3>3. 强攻时机</h3>
            <p><strong>应该全力争胜的情况：</strong><br />
            🔥 所有赛点局<br />
            <br />
            🔥 经济领先对手时<br />
            <br />
            🔥 掌握对手多人位置信息<br />
            <br />
            🔥 成功下包后的守包局面<br />
            <br />
            🔥 连胜后的气势回合</p>

            <p><strong>强攻技巧：</strong></p>
            <ul>
                <li>合理分配最后道具</li>
                <li>优先控制包点区域</li>
                <li>将1vN分割为1v1处理</li>
            </ul>

            <h3>4. 断枪战术</h3>
            <p><strong>最佳断枪时机：</strong><br />
            🎯 对手刚赢ECO局可能起好枪<br />
            <br />
            🎯 对手经济不佳时<br />
            <br />
            🎯 我方有武器优势(如AWP vs 步枪)<br />
            <br />
            🎯 争夺关键地图控制权时<br />
            <br />
            🎯 针对敌方核心选手</p>

            <p><strong>断枪要点：</strong></p>
            <ul>
                <li>优先击杀持AWP/高级步枪的敌人</li>
                <li>利用近距离交战优势</li>
                <li>配合闪光弹创造有利条件</li>
            </ul>

            <p><strong>注意：</strong>时间快结束时T方不建议再断枪，如果时间结束又被反杀下一回合将无法获得回合失败的奖励。</p>

            <h2>武器处理建议</h2>
            <p><strong>多余武器处理：</strong></p>
            <ul>
                <li>将闲置武器丢给经济困难的队友</li>
                <li>运输多余枪械防止对手缴获，通过不停的丢枪捡枪来把枪械运输到合适的位置。</li>
                <li>比赛后期可保留备用武器应对突发情况（比如赛点局，狙击手可以同时丢一把步枪在出生点，在需要的时候回出生点换枪械）</li>
            </ul>
            <h2>敌方经济分析与应对策略</h2>

            <h3>1. 存活人数分析</h3>
            <p><strong>观察回合结束时的存活人数：</strong></p>
            <ul>
            <li>✅ <strong>3人以上存活</strong>：经济优势（节省了阵亡队友的起枪成本）</li>
            <li>⚠️ <strong>连续残局存活</strong>（1-2人）：经济可能濒临崩溃</li>
            <li>❌ <strong>全员阵亡</strong>：必定触发连败补偿机制</li>
            </ul>

            <p><strong>应对策略：</strong></p>
            <ul>
            <li>对手多人存活时，下局预期他们会全枪全弹</li>
            <li>对手连续残局存活时，可考虑经济压制战术</li>
            </ul>

            <h3>2. 战败补偿分析</h3>
            <p><strong>T方经济判断：</strong></p>
            <ul>
            <li>满补偿($2,900)+下包成功：下局必AK全起+全道具</li>
            <li>满补偿无下包：可能Galil+少量道具</li>
            <li>低补偿：可能继续ECO或半起</li>
            </ul>

            <p><strong>CT方经济判断：</strong></p>
            <ul>
            <li>满补偿：最差也是MP9局</li>
            <li>中等补偿：可能Famas（霰弹枪）+半道具</li>
            <li>低补偿：大概率ECO</li>
            </ul>

            <h3>3. 敌方习惯分析</h3>
            <p><strong>团队经济分析：</strong></p>
            <ul>
            <li><strong>连续强起型</strong>：喜欢第二局就起沙鹰/冲锋枪
                <ul>
                <li>对策：第三局继续保持火力压制，比如第一时间抢下关键位置如Dust2 A大，远古遗迹，阿努比斯中路等。</li>
                </ul>
            </li>
            <li><strong>保守存钱型</strong>：连败时坚持两局ECO
                <ul>
                <li>对策：第二局可适当反ECO</li>
                </ul>
            </li>
            <li><strong>道具偏好型</strong>：特定选手总是优先购买某些道具
                <ul>
                <li>对策：针对其道具习惯调整战术</li>
                <li>比如T方总是用火+烟强控一个区域，我们可以和队友沟通准备反清，等敌方控下区域后让队友丢闪反清这个区域，这样只需要$200块就能抵消对方的$800块。</li>
                </ul>
            </li>
            </ul>

            <p><strong>武器购买分析：</strong></p>
            <ul>
            <li>手枪局败后第二局起沙鹰 → 第三局大概率AK无道具或Galil全道具</li>
            <li>手枪局赢了，第二局却拿了把手枪，第三局大概率会起狙</li>
            <li>敌方连败奖励叠加到第二或第三局，并且在前一局敌方全员阵亡，下一局敌方可能ECO</li>
            <li>CT全甲全弹的经济消耗大致范围$3900~$6,350</li>
            </ul>

            <table>
            <thead>
                <tr>
                <th>必定大于</th>
                <th>$3900</th>
                <th>全甲$1000+M4$2900</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>平均约为</td>
                <td>$5100</td>
                <td>全甲$1000+M4$2900+烟雷闪$800+钳子$400</td>
                </tr>
                <tr>
                <td>最高约为</td>
                <td>$5600</td>
                <td>全甲$1000+M4$2900+烟雷闪火$1300+钳子$400</td>
                </tr>
                <tr>
                <td>狙击手约为</td>
                <td>$6350</td>
                <td>全甲$1000+AWP$4750+烟雷$600</td>
                </tr>
            </tbody>
            </table>

            <p>T全甲全弹的经济消耗大致范围$3700~$4800</p>

            <table>
            <thead>
                <tr>
                <th>必定大于</th>
                <th>$3700</th>
                <th>全甲$1000+AK$2700</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>平均约为</td>
                <td>$4800</td>
                <td>全甲$1000+AK$2700+烟火闪闪$1100</td>
                </tr>
            </tbody>
            </table>

            <h2>经济决策流程图</h2>
            <MermaidChart chart={`graph TD
            A[回合开始] --> B{长枪局?}
            B -->|是| C[全力争胜]
            B -->|否| D{经济状况}
            D -->|充裕| E[全枪全弹]
            D -->|紧张| F{对手可能ECO?}
            F -->|是| G[反ECO策略]
            F -->|否| H[ECO保经济]

            C & E & G & H --> I[分析敌方经济]
            I --> J[存活人数?]
            J -->| 大于3人| K[预期全起]
            J -->|1-2人| L[可能经济紧张]
            I --> M[连败补偿?]
            M -->|高补偿| N[预期中等起枪]
            M -->|低补偿| O[可能ECO]
            I --> P[习惯分析]
            P --> Q[调整针对性战术]

            K & L & N & O & Q --> R[执行战术]`} />

            <h2>实战经济分析案例</h2>

            <p><strong>案例1：</strong></p>
            <ul>
            <li>上一局：T方下包失败，3人存活</li>
            <li>观察：T方连败补偿$2,400</li>
            <li>分析：3人存活节省约$6,000团队经济</li>
            <li>判断：下局T方必AK全起+全道具</li>
            <li>对策：CT方应全枪全弹应对，避免半起</li>
            </ul>

            <p><strong>案例2：</strong></p>
            <ul>
            <li>上一局：CT方拆包成功，仅1人存活</li>
            <li>观察：CT方终止了连败</li>
            <li>分析：存活1人，经济恢复有限</li>
            <li>判断：CT方可能Famas半起或MP9局</li>
            <li>对策：T方可考虑强起压制</li>
            </ul>

            <p>掌握这些经济策略，你就能像职业选手一样运筹帷幄！记住：好的枪法赢得对局，好的经济管理赢得比赛。</p>
            </div>
    </div>
    )
}