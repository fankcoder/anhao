"use client";
import { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Alert,
  Chip,
  Divider,
  Box,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Security as SecurityIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  LinkOff as LinkOffIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Devices as DevicesIcon
} from '@mui/icons-material';
import Head from 'next/head';
import Image from 'next/image';

export default function SteamSecurityGuide() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // 常见盗号手段
  const scamMethods = [
    {
      title: "可爱的俄罗斯妹妹想和你一起玩游戏",
      description: "骗子伪装成俄罗斯妹妹，通过聊天培养感觉最终诱导你点击钓鱼链接",
      details: [
        "让你去打faceit平台或其他平台，平台链接可能是假的",
        "平台链接也可能给你真的，但是平台内部的其他链接是却假的",
      ],
      icon: <WarningIcon color="error" />
    },
    {
      title: "假冒Steam客服",
      description: "骗子伪装成Steam官方客服，通过聊天或邮件要求提供账户信息",
      details: [
        "通过Steam好友聊天或社区论坛联系您",
        "声称您的账户存在安全问题需要验证",
        "提供虚假的Steam客服链接"
      ],
      icon: <WarningIcon color="error" />
    },
    {
      title: "虚假交易网站",
      description: "模仿Steam市场的钓鱼网站，诱导输入Steam账号密码",
      details: [
        "通过社交媒体或游戏内聊天发送链接",
        "提供'免费皮肤'或'特价游戏'诱饵",
        "网址与steamcommunity.com相似但不同"
      ],
      icon: <LinkOffIcon color="error" />
    },
    {
      title: "API劫持",
      description: "通过获取API密钥拦截交易确认",
      details: [
        "诱导您登录虚假Steam网站",
        "获取您的Steam交易API密钥",
        "自动拒绝您的真实交易，接受骗子的交易"
      ],
      icon: <DevicesIcon color="error" />
    },
    {
      title: "虚假举报威胁",
      description: "声称您涉嫌欺诈，威胁封号要求验证",
      details: [
        "假冒Steam管理员或VAC系统",
        "威胁不立即验证就会永久封禁",
        "要求您点击链接或下载文件"
      ],
      icon: <EmailIcon color="error" />
    }
  ];

  // 防范措施
  const preventionMethods = [
    {
      title: "启用双重认证",
      description: "为账户添加额外安全层",
      steps: [
        "在Steam客户端中转到'设置' > '账户'",
        "点击'管理Steam令牌'",
        "选择'通过Steam移动应用认证器'",
        "绑定您的手机号码"
      ],
      icon: <LockIcon color="success" />
    },
    {
      title: "检查网址真实性",
      description: "确保访问的是真正的Steam网站",
      steps: [
        "官方网址永远是https://store.steampowered.com/",
        "检查浏览器地址栏的锁形图标",
        "不要点击邮件或聊天中的直接链接",
        "手动输入网址或使用书签访问"
      ],
      icon: <CheckCircleIcon color="success" />
    },
    {
      title: "警惕可疑消息",
      description: "识别并避免常见骗局",
      steps: [
        "Steam官方永远不会通过聊天联系您",
        "不要相信'免费皮肤'或'特价游戏'",
        "拒绝任何要求您登录的'验证'请求",
        "举报可疑用户和消息"
      ],
      icon: <SecurityIcon color="success" />
    },
    {
      title: "定期检查API密钥",
      description: "防止交易被劫持",
      steps: [
        "访问https://steamcommunity.com/dev/apikey",
        "如果发现未知API密钥立即撤销",
        "警惕要求您登录的第三方网站",
        "使用官方移动应用确认交易"
      ],
      icon: <DevicesIcon color="success" />
    }
  ];

  return (
    <>
      <Head>
        <title>Steam账户防盗安全指南</title>
        <meta name="description" content="了解常见Steam盗号手段和防范方法，保护您的账户安全" />
      </Head>

      <Container maxWidth="md" sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
            <SecurityIcon color="primary" sx={{ fontSize: 40, verticalAlign: 'middle', mr: 2 }} />
            Steam账户防盗安全指南
          </Typography>

          <Alert severity="warning" sx={{ mb: 4 }}>
            注意：Steam官方永远不会通过聊天或邮件向您索要密码、验证码或账户信息！
          </Alert>

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, color: 'error.main' }}>
            <WarningIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            常见盗号手段
          </Typography>

          {scamMethods.map((method, index) => (
            <Accordion 
              key={index} 
              expanded={expanded === `scam-${index}`} 
              onChange={handleChange(`scam-${index}`)}
              sx={{ mb: 2 }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {method.icon}
                </ListItemIcon>
                <Typography sx={{ fontWeight: 'bold' }}>{method.title}</Typography>
                <Chip label="高风险" color="error" size="small" sx={{ ml: 2 }} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph sx={{ fontWeight: 'bold' }}>
                  {method.description}
                </Typography>
                <List dense>
                  {method.details.map((detail, i) => (
                    <ListItem key={i}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <WarningIcon color="error" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={detail} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 4, mb: 2, color: 'success.main' }}>
            <CheckCircleIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            安全防范措施
          </Typography>

          {preventionMethods.map((method, index) => (
            <Accordion 
              key={index} 
              expanded={expanded === `prevent-${index}`} 
              onChange={handleChange(`prevent-${index}`)}
              sx={{ mb: 2, borderLeft: '4px solid #4caf50' }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {method.icon}
                </ListItemIcon>
                <Typography sx={{ fontWeight: 'bold' }}>{method.title}</Typography>
                <Chip label="推荐" color="success" size="small" sx={{ ml: 2 }} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph sx={{ fontWeight: 'bold' }}>
                  {method.description}
                </Typography>
                <List dense>
                  {method.steps.map((step, i) => (
                    <ListItem key={i}>
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={step} />
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}

          <Box sx={{ mt: 4, p: 3, bgcolor: 'background.paper', borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              <SecurityIcon color="primary" sx={{ mr: 1, verticalAlign: 'middle' }} />
              紧急情况处理
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <WarningIcon color="error" />
                </ListItemIcon>
                <ListItemText 
                  primary="怀疑账户被盗？" 
                  secondary="立即移除陌生登录的 已授权设备" 
                />

              </ListItem>
                <Box sx={{ display: 'flex',flexDirection: 'column', gap: 1, alignItems: 'center', ml: 2 }}>
                <Image src={require('../../../public/assets/safe0.jpg')} alt="safe" width="60%" height={400} style={{ borderRadius: 4 }} />
                <Image src={require('../../../public/assets/safe1.jpg')} alt="safe" width="60%" height={400} style={{ borderRadius: 4 }} />
                <Image src={require('../../../public/assets/safe2.jpg')} alt="safe" width="60%" height={400} style={{ borderRadius: 4 }} />
                </Box>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon color="action" />
                </ListItemIcon>
                <ListItemText 
                  primary="发现可疑活动？" 
                  secondary="更改或注销当前的Steam API密钥" 
                />
              </ListItem>
                <Box sx={{ display: 'flex',flexDirection: 'column', gap: 1, alignItems: 'center', ml: 2 }}>
                <Image src={require('../../../public/assets/safe3.jpg')} alt="safe" width="60%" height={400} style={{ borderRadius: 4 }} />
                <Image src={require('../../../public/assets/safe4.jpg')} alt="safe" width="60%" height={400} style={{ borderRadius: 4 }} />
                <Image src={require('../../../public/assets/safe5.jpg')} alt="safe" width="60%" height={400} style={{ borderRadius: 4 }} />
                <Image src={require('../../../public/assets/safe6.jpg')} alt="safe" width="60%" height={400} style={{ borderRadius: 4 }} />
                </Box>
                          <ListItem>
                <ListItemIcon>
                  <EmailIcon color="action" />
                </ListItemIcon>
                <ListItemText 
                  primary="修改steam密码" 
                  secondary="我的账户--管理账户明细--更改我的密码" 
                />
              </ListItem>
            </List>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 4, fontStyle: 'italic' }}>
            最后更新：{new Date().toLocaleDateString()} | 本指南仅供参考，请以Steam官方安全建议为准
          </Typography>
        </Paper>
      </Container>
    </>
  );
}