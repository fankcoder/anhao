'use client'; // 需要在客户端交互的页面

import { useState, useContext } from 'react';
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Divider,
  IconButton,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert
} from '@mui/material';
import { Edit, Check, Close } from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';

export default function ProfilePage() {
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { isLoggedIn, username, email, logout } = useContext(AuthContext);
  const [snackbarMsg, setSnackbarMsg] = useState(''); 
  const [errors, setErrors] = useState({
    email: '',
    verificationCode: '',
    password: '',
    confirmPassword: ''
  });
  console.log(username)
  // 用户数据状态
  const [user, setUser] = useState({
    username: username,
    email: email
  });
  
  // 对话框状态
  const [openUsernameDialog, setOpenUsernameDialog] = useState(false);
  const [openPasswordDialog, setOpenPasswordDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  
  // 表单状态
  const [newUsername, setNewUsername] = useState(user.username);
  const [passwordForm, setPasswordForm] = useState({
    verificationCode: '',
    newPassword: '',
    confirmPassword: ''
  });

  // 修改用户名
  const handleUsernameUpdate = async () => {
    setUser({...user, username: newUsername});
    try {
      // 模拟登录API请求
      // 实际应用中这里应该是API调用
      const accessToken = localStorage.getItem('access_token');
      const res = await fetch('https://cncs.homes/api/auth/change_username/', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ username:newUsername }) });
        const data = await res.json();
        console.log('修改用户名:', res.ok && data.code === 0);
        if (res.ok && data.code === 0) {
            setOpenUsernameDialog(false);
            setOpenSnackbar(true);
            window.location.reload(); // 修改成功后刷新页面
            return;
        } else {
            setSnackbarMsg(data.message || data.msg || '修改失败');
            setOpenSnackbar(true);
            setErrors({...errors, confirmPassword: data.msg || '修改失败`'});
        }  
    } catch (err) {
      setSnackbarMsg('修改失败，请检查邮箱和密码');
      setOpenSnackbar(true);
      setError('修改失败，请检查邮箱和密码');
    } finally {
      setLoading(false);
    }
    setOpenUsernameDialog(false);
    setOpenSnackbar(true);
  };

  // 修改密码
  const handlePasswordUpdate = async () => {
    // 这里应该添加密码验证逻辑
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('新密码与确认密码不匹配');
      return;
    }
    
    // 模拟密码更新成功
    // setOpenPasswordDialog(false);
    setOpenSnackbar(true);


    try {
        const res = await fetch('https://cncs.homes/api/auth/resetpasswd/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            passwd: passwordForm.newPassword,
            code: verificationCode
        })
        });
        const data = await res.json();
        if (data.code === 0) {
          setSnackbarMsg('修改成功！');
          setOpenSnackbar(true);
          setPasswordForm({
            verificationCode: '',
            newPassword: '',
            confirmPassword: ''
          });
        } else {
          setSnackbarMsg(data.message || '修改失败，请稍后重试');
          setOpenSnackbar(true);
          setErrors({...errors, confirmPassword: data.msg || '修改失败，请稍后重试'});
        }
    } catch (error) {
      setSnackbarMsg('修改失败，请稍后重试');
      setOpenSnackbar(true);
      setErrors({...errors, confirmPassword: '修改失败，请稍后重试'});
    } finally {
      setLoading(false);
    }

  };
  // 验证邮箱格式
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // 发送验证码
  const sendVerificationCode = async () => {
    if (!validateEmail(email)) {
      setErrors({...errors, email: '请输入有效的邮箱地址'});
      return;
    }

    setLoading(true);
    try {
      await fetch(`https://cncs.homes/api/auth/sendcode/email/?email=${email}`);
      console.log(`验证码已发送至: ${email}`);
      // 开始60秒倒计时
      setCountdown(60);
    } catch (error) {
      console.error('发送验证码失败:', error);
      setErrors({...errors, email: '发送验证码失败，请重试'});
    } finally {
      setLoading(false);
    }
  };
    // 重新发送验证码
  const resendCode = () => {
    setCountdown(60);
    sendVerificationCode();
  };

  return (
    <Box sx={{
      maxWidth: 600,
      mx: 'auto',
      mt: 4,
      p: 3,
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: 1
    }}>
      {/* 个人资料标题 */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        个人资料
      </Typography>
      <Divider sx={{ my: 2 }} />
      {/* 操作成功/失败提示 */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
            {snackbarMsg}
        </Alert>
      </Snackbar>
      {/* 用户头像和基本信息 */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar sx={{ width: 80, height: 80, mr: 3 }}>
        </Avatar>
        
        <Box>
          {/* 用户名部分 */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography variant="h5" sx={{ mr: 1 }}>
              {username}
            </Typography>
            <IconButton 
              color="primary" 
              onClick={() => {
                setNewUsername(user.username);
                setOpenUsernameDialog(true);
              }}
            >
              <Edit fontSize="small" />
            </IconButton>
          </Box>
          
          {/* 邮箱部分 */}
          <Typography variant="body1" color="text.secondary">
            {email}
          </Typography>
        </Box>
      </Box>
      
      {/* 修改密码按钮 */}
      <Button
        variant="outlined"
        startIcon={<Edit />}
        onClick={() => setOpenPasswordDialog(true)}
        sx={{ mt: 2, color: 'text.primary' }}
      >
        修改密码
      </Button>
      
      {/* 修改用户名对话框 */}
      <Dialog open={openUsernameDialog} onClose={() => setOpenUsernameDialog(false)}>
        <DialogTitle>修改用户名</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="新用户名"
            type="text"
            fullWidth
            variant="outlined"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            sx={{ mt: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenUsernameDialog(false)}  sx={{ color:'text.primary' }}>取消</Button>
          <Button 
            onClick={handleUsernameUpdate}
            variant="contained"
            startIcon={<Check />}
            sx={{ color:'text.primary' }}
          >
            确认修改
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* 修改密码对话框 */}
      <Dialog open={openPasswordDialog} onClose={() => setOpenPasswordDialog(false)}>
        <DialogTitle>修改密码</DialogTitle>
        <DialogContent>
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
                fullWidth
                label="验证码"
                variant="outlined"
                value={verificationCode}
                onChange={(e) => {
                setVerificationCode(e.target.value);
                setErrors({...errors, verificationCode: ''});
                }}
                error={!!errors.verificationCode}
                helperText={errors.verificationCode}
            />
            <Button
                variant="contained"
                onClick={sendVerificationCode}
                disabled={loading || countdown > 0 || !validateEmail(email)}
                sx={{ minWidth: 120, color: '#9facc6',
                '&.Mui-disabled': {
                color: '#5c6a85', // 你想要的禁用文字颜色
                } }}
            >
                {countdown > 0 ? `${countdown}秒后重发` : (loading ? <CircularProgress size={24}/> : '获取验证码')}
            </Button>
            </Box>
          <TextField
            margin="dense"
            label="新密码"
            type="password"
            fullWidth
            variant="outlined"
            value={passwordForm.newPassword}
            onChange={(e) => setPasswordForm({
              ...passwordForm,
              newPassword: e.target.value
            })}
          />
          <TextField
            margin="dense"
            label="确认新密码"
            type="password"
            fullWidth
            variant="outlined"
            value={passwordForm.confirmPassword}
            onChange={(e) => setPasswordForm({
              ...passwordForm,
              confirmPassword: e.target.value
            })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPasswordDialog(false)}>取消</Button>
          <Button 
            onClick={handlePasswordUpdate}
            variant="contained"
            startIcon={<Check />}
            disabled={
              !passwordForm.newPassword || 
              passwordForm.newPassword !== passwordForm.confirmPassword
            }
          >
            确认修改
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* 操作成功提示 */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success">
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
}