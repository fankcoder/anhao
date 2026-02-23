"use client";
import styles from "../../page.module.css";

export default function CounterStrafingPage() {
    return(
        <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', padding: '20px' ,color: "#9facc6", backgroundColor: '#121a2b',}}>
        <div style={{ maxWidth: '800px', textAlign: 'left', width: '100%' }}>
        <h1><strong>CS2 急停（Counter-Strafing）详细新手教学</strong></h1>

        <p>在 <strong>CS2</strong> 中，<strong>急停（Counter-Strafing）</strong> 是精准射击的核心技巧，能让你在移动后瞬间静止，确保步枪、狙击枪的第一发子弹100%精准。本教程将从 <strong>基础原理、按键方法、练习技巧</strong> 一步步教你掌握急停。</p>

        <hr />

        <h2><strong>1. 急停的作用</strong></h2>

        <ul>
            <li><strong>为什么需要急停？</strong>
            <ul>
                <li>CS2 中，移动时开枪子弹会随机扩散，<strong>只有完全静止时第一发子弹才绝对精准</strong>。</li>
                <li>急停能让你 <strong>快速取消移动惯性</strong>，比单纯松开方向键停得更快。</li>
            </ul>
            </li>
        </ul>

        <p><strong>急停 vs 自然停止</strong></p>

        <table>
            <thead>
            <tr>
                <th><strong>方式</strong></th>
                <th><strong>停止时间</strong></th>
                <th><strong>适合场景</strong></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><strong>急停（反向按键）</strong></td>
                <td>瞬间停止（0.1s内）</td>
                <td>对枪、狙击开镜</td>
            </tr>
            <tr>
                <td><strong>自然停止（松开按键）</strong></td>
                <td>较慢（约0.3s）</td>
                <td>非战斗移动</td>
            </tr>
            </tbody>
        </table>

        <blockquote>
            <p>关键点：急停能让你在对枪时 稳定弹道，提高爆头率！</p>
        </blockquote>

        <hr />

        <h2><strong>2. 急停的按键方法</strong></h2>

        <h3><strong>（1）基础急停操作</strong></h3>

        <ul>
            <li><strong>向左移动（A键）→ 快速按D键</strong></li>
            <li><strong>向右移动（D键）→ 快速按A键</strong></li>
            <li><strong>向前移动（W键）→ 快速按S键</strong>（较少用，通常用左右急停）</li>
        </ul>

        <p><strong>操作示例（向左移动后急停）</strong>：</p>

        <ol>
            <li>按住 <code>A</code> 向左移动</li>
            <li><strong>松开 <code>A</code> 的同时，快速轻按 <code>D</code></strong>（反向按键抵消惯性）</li>
            <li><strong>在速度归零的瞬间开枪</strong>（可配合 <code>cl_showpos 1</code> 观察速度）</li>
        </ol>

        <h3><strong>（2）进阶：结合蹲下（Crouch）</strong></h3>

        <ul>
            <li><strong>急停 + 蹲下</strong> 能更快稳定准星，适合中远距离对枪。<strong>操作</strong>：
            <ul>
                <li><code>A</code> → <code>D</code> + <code>Ctrl</code>（蹲下）→ 开枪</li>
            </ul>
            </li>
        </ul>

        <blockquote>
            <p>注意：蹲下会降低移动灵活性，避免过度依赖。</p>
        </blockquote>

        <hr />

        <h2><strong>3. 如何练习急停？</strong></h2>

        <h3><strong>（1）基础训练（离线模式）</strong></h3>

        <ol>
            <li><strong>开启速度显示</strong>（控制台输入）：
            <pre>{`cl_showpos 1  # 显示实时速度`}</pre>
            </li>
            <li><strong>找一面墙</strong>，练习左右移动 + 急停：
            <ul>
                <li>按住 <code>A</code> 移动 → 按 <code>D</code> 急停 → 观察速度是否归零</li>
                <li>成功后，<strong>急停后立即开枪</strong>，看弹孔是否集中</li>
            </ul>
            </li>
        </ol>

        <h3><strong>（2）BOT 练习（实战模拟）</strong></h3>

        <ol>
            <li>开一个 <strong>死斗（Deathmatch）</strong> 或 <strong>BOT 训练图</strong>（如 <code>aim_botz</code>）。</li>
            <li><strong>移动 → 急停 → 开枪爆头</strong>，养成肌肉记忆。</li>
            <li><strong>逐步加快节奏</strong>，模拟真实对枪场景。</li>
        </ol>

        <h3><strong>（3）创意工坊地图推荐</strong></h3>

        <ul>
            <li><strong>Aim Lab</strong>（练习急停+瞄准）</li>
            <li><strong>Recoil Master</strong>（弹道+急停训练）</li>
            <li><strong>Fast Aim/Reflex Training</strong>（快速反应+急停）</li>
        </ul>

        <hr />

        <h2><strong>4. 常见错误 & 解决方法</strong></h2>

        <table>
            <thead>
            <tr>
                <th><strong>错误</strong></th>
                <th><strong>原因</strong></th>
                <th><strong>修正方法</strong></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><strong>急停后子弹仍不准</strong></td>
                <td>速度未完全归零</td>
                <td>确保 <code>cl_showpos 1</code> 显示 <strong>0.0</strong> 再开枪</td>
            </tr>
            <tr>
                <td><strong>急停太慢被反杀</strong></td>
                <td>按键节奏不对</td>
                <td>练习 <strong>松开方向键 + 反向按键同步</strong></td>
            </tr>
            <tr>
                <td><strong>习惯性蹲停</strong></td>
                <td>过度依赖蹲下</td>
                <td>先练纯急停，再结合蹲</td>
            </tr>
            </tbody>
        </table>

        <hr />

        <h2><strong>5. 实战应用技巧</strong></h2>

        <ul>
            <li><strong>对枪时</strong>：左右横移 + 急停开枪，避免站桩输出。</li>
            <li><strong>狙击枪（AWP）</strong>：必须急停后开镜，否则准星晃动。</li>
            <li><strong>近距离遭遇</strong>：可小幅度移动射击（冲锋枪/Pistol），但步枪仍需急停。</li>
        </ul>

        <hr />

        <h2><strong>总结</strong></h2>

        <p>✅ <strong>急停 = 松开方向键 + 快速反向按键</strong>（如 <code>A</code> → <code>D</code>）。</p>

        <p>✅ <strong>必须练到速度归零（0.0 UPS）再开枪</strong>。</p>

        <p>✅ <strong>先练基础急停，再结合蹲下、移动射击</strong>。</p>

        <p>坚持练习 <strong>10-15分钟/天</strong>，1-2周后急停会变成肌肉记忆，大幅提升你的对枪胜率！ 🎯</p>

        <p><strong>现在就去开一把死斗，试试急停吧！</strong> 🔫</p>
        </div>
        </div>
    )
}