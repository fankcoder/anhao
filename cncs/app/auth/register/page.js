"use client";
import { useState, useEffect, useRef } from 'react';
import { 
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
  FormControl,
  InputAdornment,
  IconButton
} from '@mui/material';
import { 
  Email as EmailIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import Head from 'next/head';

export default function RegisterPage() {
  // 表单状态
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    verificationCode: '',
    password: '',
    confirmPassword: ''
  });
  
  // 流程状态
  const [step, setStep] = useState(1); // 1: 输入邮箱, 2: 输入验证码, 3: 设置密码
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [success, setSuccess] = useState(false);
  const countdownRef = useRef();

  // 验证邮箱格式
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // 验证密码强度
  const validatePassword = (password) => {
    return password.length >= 8;
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
      setStep(2);
    } catch (error) {
      console.error('发送验证码失败:', error);
      setErrors({...errors, email: '发送验证码失败，请重试'});
    } finally {
      setLoading(false);
    }
  };


  // 提交注册
  const handleSubmit = async () => {
    if (!validatePassword(password)) {
      setErrors({...errors, password: '密码至少需要8位字符'});
      return;
    }

    if (password !== confirmPassword) {
      setErrors({...errors, confirmPassword: '两次输入的密码不一致'});
      return;
    }

    setLoading(true);
    try {
        const res = await fetch('https://cncs.homes/api/auth/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            passwd: password,
            code: verificationCode
        })
        });
        const data = await res.json();
        if (res.ok && data.code === 0) {
            const access = data.body?.access;
            if (access) {
                const expireAt = Date.now() + 160 * 24 * 60 * 60 * 1000; // 160天后时间戳
                localStorage.setItem('access_token', access);
                localStorage.setItem('access_token_expire', expireAt.toString());
            }
            setSuccess(true);
        } else {
            setErrors({...errors, confirmPassword: data.msg || '注册失败，请稍后重试'});
        }
    } catch (error) {
      console.error('注册失败:', error);
      setErrors({...errors, confirmPassword: '注册失败，请稍后重试'});
    } finally {
      setLoading(false);
    }
  };

  // 倒计时效果
  useEffect(() => {
    if (countdown > 0) {
      countdownRef.current = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => {
      if (countdownRef.current) {
        clearTimeout(countdownRef.current);
      }
    };
  }, [countdown]);

  // 重新发送验证码
  const resendCode = () => {
    setCountdown(60);
    sendVerificationCode();
  };

return (
    <>
      <Head>
        <title>邮箱注册 | 您的网站名称</title>
        <meta name="description" content="创建您的账户" />
      </Head>

      <Container maxWidth="sm" sx={{ my: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            注册新账户
          </Typography>

          {success ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                注册成功!
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                您的账户已成功创建，请使用您的邮箱和密码登录。
              </Typography>
              <Button 
                variant="contained" 
                href="/auth/login" 
                size="large"
              >
                前往登录
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography variant="body1" sx={{ mb: 3 }}>
                请输入您的邮箱地址，验证码，以及设置密码完成注册。
              </Typography>
              
              <TextField
                fullWidth
                label="邮箱地址"
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({...errors, email: ''});
                }}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />

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

              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="设置密码"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors({...errors, password: ''});
                  }}
                  error={!!errors.password}
                  helperText={errors.password || '至少8位字符'}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              
              <TextField
                fullWidth
                label="确认密码"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrors({...errors, confirmPassword: ''});
                }}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                sx={{ mb: 3 }}
              />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Button
                fullWidth
                variant="contained"
                size="large"
                onClick={handleSubmit}
                sx={{ color: '#9facc6',
                    '&.Mui-disabled': {
                    color: '#5c6a85', // 你想要的禁用文字颜色
                    } }}
                disabled={
                  loading ||
                  !email ||
                  !verificationCode ||
                  !password ||
                  !confirmPassword
                }
              >
                {loading ? <CircularProgress size={24} /> : '完成注册'}
              </Button>
              <Button 
                fullWidth
                variant="contained"
                size="large"
                href="/auth/login" 
                sx={{ color: '#9facc6'}}
                >已注册，去登陆</Button>
            </Box>

            </Box>
          )}
        </Paper>
      </Container>
    </>
  );
}