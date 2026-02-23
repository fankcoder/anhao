"use client";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container
} from "@mui/material";

const AimStyle = {
  h1: {
    color: "#e67e22",
    textAlign: "center",
    marginBottom: "30px",
    borderBottom: "2px solid #e67e22",
    paddingBottom: "10px",
  },
  h2: {
    color: "#3498db",
    marginTop: "30px",
    borderLeft: "4px solid #3498db",
    paddingLeft: "10px",
  },
  h3: {
    color: "#2ecc71",
    marginTop: "25px",
  },
  highlight: {
    backgroundColor: "#fffde7",
    padding: "15px",
    borderLeft: "4px solid #fbc02d",
    margin: "20px 0",
  },
};

export default function AimingPage() {
  return (
    <Container maxWidth="md" sx={{ color: "#9facc6", backgroundColor: "#121a2b", py: 4 }}>
      <Box>
        <Typography variant="h3" component="h1" sx={AimStyle.h1}>
          CS2 精准定位训练终极指南（含灵敏度选择）
        </Typography>

        <Typography variant="h5" component="h2" sx={AimStyle.h2}>
          第一部分：如何找到最适合你的鼠标灵敏度
        </Typography>

        <Typography variant="h6" component="h3" sx={AimStyle.h3}>
          1. 灵敏度基础概念
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <>
                  <strong>eDPI（有效DPI）</strong> = 鼠标DPI × 游戏内灵敏度
                  <br />
                  （例：800 DPI × 1.0 sens = 800 eDPI）
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText primary={<><strong>CS职业选手平均eDPI范围</strong>：600-1200（低敏玩家可作为参考起点）</>} />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" sx={AimStyle.h3}>
          2. 灵敏度选择方法
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (1) 基础测试法
        </Typography>
        <List component="ol">
          <ListItem>
            <ListItemText primary="选择一个中等灵敏度（如800 DPI × 1.2）" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  <strong>180度测试</strong>：
                  <List sx={{ pl: 2 }}>
                    <ListItem>
                      <ListItemText primary="鼠标从垫子一侧移动到另一侧，角色应能刚好旋转180-200度" />
                    </ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  <strong>微调测试</strong>：
                  <List sx={{ pl: 2 }}>
                    <ListItem>
                      <ListItemText primary="能否轻松瞄准远处小点（如Dust2 A点坑位到A平台头线）" />
                    </ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
        </List>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (2) PSA方法（精准调整）
        </Typography>
        <List component="ol">
          <ListItem><ListItemText primary="进入任意创意工坊热身地图" /></ListItem>
          <ListItem><ListItemText primary="设置5个静态BOT" /></ListItem>
          <ListItem><ListItemText primary="尝试在不同灵敏度下快速爆头" /></ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  直到当前鼠标灵敏度能让你：
                  <List sx={{ pl: 2 }}>
                    <ListItem><ListItemText primary="稳定控制压枪" /></ListItem>
                    <ListItem><ListItemText primary="轻松完成90度转身" /></ListItem>
                    <ListItem><ListItemText primary="精准定位头部" /></ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
        </List>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (3) 实战验证
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="使用选定灵敏度打20分钟死斗" />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  检查：
                  <List sx={{ pl: 2 }}>
                    <ListItem><ListItemText primary="是否经常过度瞄准（灵敏度太高）" /></ListItem>
                    <ListItem><ListItemText primary="是否拉枪不到位（灵敏度太低）" /></ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
        </List>

        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" component="h3" sx={AimStyle.h3}>
            3. 灵敏度调整黄金法则
          </Typography>
          <Typography>✅ <strong>理想灵敏度应满足</strong>：</Typography>
          <List>
            <ListItem><ListItemText primary="能轻松完成180度以内的转身(180在CS2中已经是相当极限的移动距离，实战中这种情况较少)" /></ListItem>
            <ListItem><ListItemText primary="能精准定位10米外敌人的头部" /></ListItem>
            <ListItem><ListItemText primary="能控制至少前10发子弹的压枪" /></ListItem>
          </List>
        </Box>

        <Typography variant="h5" component="h2" sx={AimStyle.h2}>
          第二部分：精准定位系统训练
        </Typography>

        <Typography variant="h6" component="h3" sx={AimStyle.h3}>
          1. 基础定位训练（每日15分钟）
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (1) 静态目标训练（aim_botz）
        </Typography>
        <List component="ol">
          <ListItem><ListItemText primary="设置100个BOT，仅爆头有伤害" /></ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  练习方式：
                  <List sx={{ pl: 2 }}>
                    <ListItem><ListItemText primary="慢速精准定位（确保每枪爆头）" /></ListItem>
                    <ListItem><ListItemText primary="快速切换目标（提升反应速度）" /></ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  进阶：
                  <List sx={{ pl: 2 }}>
                    <ListItem><ListItemText primary="加入左右移动+急停射击" /></ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
        </List>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (2) 动态目标训练（Fast Aim/Reflex）
        </Typography>
        <List component="ol">
          <ListItem><ListItemText primary="设置BOT随机移动" /></ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  练习：
                  <List sx={{ pl: 2 }}>
                    <ListItem><ListItemText primary="预瞄头部高度" /></ListItem>
                    <ListItem><ListItemText primary="追踪移动目标" /></ListItem>
                    <ListItem><ListItemText primary="急停射击" /></ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" sx={AimStyle.h3}>
          2. 实战定位技巧
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (1) 准星定位法
        </Typography>
        <List>
          <ListItem><ListItemText primary="始终保持准星在头部高度" /></ListItem>
          <ListItem><ListItemText primary="移动时准星对准可能出现敌人的位置" /></ListItem>
        </List>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (2) 分段预描
        </Typography>
        <List>
          <ListItem><ListItemText primary="清点时将视角分成30度角分段清点" /></ListItem>
        </List>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (3) 预瞄地图练习
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <>
                  详见游戏基础指南-预瞄
                </>
              }
            />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" sx={AimStyle.h3}>
          3. 高级训练方法
        </Typography>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (1) 小范围目标训练
        </Typography>
        <List>
          <ListItem><ListItemText primary="练习超小目标(远距离敌人头部)的精准点击" /></ListItem>
        </List>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (2) 无准星训练
        </Typography>
        <List>
          <ListItem><ListItemText primary="关闭准星打BOT" /></ListItem>
          <ListItem><ListItemText primary="强迫自己依靠屏幕中心感定位" /></ListItem>
        </List>

        <Typography variant="subtitle1" sx={{ mt: 2, fontWeight: "bold" }}>
          (3) 压力训练
        </Typography>
        <List>
          <ListItem><ListItemText primary="创意工坊Aim_Rush / Aim training map 设置1v5训练" /></ListItem>
        </List>

        <Typography variant="h5" component="h2" sx={AimStyle.h2}>
          第三部分：训练计划与进度追踪
        </Typography>

        <Typography variant="h6" component="h3" sx={AimStyle.h3}>
          1. 每日训练计划
        </Typography>
        <TableContainer component={Paper} sx={{ my: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>项目</TableCell>
                <TableCell>时间</TableCell>
                <TableCell>内容</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>灵敏度调整</TableCell>
                <TableCell>5min</TableCell>
                <TableCell>确认当天最舒适灵敏度</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>静态定位</TableCell>
                <TableCell>10min</TableCell>
                <TableCell>aim_botz爆头训练</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>动态定位</TableCell>
                <TableCell>10min</TableCell>
                <TableCell>Fast Aim移动目标</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>实战应用</TableCell>
                <TableCell>15min</TableCell>
                <TableCell>死斗模式</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography variant="h6" component="h3" sx={AimStyle.h3}>
          2. 每周进步评估
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <>
                  记录：
                  <List sx={{ pl: 2 }}>
                    <ListItem><ListItemText primary="aim_botz爆头数/分钟" /></ListItem>
                    <ListItem><ListItemText primary="死斗K/D比值" /></ListItem>
                    <ListItem><ListItemText primary="最远精准爆头距离" /></ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
        </List>

        <Typography variant="h6" component="h3" sx={AimStyle.h3}>
          3. 常见问题解决
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <>
                  <strong>问题1：总是过度瞄准</strong>
                  <List sx={{ pl: 2 }}>
                    <ListItem><ListItemText primary="降低灵敏度5-10%" /></ListItem>
                    <ListItem><ListItemText primary="练习慢速精准射击" /></ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  <strong>问题2：拉枪不到位</strong>
                  <List sx={{ pl: 2 }}>
                    <ListItem><ListItemText primary="提高灵敏度5%" /></ListItem>
                    <ListItem><ListItemText primary="练习大范围目标切换" /></ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={
                <>
                  <strong>问题3：压枪时准星失控</strong>
                  <List sx={{ pl: 2 }}>
                    <ListItem><ListItemText primary="单独练习压枪模式" /></ListItem>
                    <ListItem><ListItemText primary="考虑降低垂直灵敏度" /></ListItem>
                  </List>
                </>
              }
            />
          </ListItem>
        </List>

        <Typography variant="h5" component="h2" sx={AimStyle.h2}>
          第四部分：设备与设置优化
        </Typography>

        <Typography variant="h6" component="h3" sx={AimStyle.h3}>
          1. 硬件建议
        </Typography>
        <List>
          <ListItem><ListItemText primary="鼠标：轻量化（小于80g）传感器（如Logitech G Pro X）" /></ListItem>
          <ListItem><ListItemText primary="鼠标垫：大尺寸布垫（45×40cm以上）" /></ListItem>
          <ListItem><ListItemText primary="显示器：144Hz以上刷新率" /></ListItem>
        </List>

        <Typography variant="h6" component="h3" sx={AimStyle.h3}>
          2. 游戏设置优化
        </Typography>
        <List>
          <ListItem><ListItemText primary="原始输入：开启" /></ListItem>
          <ListItem><ListItemText primary="鼠标加速：关闭" /></ListItem>
        </List>

        <Paper elevation={2} sx={AimStyle.highlight}>
          <Typography>
            <strong>关键提示：</strong>找到理想灵敏度后至少坚持使用2周，频繁更改会阻碍肌肉记忆形成。
          </Typography>
          <Typography>
            通过这套系统训练，坚持2-4周后你的定位能力将显著提升。记住：精准定位=正确灵敏度+科学训练+足够耐心！🎯
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}