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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  IconButton,
  Tooltip,
  Link,
  Grid
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Security as SecurityIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  LinkOff as LinkOffIcon,
  Email as EmailIcon,
  Lock as LockIcon,
  Devices as DevicesIcon,
  ContentCopy as ContentCopyIcon,
  Mail as MailIcon
} from '@mui/icons-material';
import Head from 'next/head';

export default function SteamSecurityGuide() {
  const [expanded, setExpanded] = useState(false);
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [emailData, setEmailData] = useState({
    username: '',
    email: '',
    date: '',
    location: ''
  });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData(prev => ({ ...prev, [name]: value }));
  };

  const generateEmailTemplate = () => {
    return `Subject: [URGENT] My Steam Account Has Been Hacked - Request for Recovery Assistance

Dear Steam Support,

I am writing to urgently request assistance in recovering my Steam account, which I believe has been compromised.

Account Details:

Steam Account Name / Username: ${emailData.username || '[Your Steam username]'}
Email Address Associated with the Account: ${emailData.email || '[Your email address]'}
Approximate Date and Time of the Issue: ${emailData.date || '[When you noticed the problem]'}
Last Known Login Location (City/Country): ${emailData.location || '[Your location]'}

Description of the Issue:
Recently, I noticed suspicious activity on my account, and I can no longer access it. I believe my account was hacked. I have already tried to reset my password, but the email linked to the account may have been changed by the unauthorized user.

Additional Information:

I have attached any relevant proof of ownership, such as recent purchase receipts (e.g., from Steam Wallet, games bought), and my original email address used with the account.

I am willing to provide any additional information to verify my identity.

Please help me recover my account as soon as possible. I have invested a lot of time and money into this account, and I am very worried about unauthorized access or potential misuse.

Thank you very much for your support.`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateEmailTemplate());
  };

  // ...之前的scamMethods和preventionMethods数据保持不变...

  return (
    <>
      <Head>
        <title>Steam账户防盗安全指南</title>
        <meta name="description" content="了解常见Steam盗号手段和防范方法，保护您的账户安全" />
      </Head>

      <Container maxWidth="md" sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          {/* ...页面顶部内容保持不变... */}

          {/* 紧急情况处理部分 - 更新为包含邮件模板 */}
          <Box sx={{ mt: 4, p: 3, bgcolor: 'action.hover', borderRadius: 1, borderLeft: '4px solid #f44336' }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'error.main' }}>
              <WarningIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              账户被盗紧急处理
            </Typography>
            
            <List dense sx={{ mb: 2 }}>
              <ListItem>
                <ListItemIcon>
                  <WarningIcon color="error" />
                </ListItemIcon>
                <ListItemText 
                  primary="立即行动：" 
                  secondary="如果您怀疑账户被盗，请按以下步骤操作" 
                />
              </ListItem>
              <ListItem sx={{ pl: 9 }}>
                <ListItemText 
                  primary="1. 访问Steam官方账户恢复页面" 
                  secondary={<Link href="https://help.steampowered.com" target="_blank">https://help.steampowered.com</Link>} 
                />
              </ListItem>
              <ListItem sx={{ pl: 9 }}>
                <ListItemText 
                  primary="2. 使用下方模板联系Steam客服" 
                  secondary="填写必要信息后复制邮件内容" 
                />
              </ListItem>
              <ListItem sx={{ pl: 9 }}>
                <ListItemText 
                  primary="3. 准备账户证明文件" 
                  secondary="如购买付款截图、CDKEY激活密钥等" 
                />
              </ListItem>
            </List>

            <Button
              variant="contained"
              startIcon={<MailIcon />}
              onClick={() => setEmailDialogOpen(true)}
              sx={{ mt: 1, bgcolor: 'error.main', '&:hover': { bgcolor: 'error.dark' } }}
            >
              生成账户恢复邮件
            </Button>

            <Typography variant="body2" sx={{ mt: 2, fontStyle: 'italic' }}>
              注意：Steam客服通常会在1-3个工作日内回复，请耐心等待。
            </Typography>
          </Box>

          {/* ...页面底部其他内容保持不变... */}
        </Paper>
      </Container>

      {/* 邮件模板对话框 */}
      <Dialog 
        open={emailDialogOpen} 
        onClose={() => setEmailDialogOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          <MailIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
          Steam账户恢复邮件模板
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: 2 }}>
            请填写以下信息生成定制化恢复邮件（可选），然后复制内容发送至Steam客服邮箱。
          </DialogContentText>

          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Steam用户名"
                name="username"
                value={emailData.username}
                onChange={handleInputChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="关联邮箱"
                name="email"
                value={emailData.email}
                onChange={handleInputChange}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="问题发生时间"
                name="date"
                value={emailData.date}
                onChange={handleInputChange}
                placeholder="例如: 2023-10-15 14:30左右"
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="最后登录地点"
                name="location"
                value={emailData.location}
                onChange={handleInputChange}
                placeholder="例如: 中国北京"
                size="small"
              />
            </Grid>
          </Grid>

          <Paper variant="outlined" sx={{ p: 2, position: 'relative' }}>
            <Tooltip title="复制邮件内容">
              <IconButton
                onClick={copyToClipboard}
                sx={{ position: 'absolute', right: 8, top: 8 }}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Typography component="pre" sx={{ 
              whiteSpace: 'pre-wrap', 
              wordWrap: 'break-word',
              fontFamily: 'monospace',
              fontSize: '0.8rem'
            }}>
              {generateEmailTemplate()}
            </Typography>
          </Paper>

          <Alert severity="info" sx={{ mt: 2 }}>
            发送建议：请将邮件发送至Steam客服邮箱或通过官方支持页面提交，附上您的购买凭证等证明文件。
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button color="text.primary" onClick={copyToClipboard} startIcon={<ContentCopyIcon />}>
            复制邮件内容
          </Button>
          <Button 
            onClick={() => setEmailDialogOpen(false)} 
            color="primary"
            variant="contained"
          >
            完成
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}